import styled from 'styled-components';

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 32px;
`;

export const Title = styled.h1`
    margin: 0;
    text-align: center;
`;

export const BlockWrapper = styled.div`
    padding: 0 16px;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    & > * {
        flex-basis: calc(50% - 8px);
    }
`;
