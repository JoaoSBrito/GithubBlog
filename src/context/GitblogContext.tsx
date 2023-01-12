import { createContext, ReactNode } from "react";

interface GitblogType {}

interface GitblogProviderProps {
  children?: ReactNode;
}

export const GitblogContext = createContext({} as GitblogType);

export function GitblogProvider({ children }: GitblogProviderProps) {
  return <GitblogContext.Provider value={}>{children}</GitblogContext.Provider>;
}
