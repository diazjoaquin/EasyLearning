import React, { useState } from "react";
import Navbar from '../navbar/Navbar';
import style from "./Home.module.css"
import CourseCard from '../card/CourseCard.jsx';
import { Heading, Box, Text, Image, Center } from '@chakra-ui/react'
import mainpicture from "../../image/maintextimage.png"
import { Icon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import Footer2 from "../footer/Footer2";
import Speak from "../testimonials/Testimonials"
import BasicStatistics from "../statistic/Statistics"
import Categories from "../categories/Categories" //cambio de "categorys"
import { useEffect } from "react";
import { getAllCourses } from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import CreateReviewPage from "../createReviewPage/CreateReviewPage";
import Testimonials from '../testimonials/Testimonials.jsx';


export default function Home() {

  let courses = useSelector(state => state.courses);
  courses = courses?.sort((a, b) => b.rating - a.rating)?.slice(0, 15)

  const [coursesPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const last = currentPage * coursesPerPage;
  const first = last - coursesPerPage;
  const currentCourses = courses?.slice(first, last);
  const numOfPages = courses.length / coursesPerPage;

  const handleNext = (e) => {
    e.preventDefault();
    currentPage < numOfPages ? setCurrentPage(currentPage + 1) : setCurrentPage(1);
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch]);

  return (

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
                    {/* <SearchBar>
                    </SearchBar> */}
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
                                    key={course.id}
                                    name={course.name}
                                    teacherId={course.teacherId}
                                    teacherName={course.teacherName}
                                    id={course.id}
                                    // description={course.description}
                                    price={course.price}
                                    rating={course.rating}
                                    categories={course.categories}
                                    image={course.image}
                                />)
                        })
                    }
                    <Icon as={ArrowRightIcon} onClick={(e) => handleNext(e)}
                        className={style.icon} />
                </div>
            </div>
            <br />

            <div>
                <Categories />

            </div>

            <div>
                <BasicStatistics>
                </BasicStatistics>
            </div>
                    <br/>
            <div>
                {/* <Testimonials/> */}
                <Speak/>
            </div>
            
            <div>
                <Box>
                <Center>
                <CreateReviewPage/>
                </Center>
                </Box>
            </div>

            <div>
                <Footer2>
                </Footer2>
            </div>

        </div>
      );
}