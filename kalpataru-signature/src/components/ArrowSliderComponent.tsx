interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const PrevArrow = ({ onClick, className }: ArrowProps) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      <svg
        width="12"
        height="21"
        viewBox="0 0 12 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.73334 2.40585L2 10.9061L9.73334 19.4062"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export const NextArrow = ({ onClick, className }: ArrowProps) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      <svg
        width="12"
        height="21"
        viewBox="0 0 12 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2.40585L9.73333 10.9061L2 19.4062"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export const pincodesMapSec = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  speed: 1000,
  infinite: false,
  asNavFor: ".locationSlider",
};

export const pincodeMapSecNav = {
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".mapSlider",
  centerMode: false,
  fade: true,
  speed: 1000,
  focusOnSelect: true,
  infinite: false,
};

export const videoWrapperslider = {
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  speed: 800,
};

export const residentSlider = {
  arrows: true,
  dots: false,
  slidesToShow: 2.03,
  slidesToScroll: 1,
  infinite: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  centerMode: false,
  speed: 800,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 682,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const experienceSlider = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
};