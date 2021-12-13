import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="My Site">
            <Container>
                <Title>
                    My Portfolio Site <Badge>2021</Badge>
                </Title>
                <P>
                    A portfolio site I developed using NextJS, ChakraUI, 
                    Three, and Motion (P.S. You&apos;re on it right now!)
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://lucascs.vercel.app'>
                            lucascs.vercel.app <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Your favourite browser on any device</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NextJS, Chakra, Three, Motion</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <NextLink href="/posts/post1"><Link>The Site Is Live!! (Kinda)</Link></NextLink>
                    </ListItem>
                </List>

                <WorkImage src="/sitesplash.png" alt="MySite" />
            </Container>
        </Layout>
    )
}

export default Work