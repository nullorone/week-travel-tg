import { Link } from '../Link/Link';

import { LinkProps } from 'react-router-dom';
import { ReactNode } from 'react';
import { Wrapper, Text } from './FooterItem.styles';

export interface FooterItemProps {
    text: string;
    icon: ReactNode;
    to: LinkProps['to'];
    selected?: boolean;
}

export function FooterItem({ text, icon, to, selected }: FooterItemProps) {
    return (
        <Link to={to}>
            <Wrapper $isSelected={selected}>
                {icon}
                <Text>{text}</Text>
            </Wrapper>
        </Link>
    );
}
