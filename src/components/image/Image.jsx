import AspectRatio from "components/aspectRatio/AspectRatio";

import "./Image.scss";

const Image = ({ src, alt }) => {
  return (
    <AspectRatio ratio="1/1">
      <img className="image" src={src} alt={alt} />
    </AspectRatio>
  );
};

export default Image;
