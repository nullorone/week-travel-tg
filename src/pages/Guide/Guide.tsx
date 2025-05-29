import { Page } from '../../components/Page';
import { Content } from '../../components/Content';
import { CardWrapper, ContentWrapper, Title, BlockWrapper } from './Guide.styles';
import { Card } from '../../components/Card';

export function Guide() {
    return (
        <Page>
            <Content>
                <ContentWrapper>
                    <Title>Туристические гайды</Title>
                    <BlockWrapper>
                        <h2>Актуальное</h2>
                        <CardWrapper>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </CardWrapper>
                    </BlockWrapper>
                    <BlockWrapper>
                        <h2>Страны</h2>
                        <CardWrapper>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </CardWrapper>
                    </BlockWrapper>
                </ContentWrapper>
            </Content>
        </Page>
    );
}
