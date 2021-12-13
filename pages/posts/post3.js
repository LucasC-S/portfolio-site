import { Container, Badge, Divider, Heading, Link } from '@chakra-ui/react'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Post = () => {
    return (
        <Layout title="Cryptonite and MarkUp Math">
            <Container>
                <Heading as="h3">
                Cryptonite and MarkUp Math 
                    <br/>
                    <Badge>2021-12-13</Badge>
                </Heading>
                <Divider />
                <P>
                    I&apos;m back after just a few days! I&apos;ve built up a
                    crypto information hub at <Link href="https://crypto-nite.vercel.app">
                    https://crypto-nite.vercel.app</Link> to 
                    get some practice with React Redux and I&apos;ve upgraded
                    MarkUp to support Tex syntax for math equations. I mainly 
                    planned on using MarkUp as a note taking app for school so 
                    this functionality was necessary. I probably won&apos;t be
                    posting again so soon as I don&apos;t have any projects
                    to work on unitl January.
                    <br />
                    See you all then,
                    <br />
                    Lucas
                </P>
            </Container>
        </Layout>
    )
}

export default Post