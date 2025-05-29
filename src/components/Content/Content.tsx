import { PropsWithChildren } from 'react';
import { Wrapper, InnerWrapper } from './Content.styles';

export interface ContentProps extends PropsWithChildren {
    padBottom?: number;
}

export function Content({ padBottom, children }: ContentProps) {
    return (
        <Wrapper $padBottom={padBottom}>
            <InnerWrapper>{children}</InnerWrapper>
        </Wrapper>
    );
}
