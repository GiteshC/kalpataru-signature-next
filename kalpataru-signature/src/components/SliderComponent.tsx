import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = React.forwardRef(
  ({ setting, children }: { setting: any; children: any }, ref: any) => {
    return (
      <Slider {...setting} ref={ref}>
        {children}
      </Slider>
    );
  }
);

export default SliderComponent;