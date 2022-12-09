import React, { useState } from "react";
import Navbar from '../navbar/Navbar';
import style from "./Home.module.css"
import SearchBar from "../searchbar/SearchBar.jsx";
import CourseCard from '../card/CourseCard.jsx';
import { courses } from "../../mockup";
import { Heading, Box, Text, Image } from '@chakra-ui/react'
import mainpicture from "../../image/maintextimage.png"
import { Icon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import {

    Container,
    Link,
    SimpleGrid,
    Stack,
    Flex,
    Tag,
    useColorModeValue,
    
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Footer from "../footer/Footer";
import Footer2 from "../footer/Footer2";

// import { useSelector } from "react-redux";


export default function Home() {

    // carrousel: 
    // const courses = useSelector(state => state.courses);
    const [coursesPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const last = currentPage * coursesPerPage;
    const first = last - coursesPerPage;
    const currentCourses = courses.slice(first, last);
    const numOfPages = courses.length / coursesPerPage;

    const handleNext = (e) => {
        e.preventDefault();
        currentPage < numOfPages ? setCurrentPage(currentPage + 1) : setCurrentPage(1);
    }

    const handlePrevious = (e) => {
        e.preventDefault();
        currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(numOfPages);
    }

    const ListHeader = ({ children }) => {
        return (
          <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
          </Text>
        );
      };

    return (
        //navbar
        <div>
            <div className={style.bg}>
                <Navbar>
                </Navbar>
            </div>
            <div className={style.maintext}>
                <Box maxW='32rem'>
                    <Text fontSize='xl'>
                        START TO SUCCESS
                    </Text>
                    <Heading mb={4}>Acces To 5000+ Courses from
                        300 Instructor & Institutions</Heading>
                    <Text fontSize='xl'> Varius version have envolved over the years, sometimes by accident,
                    </Text>
                    <SearchBar>
                    </SearchBar>
                </Box>

                <div>
                    <Box boxSize='m'>
                        <Image src={mainpicture} alt='image' />
                    </Box>

                </div>
            </div>

            <br>
            </br>

            <div title="carousel">
                {/* <Carousel>

                </Carousel> */}
                <div className={style.coursecont}>
                    <Icon as={ArrowLeftIcon} onClick={(e) => handlePrevious(e)}
                        className={style.icon} />
                    {
                        currentCourses.map((course) => {
                            return (
                                <CourseCard
                                    key={course.idCourse}
                                    idCourse={course.idCourse}
                                    Description={course.Description}
                                    Video={course.Video[0]}
                                    Rating={course.Rating}
                                />)
                        })
                    }
                    <Icon as={ArrowRightIcon} onClick={(e) => handleNext(e)}
                        className={style.icon} />
                </div>
            </div>
            <br />
            {/* <div>
                <Box
                    bg={useColorModeValue('gray.50', 'gray.900')}
                    color={useColorModeValue('gray.700', 'gray.200')}>
                    <Container as={Stack} maxW={'6xl'} py={10}>
                        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                            <Stack align={'flex-start'}>
                                <ListHeader>Product</ListHeader>
                                <Link href={'#'}>Home</Link>
                                <Stack direction={'row'} align={'center'} spacing={2}>
                                    <Link href={'#'}>Features</Link>
                                    <Tag
                                        size={'sm'}
                                        bg={useColorModeValue('green.300', 'green.800')}
                                        ml={2}
                                        color={'white'}>
                                        New
                                    </Tag>
                                </Stack>
                                <Link href={'#'}>Course</Link>
                                <Link href={'#'}>Blog</Link>
                                <Link href={'#'}>Releases</Link>
                            </Stack>
                            <Stack align={'flex-start'}>
                                <ListHeader>Company</ListHeader>
                                <Link href={'#'}>About Us</Link>
                                <Link href={'#'}>Press</Link>
                                <Link href={'#'}>Careers</Link>
                                <Link href={'#'}>Contact Us</Link>
                                <Link href={'#'}>Partners</Link>
                            </Stack>
                            <Stack align={'flex-start'}>
                                <ListHeader>Legal</ListHeader>
                                <Link href={'#'}>Cookies Policy</Link>
                                <Link href={'#'}>Privacy Policy</Link>
                                <Link href={'#'}>Terms of Service</Link>
                                <Link href={'#'}>Law Enforcement</Link>
                                <Link href={'#'}>Status</Link>
                            </Stack>
                            <Stack align={'flex-start'}>
                                <ListHeader>Follow Us</ListHeader>
                                <Link href={'#'}>Facebook</Link>
                                <Link href={'#'}>Twitter</Link>
                                <Link href={'#'}>Dribbble</Link>
                                <Link href={'#'}>Instagram</Link>
                                <Link href={'#'}>LinkedIn</Link>
                            </Stack>
                        </SimpleGrid>
                    </Container>
                    <Box py={10}>
                        <Flex
                            align={'center'}
                            _before={{
                                content: '""',
                                borderBottom: '1px solid',
                                borderColor: useColorModeValue('gray.200', 'gray.700'),
                                flexGrow: 1,
                                mr: 8,
                            }}
                            _after={{
                                content: '""',
                                borderBottom: '1px solid',
                                borderColor: useColorModeValue('gray.200', 'gray.700'),
                                flexGrow: 1,
                                ml: 8,
                            }}>
                            
                        </Flex>
                        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                            © 2022 easyLeraning. All rights reserved
                        </Text>
                    </Box>
                </Box>

            </div> */}

            <div>
                <Footer2>

                </Footer2>
            </div>


        </div>
        //Texto pincipal 
    );
}