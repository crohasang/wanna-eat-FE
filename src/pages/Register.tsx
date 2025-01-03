/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import BackButton from '../components/common/BackButton';
import Button from '../components/common/Button';
import ProgressBar from '../components/register/ProgressBar';
import { Col } from '../components/commons/Flex';
import NameStep from '../components/register/NameStep';
import GenderStep from '../components/register/GenderStep';
import DepartmentStep from '../components/register/DepartmentStep';

const Register = () => {
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [department, setDepartment] = useState('');

  const handleNextStep = () => {
    if (step === 1 && nickname.trim()) {
      setStep(2);
    } else if (step === 2 && gender) {
      setStep(3);
    } else if (step === 3 && department) {
      // Handle final submission
      console.log('Submitted:', { nickname, gender, department });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getCurrentStep = () => {
    switch (step) {
      case 1:
        return <NameStep nickname={nickname} onNicknameChange={setNickname} />;
      case 2:
        return <GenderStep gender={gender} onGenderChange={setGender} />;
      case 3:
        return <DepartmentStep department={department} onDepartmentChange={setDepartment} />;
      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return !nickname.trim();
      case 2:
        return !gender;
      case 3:
        return !department;
      default:
        return true;
    }
  };

  return (
    <Col
      css={css`
        height: 100vh;
        width: 100vw;
        padding: 0 20px;
      `}
      justifyContent="space-between"
      alignItems="center"
    >
      <Col
        css={css`
          width: 100%;
          max-width: 400px;
          padding: 20px;
          flex: 1;
        `}
        gap="24px"
        alignItems="center"
      >
        <div
          css={css`
            width: 100%;
            margin-bottom: 40px;
          `}
        >
          {step === 1 ? (
            <BackButton to="/" />
          ) : (
            <BackButton onClick={handleBack} />
          )}
          <ProgressBar currentStep={step} totalSteps={7} />
        </div>
        
        {getCurrentStep()}
      </Col>
      
      <div
        css={css`
          width: 100%;
          max-width: 400px;
          padding: 20px;
        `}
      >
        <Button 
          onClick={handleNextStep}
          disabled={isNextDisabled()}
        >
          다음
        </Button>
      </div>
    </Col>
  );
};

export default Register;