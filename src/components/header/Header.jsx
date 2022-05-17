import Search from "components/search/Search";

import { ReactComponent as Logo } from "assets/icons/git.svg";

import "./Header.scss";

const Header = ({ setSearch }) => {
  return (
    <header className="header">
      <Logo className="logo" />
      <Search setSearch={setSearch} />
    </header>
  );
};

export default Header;
