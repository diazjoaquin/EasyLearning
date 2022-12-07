import React from "react";
import Navbar from '../navbar/Navbar';
import style from "./Home.module.css"
import SearchBar from "../searchbar/SearchBar.jsx";
import CourseCard from '../card/CourseCard.jsx';
import { courses } from "../../mockup";
import Carousel from "../carousel/Carousel";
import { Heading, Box, Text, Image } from '@chakra-ui/react'
import mainpicture from "../../image/maintextimage.png"


export default function Home() {

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
                    <Heading mb={4}>Acceso To 5000+ Courses from
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
                    {
                        courses.map((course) => {
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
                </div>
            </div>
            <br />
        </div>



        //Texto pincipal 


    );

}