/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from "../components/commons/Flex"
import logoPhrase from '../assets/home/logoPhrase.svg'
import logoImgWhite from '../assets/home/logoImgWhite.svg'

const Splash = () => {
  return (
    <Col
      justifyContent='center'
      alignItems='center'
      css={css`
        background-color: #FF6666;
        height: 100%;
        width: 100%;
        max-width: 400px;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      `}
    >
        <div css={css`
            font-family: 'BMkkubulimTTF-Regular';
            color: #FFF;
            text-align: center;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 129.412% */
            letter-spacing: -0.085px; 
            `}>함께 먹는 즐거움,</div>
        <img 
          src={logoPhrase} 
          css={css`
            width: 159px;
            height: 45px;
            margin-top: 10px;
            filter: brightness(0) invert(1);
          `}
          alt="logo phrase"
        />
        <img
          src={logoImgWhite}
          css={css`
            width: 177px;
            height: 154px;
            margin-top: 20px;
          `}
          alt="app logo"
        />
    </Col>
  )
}

export default Splash