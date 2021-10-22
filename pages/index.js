import { Container, Box, Heading, Image, Link, useColorModeValue, Button } from "@chakra-ui/react"
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
    return  (
    <Layout>
    <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb ={6} align="center">
                    Hello, I&apos;m a based discord owner from Canda. I own World Roleplay and am hung like a horse.
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            The Oven
                        </Heading>
                        <p>Uber-Chad ( Swag / Genius / Handsome )</p>
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
                        src="/oven.jpg" 
                        alt="Profile Image" 
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>So yeah we do a lil trolling
                    on the web and yea we I run this shit 
                    yea yea yea. I also am a genius who codes
                    things like this website so yea you better
                    respect me or you will get trolled. Yea I 
                    am so mighty and yea I am a troller!!!
                    Join WRP right{' '}
                    <NextLink href="https://discord.com/invite/PrcAghzBXd"><Link>here</Link></NextLink>
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
                        <BioYear>1984</BioYear>
                        When COMMUNISM!!
                    </BioSection>
                    <BioSection>
                        <BioYear>2018?</BioYear>
                        WORL ROPELAY!! (I THINK)
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        This site launched!!!
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        My Interests
                    </Heading>
                    <Paragraph>
                        YOUR MOM!!!
                    </Paragraph>
                </Section>
            </Container>
            </Layout>
    )
}

export default Page 