import React, { useState } from "react";
import Dots from "./Dots";

const Slideshow = (props) => {
  const [currImage, setCurrImage] = useState(0);
  const { images } = props;

  const prevClick = (event) => {
    let newImage = currImage - 1;

    if (newImage < 0) {
      newImage = images.length - 1;
    }

    setCurrImage(newImage);
  };

  const nextClick = (event) => {
    let newImage = currImage + 1;

    if (newImage >= images.length) {
      newImage = 0;
    }

    setCurrImage(newImage);
  };

  return (
    <div className="flex flex-col space-y-4 items-center">
      <div className="flex space-x-4 items-center">
        <p className="cursor-pointer" onClick={prevClick}>
          {"<"}
        </p>
        <img src={images[currImage]} alt="Project Image" />
        <p className="cursor-pointer" onClick={nextClick}>
          {">"}
        </p>
      </div>

      <Dots images={images} currImage={currImage} setCurrImage={setCurrImage} />
    </div>
  );
};

export default Slideshow;
