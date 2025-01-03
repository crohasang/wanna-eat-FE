/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../components/commons/Flex';

const Onboarding = () => {
  const handleGoogleLogin = () => {
    console.log('구글 로그인 버튼 클릭!');
  };

  return (
    <Col
      justifyContent='center'
      alignItems='center'
      css={css`
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
      `}
    >
      <h1
        css={css`
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
        `}
      >
        먹을래
      </h1>
      <img
        src='/google_button.svg'
        alt='Google Login'
        onClick={handleGoogleLogin}
        css={css`
          cursor: pointer;
          transition: transform 0.2s ease;
          &:hover {
            transform: scale(1.05);
          }
        `}
      />
    </Col>
  );
};

export default Onboarding;
