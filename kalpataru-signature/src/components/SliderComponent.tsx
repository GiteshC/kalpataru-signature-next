"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderComponentProps {
  setting: Settings;
  children: React.ReactNode;
}

const SliderComponent = React.forwardRef<Slider, SliderComponentProps>(
  ({ setting, children }, ref) => {
    return (
      <Slider {...setting} ref={ref}>
        {children}
      </Slider>
    );
  }
);

SliderComponent.displayName = "SliderComponent";

export default SliderComponent;
