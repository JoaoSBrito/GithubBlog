import { ProfileContainer, ProfileContent } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useContext, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { GitblogContext } from "../../../../context/GitblogContext";

export function Profile() {
  const { data } = useContext(GitblogContext);

  return (
    <ProfileContainer>
      <div className="avatar">
        <img src={data.avatar_url} alt="" />
      </div>

      <ProfileContent>
        <h1>{data.name}</h1>
        <p>{data.bio}.</p>

        <div className="userInfos">
          <a className="userInfo" href="#">
            <FontAwesomeIcon icon={faGithub} color={"#3A536B"} />
            {data.login}
          </a>

          {!!data.company ? (
            <a className="userInfo" href="#">
              <FontAwesomeIcon icon={faBuilding} color={"#3A536B"} />
              {data.company}
            </a>
          ) : (
            <a className="userInfo" href="#">
              <FontAwesomeIcon icon={faBuilding} color={"#3A536B"} />
              N/A
            </a>
          )}

          <a className="userInfo" href="#">
            <FontAwesomeIcon icon={faUserGroup} color={"#3A536B"} />
            {data.followers} Seguidores
          </a>
        </div>
      </ProfileContent>
      <a className="link" href="https://github.com/JoaoSBrito">
        Github
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    </ProfileContainer>
  );
}
