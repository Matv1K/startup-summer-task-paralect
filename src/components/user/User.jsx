import { useState, useEffect } from "react";

import getUser from "api/user";

import Repos from "components/repos/Repos";
import Spinner from "components/spinner/Spinner";
import EmptyState from "components/empty-state/EmptyState";
import UserInfo from "components/user-info/UserInfo";

import Person from "assets/icons/person.svg";

import "./User.scss";

const User = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserFromApi = async () => {
      try {
        setLoading(true);

        setUser(await getUser(search));

        setLoading(false);
      } catch (error) {
        setUser(null);

        setLoading(false);
      }
    };

    getUserFromApi();
  }, [search]);

  return (
    <>
      {loading ? (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      ) : !loading && !user ? (
        <EmptyState text="User not found" icon={Person} />
      ) : (
        <div className="user">
          <UserInfo user={user} />
          <Repos publicRepos={user.public_repos} login={user.login} />
        </div>
      )}
    </>
  );
};

export default User;
