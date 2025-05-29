import { FooterItem, type FooterItemProps } from '../FooterItem';
import { useLocation } from 'react-router-dom';
import { Wrapper, InnerWrapper } from './Footer.styles';

export interface FooterProps {
    items: FooterItemProps[];
}

export function Footer({ items }: FooterProps) {
    const pathname = useLocation()?.pathname;

    return (
        <Wrapper>
            <InnerWrapper>
                {items.map((item, idx) => (
                    <FooterItem key={`footer-item-${item.text}-${idx}`} {...item} selected={pathname === item.to} />
                ))}
            </InnerWrapper>
        </Wrapper>
    );
}
