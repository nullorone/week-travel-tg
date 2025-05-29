import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-color: var(--tgui--bg_color, black);
    box-shadow: 0 0 4px var(--tgui--hint_color, white);
    z-index: 10000;
`;
