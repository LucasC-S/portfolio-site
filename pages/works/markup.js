import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="MarkUp">
            <Container>
                <Title>
                    MarkUp <Badge>2021</Badge>
                </Title>
                <P>
                    A minimalist markdown editor with preview and syntax highlighting.
                    Built in typescript react and deployed via electron and vite.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github Release</Meta>
                        <Link href='https://github.com/LucasC-S/markUp/releases'>
                            MarkUp/releases <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Mac, Windows, and Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Vite, Electron, CodeMirror, Remark, Rehype</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <NextLink href="/posts/post2" legacyBehavior><Link>Meet: Markup</Link></NextLink>
                    </ListItem>
                </List>

                <WorkImage src="/markUp.png" alt="MarkUp" />
                <WorkImage src="/markUpMath.png" alt="MarkUpMath" />
            </Container>
        </Layout>
    );
}

export default Work