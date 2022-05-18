import React from "react";

const Diamond = () => {
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="693"
      height="693"
      fill="none"
      viewBox="0 0 693 693"
    >
      <g className={"diamondLogo"} filter="url(#filter0_d_36_71)">
        <path
          stroke="url(#paint0_linear_36_71)"
          strokeWidth="30"
          d="M347 601.213H707.9259999999999V962.1389999999999H347z"
          shapeRendering="crispEdges"
          transform="rotate(-135 347 601.213)"
        ></path>
      </g>
      <g className={"diamondLogo"} filter="url(#filter1_d_36_71)">
        <path
          stroke="url(#paint1_linear_36_71)"
          strokeWidth="30"
          d="M346.563 643.213H766.269V1062.9189999999999H346.563z"
          shapeRendering="crispEdges"
          transform="rotate(-135 346.563 643.213)"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_36_71"
          width="608.853"
          height="608.853"
          x="42.574"
          y="41.574"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="14"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.481059 0 0 0 0 0.954167 0 0 0 0 0.782401 0 0 0 0.3 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_36_71"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_36_71"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_36_71"
          width="691.979"
          height="691.98"
          x="0.574"
          y="0.447"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="14"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.481059 0 0 0 0 0.954167 0 0 0 0 0.782401 0 0 0 0.24 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_36_71"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_36_71"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_36_71"
          x1="677.926"
          x2="287.152"
          y1="910.926"
          y2="520.152"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4BD6A4"></stop>
          <stop offset="0.949" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_36_71"
          x1="762.387"
          x2="266.004"
          y1="1038.44"
          y2="542.046"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#53FFC1"></stop>
          <stop offset="0.949" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>

    )
}

export default Diamond
