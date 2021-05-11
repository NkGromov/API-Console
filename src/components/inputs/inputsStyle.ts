import {Field} from 'formik';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin: 0 0 20px 0;
  &:last-child {
    margin: 0 0 25px 0;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
`;
export const InputTitle = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.color || '#0D0D0D'};
`;

export const InputOptional = styled.span`
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const Input = styled(Field)`
  background: #ffffff;
  border: 1px solid ${(props) => props.color || 'rgba(0, 0, 0, 0.2)'};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
  font-size: 18px;
  line-height: 30px;
  color: #0d0d0d;
  &:hover {
    border: 1px solid ${(props) => props.color || 'rgba(0, 0, 0, 0.4)'};
  }
  &:focus {
    border: 2px solid ${(props) => props.color || 'rgba(0, 0, 0, 0.2)'};
    border-radius: 5px;
  }
`;
