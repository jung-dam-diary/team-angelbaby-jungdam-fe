import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React, { useState, useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  DiaryCreateStepOne,
  DiaryCreateStepTwo,
  DiaryCreateStepThree,
} from '@components/domain';
import { Button, Icon, ProgressBar } from '@components/base';
import font from '@assets/fonts';
import color from '@assets/colors';
import DefaultContainer from '@styles/DefaultContainer';
import useForm from '@hooks/useForm';
import { postImageUpload } from '@api/postImageUpload';
import { postDiaryCreate } from '@api/postDiaryCreate';

const DefaultMarginTop = css`
  margin: 80px 0 80px 0;
`;

const ButtonStyle = {
  width: '100%',
  boxSizing: 'border-box',
  position: 'absolute',
  bottom: '0',
};

const DiaryCreatePage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const buttonRef = useRef();
  const { values, handleChange } = useForm({
    initialValues: {
      date: '',
      title: '',
      content: '',
      photos: [],
    },
  });
  const { date, title, content, photos } = values;

  useLayoutEffect(() => {
    const detectMobileKeyboard = () => {
      const activeElement = document.activeElement;

      activeElement.focus();
      activeElement.scrollIntoView({ block: 'end' });

      buttonRef.current.style.display =
        buttonRef.current.style.display === 'none' ? 'block' : 'none';
    };

    window.addEventListener('resize', detectMobileKeyboard);

    return () => window.removeEventListener('resize', detectMobileKeyboard);
  }, []);

  const handleNextButtonClick = () => {
    setStep(() => step + 1);
  };

  const handlePrevButtonClick = () => {
    if (step === 1) {
      navigate('../diary');
    } else {
      setStep(() => step - 1);
    }
  };

  const handleSubmitButtonClick = async () => {
    try {
      const urls = [];

      for (let i = 0; i < photos.length; i++) {
        const formData = new FormData();
        formData.append('image', photos[i]);

        const { data } = await postImageUpload(formData);
        urls.push(data.uploadImageUrl);
      }

      const submitData = {
        diaryTitle: title,
        diaryContent: content,
        diaryPhotos: urls,
        recordedAt: date,
      };

      // albumId 조회 코드 구현 필요
      // 반환된 diaryId에 대한 navigate 코드 구현 필요
      const { data } = await postDiaryCreate(5, submitData);
      console.log(data);
    } catch (e) {
      console.log('fail');
      console.log(e.message);
    }
    // api 코드 추가 예정
    // navigate('../diary');
  };

  const leftHeaderContent = () => {
    return (
      <>
        <Button>
          <Icon
            name="ep:back"
            color={color.brown}
            onClick={handlePrevButtonClick}
          />
        </Button>
      </>
    );
  };

  const centerHeaderContent = () => {
    const Span = styled.span`
      white-space: nowrap;
      ${font.heading_20};
    `;

    return <Span>다이어리 만들기</Span>;
  };

  const renderDiaryCreateForm = () => {
    if (step === 1) {
      return <DiaryCreateStepOne onChange={handleChange} date={date} />;
    } else if (step === 2) {
      return (
        <DiaryCreateStepTwo
          onChange={handleChange}
          title={title}
          content={content}
        />
      );
    } else if (step === 3) {
      return <DiaryCreateStepThree onChange={handleChange} photos={photos} />;
    }
  };

  return (
    <DefaultContainer>
      <Header
        leftComponent={leftHeaderContent()}
        centerComponent={centerHeaderContent()}
      />

      <ProgressBar
        className="progress"
        css={DefaultMarginTop}
        totalStep={3}
        currentStep={step}
      />

      {renderDiaryCreateForm()}

      <Button
        mode="primary"
        style={{ ...ButtonStyle }}
        ref={buttonRef}
        onClick={step === 3 ? handleSubmitButtonClick : handleNextButtonClick}
      >
        {step === 3 ? '확인' : '다음'}
      </Button>
    </DefaultContainer>
  );
};

export default DiaryCreatePage;
