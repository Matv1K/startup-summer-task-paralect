import { useState } from "react";

import Header from "components/header/Header";
import User from "components/user/User";
import EmptyState from "components/empty-state/EmptyState";

import Search from "assets/icons/search.svg";

import "./App.scss";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header setSearch={setSearch} />
      {search ? (
        <User search={search} />
      ) : (
        <EmptyState icon={Search} text="Start with searching a GitHub user" />
      )}
    </>
  );
}

export default App;
