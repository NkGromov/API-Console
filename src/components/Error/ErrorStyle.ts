import styled from "styled-components";

export const ErrorWrapper = styled.div`
    display: flex;
    padding: 10px;
    column-gap: 8px;
    width: 100%;
    background: rgba(207, 44, 0, 0.1);
    border-radius: 5px;
    margin: 0 0 20px 0;
`;

export const ErrorSmile = styled.img`
    width: 24px;
    height: 24px;
    margin: 5px 0 0 0
`;
export const ErrorText = styled.div``;


export const ErrorTitle = styled.span`
    font-size: 18px;
    color: #CF2C00;
`;

export const ErrorDesc = styled.span`
    display: block;
    font-size: 12px;
    line-height: 20px;
    color: #CF2C00;
    opacity: 0.5;
`;