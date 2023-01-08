import {
  Box, Heading, Grid, GridItem,
  Button,
} from '@chakra-ui/react'
import Navbar from "../../navbar/Navbar"
import Footer2 from "../../footer/Footer2.jsx"
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCoursesByTeacher, getCoursesByStudent } from '../../../redux/actions'
import CourseCard from '../../card/CourseCard'
import FormUpdateUser from '../../formUpdateUser/formUpdateUser'

const Profile = () => {
  const userDB = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  let coursesCreateUser = useSelector(s => s.coursesCreateUser);
  let purchasedCourses = useSelector(s => s.purchasedCourses);

  !userDB && history.push("/")

  if (coursesCreateUser?.length > 3) {
    coursesCreateUser = coursesCreateUser?.slice(0, 3)
  }

  if (purchasedCourses?.length > 3) {
    purchasedCourses = purchasedCourses?.slice(0, 3)
  }

  useEffect(() => {
    dispatch(getAllCoursesByTeacher(userDB?.id))
    dispatch(getCoursesByStudent(userDB?.id))
  }, [update])

  return (
    <>
      <Navbar />
      <Box>
        <Grid
          h='800px'
          templateRows='repeat(2, 1fr)'
          templateColumns='15% 1fr'
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} >
            <Box>
              <Heading>Profile</Heading>
            </Box>
            <FormUpdateUser update={update} setUpdate={setUpdate} />
          </ GridItem>
          <Box w="auto" display="flex" flexDirection="column" border='1px' borderColor='gray.400' borderRadius="10" >
            <Heading display='flex' justifyContent='center' > Courses you created </Heading>
            <GridItem colSpan={2} display="flex" flexDirection="row" alignItems="center" mb='5'>
              <Link to="/formCourse">
                <Button
                  mx='10px'
                  _hover='none'
                  width='100px'
                  cursor='pointer'
                  height='100px'
                  borderRadius='100px'
                  border='none'
                  bgColor='#2B6CB0'
                  color='#e5e5e5'
                  fontSize='25px'
                > Create  </Button>
              </Link>
              <Box w="auto" mr='15px' p='10px' display="flex" justifyContent='center' width='100%' flexDirection="column" >
                <Box display='flex' justifyContent='center' gap='10px'>
                  {
                    coursesCreateUser.length ? coursesCreateUser?.map(e => (
                      <CourseCard key={e.id} id={e.id} teacherName={e.teacherName} name={e.name} description={e.description} rating={e.rating} price={e.price} image={e.image} categories={e.categories} archieved={e.archieved} status={e.status} videos={e.videos} update={update} setUpdate={setUpdate} />
                    ))
                      : undefined
                  }
                </Box>
              </Box>
            </ GridItem>
            <Box display="flex" flexDirection='row-reverse' >
              <Link to="/cursosCreados">
                <Button mb='2' mr='15px' colorScheme='blackAlpha' pos='relative' bottom='0'>Show more</Button>
              </Link>
            </Box>
          </Box>
          <GridItem colSpan={4} bg='tomato'>
            <Box w="auto" display="flex" flexDirection="column" mt="10" border='1px' borderColor='gray.400' borderRadius="10">
              <GridItem gap='20' colSpan={2} display="flex" flexDirection="row" alignItems="center" justifyContent='center' mt="5" mb='5'>
                {
                  purchasedCourses.length ? purchasedCourses?.map(e => (
                    <CourseCard key={e.id} id={e.id} teacherName={e.teacherName} name={e.name} description={e.description} rating={e.rating} price={e.price} image={e.image} categories={e.categories} />
                  ))
                    : undefined
                }
              </ GridItem>
              <Box display="flex" flexDirection='row-reverse' >
                <Link to="/cursosComprados">
                  <Button mb='2' mr='2' colorScheme='blackAlpha'>Show more</Button>
                </Link>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box >
      <Footer2 />
    </>
  )
}

export default Profile;

