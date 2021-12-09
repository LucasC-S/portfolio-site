import { Container, Badge, Divider, Heading } from '@chakra-ui/react'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Post = () => {
    return (
        <Layout title="Meet: MarkUp">
            <Container>
                <Heading as="h3">
                    Meet: MarkUp 
                    <br/>
                    <Badge>2021-12-08</Badge>
                </Heading>
                <Divider />
                <P>
                    So, it&apos;s been a while since my last post. 
                    Fear not, I have not forgotten about this, just 
                    been busy with my classes. Now that they&apos;re
                    over I&apos;ll be much more busy developing my own
                    projects and posting about them here. Infact, over
                    the past two days I&apos;ve build my newest app: 
                    MarkUp. This is a simple markdown editor with a clean
                    dark theme and support for all the traditional markdown
                    features. The release is likely final, unless I decide
                    to add a dark/light mode switch to it. <br />
                    Thanks for checking in, <br />
                    Lucas
                </P>
            </Container>
        </Layout>
    )
}

export default Post