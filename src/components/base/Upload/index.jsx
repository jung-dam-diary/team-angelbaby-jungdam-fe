import React, { useRef } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: inline-block;
`;

const Input = styled.input`
  display: none;
`;

const Button = styled.button`
  all: unset;
`;

const Upload = ({ children, onChange, name, ...props }) => {
  const imageUploadInput = useRef(null);

  const handleImageUploadClick = () => {
    imageUploadInput.current.click();
  };

  return (
    <Container>
      <Input
        type="file"
        name={name}
        accept="image/jpg, image/jpeg, image/png"
        multiple
        ref={imageUploadInput}
        onChange={onChange}
      />
      <Button type="button" onClick={handleImageUploadClick} {...props}>
        {children}
      </Button>
    </Container>
  );
};

export default Upload;
