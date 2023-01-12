import { ProfileContainer, ProfileContent } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import avatarP from "/avatar.png";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import axios from "axios";

interface userData {
  name: string;
  login: string;
  followers: number;
  avatar_url: string;
  company?: string;
}

export function Profile() {
  const [data, setData] = useState<userData[]>([]);

  const fetchData = async () => {
    const response = await api.get("users/JoaoSBrito", {});

    setData(response.data);
    // console.log(setData);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <ProfileContainer>
      <div className="avatar">
        <img src={avatarP} alt="" />
      </div>

      <ProfileContent>
        <h1>{""}TESTE</h1>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className="userInfos">
          <a className="userInfo" href="#">
            <FontAwesomeIcon icon={faGithub} color={"#3A536B"} />
            Jsbrito
          </a>

          <a className="userInfo" href="#">
            <FontAwesomeIcon icon={faBuilding} color={"#3A536B"} />
            Rocketseat
          </a>

          <a className="userInfo" href="#">
            <FontAwesomeIcon icon={faUserGroup} color={"#3A536B"} />
            32 seguidores
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
