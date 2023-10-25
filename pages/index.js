import { Container, Box, Heading, Image, Link, useColorModeValue, Button, List, ListItem, Icon } from "@chakra-ui/react"
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
    IoLogoGithub,
    IoLogoLinkedin
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
                    Hello, I&apos;m a developer based in Canada :)
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Lucas Crawhall-Stein
                        </Heading>
                        <p>Full Stack Developer / Data Analyst</p>
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
                    <Paragraph>Hi! I am Lucas, an data quality specialist and full stack developer. I started this 
                    site as a blog/portfolio for myself. I&apos;m always trying to expand my portfolio
                    so check back in to see the posts 
                    and works pages fill up. 
                    </Paragraph>
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
                        <BioYear>2017</BioYear>
                        I started highschool and taught myself to create websites in HTML and CSS.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        I graduated highschool and began my freshman year at Ontario Tech.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        I took a job at Co:Here as a Data Quality Specialist.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        My Interests
                    </Heading>
                    <Paragraph>
                    Web Development | Artificial Intelligence | Writing | Film & TV
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
                        {/*<ListItem>
                            <Link href="https://www.instagram.com/joos.stein/" target="_blank">
                                <Button variant="ghost" colorScheme="facebook" leftIcon={<Icon as={IoLogoInstagram} />}>
                                    @joos.stein
                                </Button>
                            </Link>
                        </ListItem>*/}
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/lucas-crawhall-stein-182a4b294" target="_blank">
                                <Button variant="ghost" colorScheme="facebook" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    Lucas Crawhall-Stein
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
