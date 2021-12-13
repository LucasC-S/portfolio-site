import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import thumbSite from '../public/sitesplash.png'
import thumbMarkUp from '../public/markUp.png'
import thumbCrypto from '../public/cryptosplash.png'

const Works  = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="mysite" title="My Portfolio Site" thumbnail={thumbSite}>
                        My Portfolio Site
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="markup" title="MarkUp" thumbnail={thumbMarkUp}>
                        MarkUp
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="cryptonite" title="Cryptonite" thumbnail={thumbCrypto}>
                        MarkUp
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works