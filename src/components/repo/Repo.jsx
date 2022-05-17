import "./Repo.scss";

const Repo = ({ name, html_url, description }) => {
  return (
    <div className="repo">
      <a className="repo__link" href={html_url} target="_blank" rel="noreferrer">
        <h3 className="repo__title">{name}</h3>
      </a>    
      <p className="repo__description">{description}</p>
    </div>
  );
};

export default Repo;
