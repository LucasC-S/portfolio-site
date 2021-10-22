import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import thumbWRP from '../public/placeholder.png'

const Works  = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="plchdlr" title="PlaceHolder" thumbnail={thumbWRP}>
                        placeholder
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="plchldr" title="PlaceHolder" thumbnail={thumbWRP}>
                        placeholder
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="plchldr" title="PlaceHolder" thumbnail={thumbWRP}>
                        placeholder
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works