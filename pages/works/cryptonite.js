import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Cryptonite">
            <Container>
                <Title>
                    Cryptonite <Badge>2021</Badge>
                </Title>
                <P>
                    A crypto information site I developed using React, Redux, and Ant Design. - DEPRECATED
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='/'>
                            Unfortunately Cryptonite is no longer fully functional <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Your favourite browser on any device</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Redux, Ant Design</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <NextLink href="/posts/post3"><Link>Cryptonite and MarkUp Math</Link></NextLink>
                    </ListItem>
                </List>

                <WorkImage src="/cryptosplash.png" alt="MySite" />
            </Container>
        </Layout>
    )
}

export default Work