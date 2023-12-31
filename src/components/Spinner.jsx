import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: ${({ size }) => size || '40px'};
  height: ${({ size }) => size || '40px'};
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007bff;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Spinner = ({ size }) => {
  return <SpinnerContainer size={size} />;
};

export default Spinner;
