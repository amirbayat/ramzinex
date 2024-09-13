import React, { useState } from "react";
import styles from "./img.module.scss";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const Img = (props: Props) => {
  const { src, alt, className = "" } = props;
  const [defaultImageSrc, setDefaultImageSrc] = useState("");

  function imageLoadError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    setDefaultImageSrc("/images/default-logo.png");
  }
  return (
    <div>
      <img
        src={defaultImageSrc || src}
        alt={alt}
        className={className}
        onError={imageLoadError}
      />
    </div>
  );
};

export default Img;
