/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../components/commons/Flex';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logoPhrase from '../assets/home/logoPhrase.svg'
import logoImgWhite from '../assets/home/logoImgWhite.svg'
import emailIcon from '../assets/login/email.svg'
import passwordIcon from '../assets/login/password.svg'
import passwordEyeIcon from '../assets/login/passwordEye.svg'
import Button from '../components/common/Button';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/home');
  }

  const handleSignup = () => {
    navigate('/register');
  }

  const handleFindEmailAndPassword = () => {
    navigate('/findEmailAndPassword');
  }

  return (
    <Col
      justifyContent='center'
      alignItems='center'
      css={css`
        height: 100vh;
        width: 100%;
        background-color: #F66;
        max-width: 400px;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        `}
      >
        <div css={css`
        margin-top: 100px;
        gap-y: 10px;
        `}>
        <div css={css`
          font-family: 'BM kkubulim';
          color: white;
          text-align: center;
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px; /* 129.412% */
          letter-spacing: -0.085px;
          z-index: 1;
          `}>같이 먹는 즐거움,
        </div>
        <div css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap-x: 10px;
          `}>
          <img src={logoImgWhite} css={css`
            width: 71.3px;
            height: 62px;
            `}/>
          <img src={logoPhrase} css={css`
            width: 145.858px;
            height: 41.333px;
            filter: brightness(0) invert(1);
            `} />
        </div>
        </div>
        
        <Col
        css={css`
            width: 100%;
            height: 70%;
            border-radius: 20px 20px 0px 0px;
            background-color: white;
            box-shadow: 0px -4px 6px 0px rgba(0, 0, 0, 0.25);
            margin-top: auto;
        `}
        >
          <div css={css`
            margin-top: 43px;
            color: var(--Secondary, #FFBE39);
            text-align: center;
            font-family: "BM kkubulim";
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 110% */
          `}>LOG IN</div>

          <div css={css`
            margin-top: 37px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
            padding: 0 20px;
          `}>
              <form onSubmit={handleLogin} css={css`
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: 10px;
              `}>
                <div css={css`
                  display: flex;
                  padding: 20px;
                  align-items: center;
                  gap: 20px;
                  align-self: stretch;
                  border-radius: 20px;
                  border: 1px solid var(--Gray, #E1E1E1);
                  position: relative;
                `}>
                  <img src={emailIcon} css={css`
                    width: 20px;
                    height: 16px;
                    flex-shrink: 0;
                  `} alt="email icon" />
                  <input
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    css={css`
                      border: none;
                      outline: none;
                      width: 100%;
                      color: var(--Gray, #878787);
                      font-family: Pretendard;
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 118%;
                      white-space: nowrap;
                      background: transparent;
                      padding-right: 20px;

                      &::placeholder {
                        color: var(--Gray, #878787);
                      }
                    `}
                  />
                </div>

                <div css={css`
                  display: flex;
                  padding: 20px;
                  align-items: center;
                  gap: 20px;
                  align-self: stretch;
                  border-radius: 20px;
                  border: 1px solid var(--Gray, #E1E1E1);
                  position: relative;
                `}>
                  <img src={passwordIcon} css={css`
                    width: 18px;
                    height: 20px;
                    flex-shrink: 0;
                  `} alt="password icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    css={css`
                      border: none;
                      outline: none;
                      width: 100%;
                      color: var(--Gray, #878787);
                      font-family: Pretendard;
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 118%;
                      white-space: nowrap;
                      background: transparent;
                      padding-right: 50px;

                      &::placeholder {
                        color: var(--Gray, #878787);
                      }
                    `}
                  />
                  <img 
                    src={passwordEyeIcon} 
                    onClick={() => setShowPassword(!showPassword)}
                    css={css`
                      width: 20px;
                      height: 20px;
                      position: absolute;
                      right: 20px;
                      cursor: pointer;
                    `} 
                    alt="password eye icon" 
                  />
                </div>

                <Button type="submit" width="100%" css={css`
                  margin-top: 20px;
                  cursor: pointer;
                `}>로그인</Button>
              </form>
              <div css={css`
                margin-top: 27px;
                margin-bottom: 17px;
                display: flex;
                justify-content: center;
                color: var(--Gray, #878787);
                font-family: Pretendard;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 118%; /* 18.88px */
                letter-spacing: -0.08px;
                cursor: pointer;
              `} onClick={handleFindEmailAndPassword}>이메일/비밀번호 찾기</div>
              <div css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;
              `}>
                <span css={css`
                color: var(--Gray, #878787);
                font-family: Pretendard;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 118%; /* 18.88px */
                letter-spacing: -0.08px;
                `}>계정이 없으신가요?</span>
                <span css={css`
                color: var(--Primary, #F66);
                font-family: Pretendard;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 118%;
                letter-spacing: -0.08px;
                text-decoration-line: underline;
                text-decoration-style: solid;
                text-decoration-skip-ink: auto;
                text-decoration-thickness: auto;
                text-underline-offset: auto;
                text-underline-position: from-font;
                cursor: pointer;
                `} onClick={handleSignup}>가입하기</span>  
              </div>
            </div>
        </Col>
    </Col>
  )
}

export default Login;