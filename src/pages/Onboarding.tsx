/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { Col } from '../components/common/Flex';
import logoPhrase from '../assets/home/logoPhrase.svg'
import appLogoWhite from '../assets/home/appLogoWhite.svg'
import Button from '../components/common/Button';

const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <Col
      justifyContent='center'
      alignItems='center'
      css={css`
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
      font-family: 'BM kkubulim';
      color: var(--Text, #3D3D3D);
      text-align: center;
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 129.412% */
      letter-spacing: -0.085px;
      `}>같이 먹는 즐거움,</div>
      <img src={appLogoWhite} css={css`
        margin-top: 20px;
        width: 177px;
        height: 154px;
      `} 
        alt="logo img" />
      <img src={logoPhrase} css={css`
        margin-top: 10px;
        display: flex;
        width: 159px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        filter: brightness(0);
        `} 
        alt="logo phrase" />
      
      <Button 
        css={css`
          position: fixed;
          bottom: 36px;
        `}
        onClick={() => navigate('/login')}
      >
        시작하기
      </Button>
    </Col>
  );
};

export default Onboarding;
