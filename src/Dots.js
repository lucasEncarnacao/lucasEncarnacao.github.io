import React from "react";

const Dots = (props) => {
  const { images, currImage, setCurrImage } = props;

  let dots = images.map((image, index) => {
    let classes =
      "w-4 h-4 rounded-full transition-all duration-500 cursor-pointer";
    let color = " bg-gray-300";

    if (index == currImage) {
      color = " bg-gray-800";
    }

    const dotClick = (event) => {
      setCurrImage(index);
    };

    return <div className={classes + color} onClick={dotClick} key={image} />;
  });

  return <div className="flex space-x-2">{dots}</div>;
};

export default Dots;
