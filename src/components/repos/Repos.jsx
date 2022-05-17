import { useState, useEffect } from "react";

import getRepos from "api/repos";

import NoRepos from "assets/icons/repos.svg";

import Repo from "components/repo/Repo";
import Pagination from "components/pagination/Pagination";
import Spinner from "components/spinner/Spinner";
import EmptyState from "components/empty-state/EmptyState";

import "./Repos.scss";

const Repos = ({ publicRepos, login }) => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReposFromApi = async () => {
      try {
        setLoading(true);

        const res = await getRepos(login, currentPage);

        setRepos(res);

        setLoading(false);
      } catch (error) {
        setRepos([]);

        setLoading(false);
      }
    };

    getReposFromApi();
  }, [login, currentPage]);

  if (!repos.length && !loading) {
    return (
      <EmptyState noRepos icon={NoRepos} text="Repository list is empty" />
    );
  }

  return (
    <>
      {loading && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}
      {repos.length > 0 && (
        <div className="repos" style={{ display: loading ? "none" : "block" }}>
          <h1 className="repos__amount">Repositories ({publicRepos})</h1>
          {repos.map(({ id, name, html_url, description }) => (
            <Repo
              key={id}
              name={name}
              html_url={html_url}
              description={description}
            />
          ))}

          <Pagination
            publicRepos={publicRepos}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default Repos;
