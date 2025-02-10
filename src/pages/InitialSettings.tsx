/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../components/commons/Flex';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import InitialSettingsHeader from '../components/initialSettings/InitialSettingsHeader';
import SetNameCard from '../components/initialSettings/SetNameCard';
import SetGenderCard from '../components/initialSettings/SetGenderCard';
import Button from '../components/common/Button';
import SetDepartmentCard from '../components/initialSettings/SetDepartmentCard';
import SetRestaurantTypeCard from '../components/initialSettings/SetRestaurantTypeCard';

const InitialSettings = () => {
  const [step, setStep] = useState(1);
  const [isCurrentStepValid, setIsCurrentStepValid] = useState(false);
  const [direction, setDirection] = useState(0); // 1: 직진, -1: 후진

  const handleBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const handleNextStep = () => {
    setDirection(1);
    setStep(step + 1);
    setIsCurrentStepValid(false);
  };

  const slideTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <Col css={css`
        height: 100%;
        width: 100%;
        max-width: 390px;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        display: flex;
        flex-direction: column;
      `}>

      <InitialSettingsHeader 
        step={step}
        onBack={handleBack}
      />
      <div css={css`
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
      `}>
        <AnimatePresence mode="sync" initial={false} custom={direction}>
          {step === 1 && (
            <motion.div
              key="name-card"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              css={css`
                position: absolute;
                width: 100%;
                z-index: ${step === 1 ? 2 : 1};
              `}
            >
              <SetNameCard onValidationChange={setIsCurrentStepValid} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="gender-card"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              css={css`
                position: absolute;
                width: 100%;
                z-index: ${step === 2 ? 2 : 1};
              `}
            >
              <SetGenderCard onValidationChange={setIsCurrentStepValid} />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="department-card"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              css={css`
                position: absolute;
                width: 100%;
                z-index: ${step === 3 ? 2 : 1};
              `}
            >
              <SetDepartmentCard onValidationChange={setIsCurrentStepValid} />
            </motion.div>
          )}
          {step === 4 && (
            <motion.div
              key="restaurant-type-card"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              css={css`
                position: absolute;
                width: 100%;
                z-index: ${step === 4 ? 2 : 1};
              `}
            >
              <SetRestaurantTypeCard onValidationChange={setIsCurrentStepValid} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div css={css`
          margin: 0 20px;
          padding: 40px 0 20px;
        `}>
        <Button
          onClick={handleNextStep}
          disabled={!isCurrentStepValid}
        >
          다음
        </Button>
      </div>
    </Col>
  )
}

export default InitialSettings;