import styled from '@emotion/styled';
import React, { useState, useRef, useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Header,
  DiaryCreateStepOne,
  DiaryCreateStepTwo,
  DiaryCreateStepThree,
} from '@components/domain';
import { Button, Icon, ProgressBar } from '@components/base';
import font from '@assets/fonts';
import color from '@assets/colors';
import useForm from '@hooks/useForm';
import { postImageUpload } from '@api/postImageUpload';
import { postDiaryCreate } from '@api/postDiaryCreate';
import { getExistenceDiaryDate } from '@api/getExistenceDiaryDate';
import getTodayDate from '../../common/utils/getTodayDate';

const Conatainer = styled.div`
  margin-top: 80px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ButtonStyle = {
  marginTop: '50px',
  width: '100%',
  height: '50px',
  boxSizing: 'border-box',
};

const DiaryCreatePage = () => {
  const { albumId } = useParams();
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

  const [inputErrors, setInputErrors] = useState({});
  const { dateError, titleError, contentError } = inputErrors;

  useLayoutEffect(() => {
    const detectMobileKeyboard = () => {
      const activeElement = document.activeElement;

      activeElement.focus();
      activeElement.scrollIntoView({ block: 'end' });
    };

    window.addEventListener('resize', detectMobileKeyboard);

    return () => window.removeEventListener('resize', detectMobileKeyboard);
  }, []);

  const handleNextButtonClick = async () => {
    if (step === 1) {
      if (!date) {
        setInputErrors((values) => ({
          ...values,
          dateError: '날짜를 선택해주세요.',
        }));

        return;
      } else if (date > getTodayDate()) {
        setInputErrors((values) => ({
          ...values,
          dateError: '미래의 날짜에 해당하는 일기는 작성할 수 없습니다 !',
        }));

        return;
      } else if (date) {
        const data = {
          albumId,
          date,
        };

        try {
          const { existence } = await getExistenceDiaryDate(data);

          if (existence) {
            setInputErrors((values) => ({
              ...values,
              dateError: '선택하신 날짜는 일기를 이미 작성하셨습니다.',
            }));

            return;
          }
        } catch (e) {
          console.log(e.message);
          return;
        }
      }
    }

    if (step === 2) {
      if (title.length === 0) {
        setInputErrors((values) => ({
          ...values,
          titleError: '제목을 작성해주세요.',
        }));

        return;
      } else if (title.length > 30) {
        setInputErrors((values) => ({
          ...values,
          titleError: '제목은 30자 이내로 작성해주세요.',
        }));

        return;
      } else {
        setInputErrors((values) => ({
          ...values,
          titleError: '',
        }));
      }

      if (content.length === 0) {
        setInputErrors((values) => ({
          ...values,
          contentError: '일기를 작성해주세요.',
        }));

        return;
      } else {
        setInputErrors((values) => ({
          ...values,
          contentError: '',
        }));
      }
    }

    setStep(() => step + 1);

    setInputErrors((values) => ({
      ...values,
      dateError: '',
      titleError: '',
      contentError: '',
    }));
  };

  const handlePrevButtonClick = () => {
    if (step === 1) {
      navigate(`/album/${albumId}`);
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

      const data = {
        albumId,
        submitData,
      };

      const { diaryId } = await postDiaryCreate(data);
      navigate(`../${diaryId}`);
    } catch (e) {
      console.log(e.message);

      return;
    }
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
      return (
        <DiaryCreateStepOne
          onChange={handleChange}
          date={date}
          getTodayDate={getTodayDate}
          dateError={dateError}
        />
      );
    } else if (step === 2) {
      return (
        <DiaryCreateStepTwo
          onChange={handleChange}
          title={title}
          content={content}
          titleError={titleError}
          contentError={contentError}
          setInputErrors={setInputErrors}
        />
      );
    } else if (step === 3) {
      return <DiaryCreateStepThree onChange={handleChange} photos={photos} />;
    }
  };

  return (
    <Conatainer>
      <Header
        leftComponent={leftHeaderContent()}
        centerComponent={centerHeaderContent()}
      />

      <ProgressBar className="progress" totalStep={3} currentStep={step} />

      {renderDiaryCreateForm()}

      <Button
        mode="primary"
        style={{ ...ButtonStyle }}
        ref={buttonRef}
        onClick={step === 3 ? handleSubmitButtonClick : handleNextButtonClick}
      >
        {step === 3 ? '확인' : '다음'}
      </Button>
    </Conatainer>
  );
};

export default DiaryCreatePage;
