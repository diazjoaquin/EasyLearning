import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoursesByTeacher } from "../../../../redux/actions";
import Navbar from "../../../navbar/Navbar"
import CourseCard from "../../../card/CourseCard";
import { Box, Heading } from "@chakra-ui/layout";
import Footer2 from '../../../footer/Footer2.jsx'
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";

const ShowMoreCourses = () => {
  window.scrollTo({ top: 0, left: 0 });
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false)
  const userDB = JSON.parse(localStorage.getItem("user"))
  let cursos = useSelector((state) => state.coursesCreateUser);
  useEffect(() => {
    dispatch(getAllCoursesByTeacher(userDB?.id));
  }, [dispatch, update]);

  return (
    <>
      <Navbar />
      <Box border='1px' borderColor='gray.400' borderRadius="10" display='flex' flexDirection='column' alignItems='center' >
        <Box display='flex' width='100%' m='4'>
          <Link to='/profile'>
            <Button rightIcon={<ArrowBackIcon />} fontSize='30' size='30' colorScheme='teal' variant='outline' />
          </Link>
        </Box>
        <Heading display='flex' >Courses created</Heading>
        <Box width='90%' display='flex' flexWrap='wrap' gap='5' justifyContent='center' alignItems='center' p='5' >

          {
            cursos?.map(e => {
              return (
                <CourseCard
                  key={e.id}
                  id={e.id}
                  teacherName={e.teacherName}
                  name={e.name}
                  description={e.description.slice(0, 50) + "..."}
                  rating={e.rating}
                  price={e.price}
                  image={e.image}
                  categories={e.categories}
                  archieved={e.archieved}
                  status={e.status}
                  videos={e.videos}
                  update={update}
                  setUpdate={setUpdate}
                  hidden={true}
                />

              )
            })
          }
        </Box>
      </Box>
      <Footer2 />
    </>
  );
};

export default ShowMoreCourses;
