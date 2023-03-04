import React from "react";
import classes from "./thumbnail.module.css";
import { Image } from "react-bootstrap";

type thumbnailPropsTypes = {
  selectedImgUrl: string;
  className: string;
};

const Thumbnail = (props: thumbnailPropsTypes) => {
  const { selectedImgUrl, className } = props;

  return (
    <Image
      src={selectedImgUrl}
      alt="Thumbnail"
      className={`img-thumbnail d-block ${classes.thumbnail} ${className}`}
    />
  );
};

export default Thumbnail;
