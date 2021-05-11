import React from 'react';
import { ErrorDesc, ErrorSmile, ErrorText, ErrorTitle, ErrorWrapper } from './ErrorStyle';

interface props {
    title : string,
    description: string
  }

const Error: React.FC<props> = ({title, description}) => {
    return (
        <>
        <ErrorWrapper>
          <ErrorSmile src="/icons/smile.svg" alt="Смайл"/>
            <ErrorText>
              <ErrorTitle>{title}</ErrorTitle>
              <ErrorDesc>{description}</ErrorDesc>
            </ErrorText>
        </ErrorWrapper>
        </>
    );
};

export default Error;