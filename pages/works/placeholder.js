import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="PlaceHolder">
            <Container>
                <Title>
                    PlaceHolder <Badge>2021</Badge>
                </Title>
                <P>
                    PlaceHolder PlaceHolder PlaceHolder
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='/'>
                            PlaceHolder <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>PlaceHolder</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NextJS, Chakra, Three, Motion</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href="/posts">PlaceHolder</Link>
                    </ListItem>
                </List>

                <WorkImage src="/placeholder.png" alt="PlaceHolder" />
            </Container>
        </Layout>
    )
}

export default Work