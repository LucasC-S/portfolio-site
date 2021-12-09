import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbSite from '../public/sitesplash.png'
import thumbMarkUp from '../public/markUp.png'

const Posts = () => (
    <Layout title ="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Recent Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,1]} gap={6}>
                    <PostGridItem
                    id="post2"
                    title="Meet: MarkUp"
                    thumbnail={thumbMarkUp}
                    />
                    <PostGridItem 
                    id="post1" 
                    title="The Site Is Live!! (Kinda)" 
                    thumbnail={thumbSite} 
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts