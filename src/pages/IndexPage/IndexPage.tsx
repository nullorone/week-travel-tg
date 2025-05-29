// import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

// import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

// import tonSvg from './ton.svg';
import { Content } from '@/components/Content/Content';
import { Card } from '../../components/Card';
// import { type FooterItemProps } from '@/components/FooterItem';
import { Title, CardWrapper, ContentWrapper } from './IndexPage.styles';

// const FOOTER_ITEMS: FooterItemProps[] = [
//     {
//         text: 'Main',
//         url: '/',
//     },
//     {
//         text: 'Profile',
//         url: '/profile',
//     },
// ];

export const IndexPage: FC = () => {
    return (
        <Page back={false}>
            {/*<List>*/}
            {/*  <Section*/}
            {/*    header="Features"*/}
            {/*    footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"*/}
            {/*  >*/}
            {/*    <Link to="/ton-connect">*/}
            {/*      <Cell*/}
            {/*        before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}*/}
            {/*        subtitle="Connect your TON wallet"*/}
            {/*      >*/}
            {/*        TON Connect*/}
            {/*      </Cell>*/}
            {/*    </Link>*/}
            {/*  </Section>*/}
            {/*  <Section*/}
            {/*    header="Application Launch Data"*/}
            {/*    footer="These pages help developer to learn more about current launch information"*/}
            {/*  >*/}
            {/*    <Link to="/init-data">*/}
            {/*      <Cell subtitle="User data, chat information, technical data">Init Data</Cell>*/}
            {/*    </Link>*/}
            {/*    <Link to="/launch-params">*/}
            {/*      <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>*/}
            {/*    </Link>*/}
            {/*    <Link to="/theme-params">*/}
            {/*      <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>*/}
            {/*    </Link>*/}
            {/*  </Section>*/}
            {/*</List>*/}
            <Content>
                <ContentWrapper>
                    <Title>Week Travel</Title>
                    <p>Здесь какой-то текст о приложении и туристических гайдах</p>
                    <CardWrapper>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </CardWrapper>
                </ContentWrapper>
            </Content>
        </Page>
    );
};
