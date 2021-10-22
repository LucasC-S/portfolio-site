import { Container, Box, Heading, Image, Link, useColorModeValue, Button, List, ListItem, Icon } from "@chakra-ui/react"
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'
import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
    return  (
    <Layout>
    <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb ={6} align="center">
                    Hello, I&apos;m a novice developer based in Canda :)
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Lucas Crawhall-Stein
                        </Heading>
                        <p>Student / Creator</p>
                    </Box>
                    <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 0}} 
                    ml={{md: 6}} align="center"
                    >
                        <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/me.jpg" 
                        alt="Profile Image" 
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Hi! I am Lucas, an undergraduate computer
                    science student at Ontario Tech U. I started this 
                    site as a blog/portfolio for myself. I&apos;ve many projects
                    on at the moment so check back in to see the posts 
                    and works pages fill up. Also feel free to check out
                    my spotify playlists right {' '}
                    <NextLink href="https://open.spotify.com/user/beanie1357"><Link>here</Link></NextLink>
                    .</Paragraph>
                    <Box align = "center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme = "facebook">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title" >
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2003</BioYear>
                        I was born!
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        I started highschool as Ursula Franklin Academy
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        I graduate highschool and begin my freshman year at Ontario Tech
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        My Interests
                    </Heading>
                    <Paragraph>
                    Coding | Design | Philosphy | Tabletop Gaming | Writing | Film & TV
                    </Paragraph>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Find me at
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/LucasC-S" target="_blank">
                                <Button variant="ghost" colorScheme="facebook" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @LucasC-S 
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/joos.stein/" target="_blank">
                                <Button variant="ghost" colorScheme="facebook" leftIcon={<Icon as={IoLogoInstagram} />}>
                                    @joos.stein
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Button variant="ghost" colorScheme="facebook" leftIcon={<Icon as={IoLogoDiscord} />}>
                                @TheOven#8994
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/joos.stein/" target="_blank">
                                <Button variant="ghost" colorScheme="facebook" leftIcon={<Icon as={IoLogoInstagram} />}>
                                    @joos.stein
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
            </Layout>
    )
}

export default Page 