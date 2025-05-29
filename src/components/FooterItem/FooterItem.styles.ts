import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $isSelected?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 16px;
    width: 100%;
    border-radius: 16px;

    ${({ $isSelected }) =>
        $isSelected &&
        css`
            background-color: var(--tgui--section_bg_color, gray);
        `}
`;

export const Text = styled.span`
    font-size: 14px;
    line-height: 1.2;
    color: var(--tgui--text_color, gray);
`;
