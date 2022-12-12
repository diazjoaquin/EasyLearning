import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,

} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
// import Logo from "../../image/easylearning.png"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"
import Logo from "../footer/easylearning.png"



const SocialButton = ({
    children,
    label,
    href,
}
) => {

    <chakra.button

        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
            bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
    </chakra.button>

};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer2() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <img src="Logo" alt="logo" />
                        </Box>
                        <Text fontSize={'sm'}>
                            © 2022 easyLearning. All rights reserved
                            <br>
                            </br>
                            Contact us:
                            <br>
                            </br>
                            Call : +123 400 123
                            <br>
                            </br>
                            Praesent nulla massa, hendrerit
                            <br>
                            </br>
                            Email: easy@learning.com

                        </Text>
                        <Stack direction={'row'} spacing={6}>

                            <Button colorScheme='facebook' leftIcon={<FaFacebook />}> <a href="https://es-la.facebook.com/" target="_blank">Facebook</a></Button>
                            <Button colorScheme="linkedin" leftIcon={<FaLinkedin />} > <a href="https://www.linkedin.com/feed/" target="_blank">Linkedin</a></Button>
                            <Button colorScheme="instagram" leftIcon={<FaInstagram />}> <a href="https://www.instagram.com/" target="_blank">Instagram</a></Button>



                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'#'}>About us</Link>
                        <Link href={'#'}>Blog</Link>
                        <Link href={'#'}>Contact us</Link>
                        <Link href={'#'}>Pricing</Link>
                        <Link href={'#'}>Testimonials</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link href={'#'}>Help Center</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Legal</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Satus</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue('green.400', 'green.800')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'green.600',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box >
    );
}