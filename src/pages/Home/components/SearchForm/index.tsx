import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { GitblogContext } from "../../../../context/GitblogContext";
import { SearchFormContainer } from "./styles";

const SearchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputType = zod.infer<typeof SearchFormSchema>;

export function SearchForm() {
  const { getPosts } = useContext(GitblogContext);
  const { register, handleSubmit } = useForm<SearchFormInputType>({
    resolver: zodResolver(SearchFormSchema),
  });

  async function handleSearch(data: SearchFormInputType) {
    await getPosts(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchFormContainer>
  );
}
