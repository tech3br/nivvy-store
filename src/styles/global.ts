import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

#__next { height: 100% }
  html,
  body {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      position: relative;
      height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;

    .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}

  }

  a {
      color: inherit;
      text-decoration: none;
  }

  * {
      box-sizing: border-box;
  }

  ul, p, li, a, h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
  }

  ::-moz-selection { /* Code for Firefox */
    color: white;
    background: #fbb03b;
  }


  ::selection{
    color: white;
    background: #fbb03b;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    /* Body/Regular */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Disable */

    color: #828282;
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    /* Body/Regular */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Disable */

    color: #828282;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
  /* Body/Regular */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Disable */

    color: #828282;
  }
`;
