"use client";

import React, { ReactNode, ForwardedRef } from "react";
import Slider, { Settings as SliderSettings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderComponentProps = {
  setting: SliderSettings;
  children: ReactNode;
};

const SliderComponent = React.forwardRef(
  ({ setting, children }: SliderComponentProps, ref: ForwardedRef<Slider>) => {
    return (
      <Slider {...setting} ref={ref}>
        {children}
      </Slider>
    );
  }
);

SliderComponent.displayName = "SliderComponent";

export default SliderComponent;
