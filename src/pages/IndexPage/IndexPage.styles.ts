import styled from 'styled-components';

export const ContentWrapper = styled.div`
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Title = styled.h1`
    margin: 0;
    text-align: center;
`;

export const CardWrapper = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    padding: 0 16px;

    & > * {
        flex-grow: 1;
    }

    & > *:nth-child(1) {
        flex-basis: 100%;
        height: 200px;
    }

    & > *:nth-child(5n) {
        flex-basis: 22%;
    }

    & > *:nth-child(4n) {
        flex-basis: 40%;
    }

    & > *:nth-child(3n) {
        flex-basis: 60%;
    }

    & > *:nth-child(2n) {
        flex-basis: 33%;
    }
`;
