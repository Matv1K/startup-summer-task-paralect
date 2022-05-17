import "./EmptyState.scss";

const EmptyState = ({ icon, text, noRepos }) => {
  return (
    <div className={`${noRepos ? "empty-repos-state" : "empty-state"}`}>
      <img className="empty-state__img" src={icon} alt="search" />
      <p className="empty-state__text">{text}</p>
    </div>
  );
};

export default EmptyState;