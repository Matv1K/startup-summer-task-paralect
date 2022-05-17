import useRounder from "hooks/useRounder";

import Image from "components/image/Image";

import Following from "assets/icons/following.svg";
import Followers from "assets/icons/followers.svg";

import "./UserInfo.scss";

const UserInfo = ({ user }) => {
  const { name, html_url, avatar_url, login, followers, following } = user;

  const roundedFollowers = useRounder(followers);
  const roundedFollowing = useRounder(following);

  return (
    <div className="user-info">
      <Image src={avatar_url} alt={name} />

      <h2 className="user-info__name">{name}</h2>
      <a
        className="user-info__link"
        rel="noreferrer"
        href={html_url}
        target="_blank"
      >
        <h3 className="user-info__login">{login}</h3>
      </a>

      <div className="user-info__bottom">
        <div className="user-info__bottom--followers followers">
          <img src={Followers} alt="followers" className="followers__img" />
          <span className="user-info__followers-amount">
            {roundedFollowers} {followers === 1 ? "follower" : "followers"}
          </span>
        </div>

        <div className="user-info__bottom--following following">
          <img src={Following} alt="following" className="following__img" />
          <span className="user-info__following-amount">
            {roundedFollowing} following
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
