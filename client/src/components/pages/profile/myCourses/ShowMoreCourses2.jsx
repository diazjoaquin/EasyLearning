import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByStudent, getOrders } from "../../../../redux/actions";
import Navbar from "../../../navbar/Navbar"
import CourseCard2 from "../../../card/CourseCard2";
import { Box, Button, Card, Heading } from "@chakra-ui/react";
import CourseCard from "../../../card/CourseCard";
import Footer2 from "../../../footer/Footer2";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";



const ShowMoreCourses2 = () => {
  window.scrollTo({ top: 0, left: 0 });
  const dispatch = useDispatch();

  // const { user } = useAuth();
  const userDB = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    dispatch(getCoursesByStudent(userDB?.id));
    // dispatch(getOrders(userDB?.id))
  }, [dispatch]);
  let cursos = useSelector((state) => state.purchasedCourses);

  // let orders = useSelector((state) => state.allOrders);

  // console.log("ORDERS", orders)

  return (
    <>
      <Navbar />
      <Box border='1px' borderColor='gray.400' borderRadius="10" display='flex' flexDirection='column' alignItems='center' >
        <Box display='flex' width='100%' m='4'>
          <Link to='/profile'>
            <Button rightIcon={<ArrowBackIcon />} fontSize='30' size='30' colorScheme='teal' variant='outline' />
          </Link>
        </Box>
        <Heading display='flex' >Courses purchased</Heading>
        <Box width='90%' display='flex' flexWrap='wrap' gap='10' justifyContent='center' alignItems='center' p='5' >

          <Box display='flex' flexWrap='wrap' gap='5' justifyContent='center' alignItems='center' p='5'>
            {
              cursos?.map(e => {
                return (
                  // <CourseCard2
                  //   key={e.id}
                  //   name={e.name}
                  //   id={e.id}
                  //   price={e.price}
                  // />
                  <CourseCard
                    key={e.id}
                    name={e.name}
                    teacherName={e.teacherName}
                    id={e.id}
                    description={e.description.slice(0, 50) + "..."}
                    price={e.price}
                    rating={e.rating}
                    categories={e.categories.map(e => e.name)}
                    image={e.image}
                    students={e.students}
                    hidden={true}
                  />
                )
              })
            }
          </Box>
        </Box>
      </Box>
      <Footer2 />
    </>
  );
};

export default ShowMoreCourses2;
