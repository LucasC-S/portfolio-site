import { Container, Badge, Link, Divider, Heading } from '@chakra-ui/react'
import NextLink from 'next/link'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Post = () => {
    return (
        <Layout title="The Site Is Live!! (Kinda)">
            <Container>
                <Heading as="h3">
                    The Site Is Live!! (Kinda)
                    <Badge>2021-10-22</Badge>
                </Heading>
                <Divider />
                <P>
                    So! This site I&apos;ve been working on has
                    finally gone live (thanks to vercel). Well
                    it hasn&apos;t actually gone live as I&apos;m
                    writing this obviously, but it will be live
                    while you&apos;re reading it. As I&apos;m sure
                    you&apos;ve seen the site is quite barren at
                    the moment, rest assured I will fill our the
                    works and posts pages as I complete projects
                    and post about them. There isn&apos;t much
                    else to add here so I&apos;ll take a moment
                    to thank you! So yes, thank you for visiting
                    my page and I hope to see you again soon :)
                </P>
                <br />
                <P>
                    P.S If you have any suggestions for the site
                    feel free to message me on any of my socials
                    on the <NextLink href="/" legacyBehavior><Link>
                    Home Page </Link></NextLink>.
                </P>
            </Container>
        </Layout>
    );
}

export default Post