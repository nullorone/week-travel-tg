import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 72px;
    padding: 8px 16px 16px 16px;
    gap: 12px;
`;

export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;

    & > * {
        display: block;
        width: 100%;
    }
`;
