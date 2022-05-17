import "./AspectRatio.scss";

const AspectRatio = ({ ratio, children }) => {
  return (
    <div
      className="aspect-ratio"
      ratio={ratio}
      style={{ paddingTop: `calc(1 / (${ratio}) * 100%)` }}
    >
      {children}
    </div>
  );
};

export default AspectRatio;
