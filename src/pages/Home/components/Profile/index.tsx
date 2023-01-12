import { ProfileContainer, ProfileContent } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import avatarP from "/avatar.png";

export function Profile() {
  return (
    <ProfileContainer>
      <div className="avatar">
        <img src={avatarP} alt="" />
      </div>

      <ProfileContent>
        <h1>Cameron Williamson</h1>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className="userInfos">
          <div className="userInfo">
            <FontAwesomeIcon icon={faGithub} />
            Jsbrito
          </div>

          <div className="userInfo">
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </div>

          <div className="userInfo">
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </div>
        </div>
      </ProfileContent>
    </ProfileContainer>
  );
}
