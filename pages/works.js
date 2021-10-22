import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem, GridItem } from '../components/grid-item'
import thumbWRP from '../public/wrp.png'

const Works  = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="wrp" title="World Roleplay" thumbnail={thumbWRP}>
                        The most basedest discord server
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
    )
}

export default Works