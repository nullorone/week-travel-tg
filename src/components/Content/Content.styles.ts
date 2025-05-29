import styled from 'styled-components';
import { FOOTER_PAD_BOTTOM } from '../../constants/const';

const OFFSET = 44;

export const Wrapper = styled.div<{ $padBottom?: number }>`
    height: 100%;
    padding-bottom: ${({ $padBottom }) => $padBottom ?? `${FOOTER_PAD_BOTTOM + OFFSET}px`};
    box-sizing: border-box;
`;

export const InnerWrapper = styled.div`
    height: 100%;
    overflow-y: auto;
`;
