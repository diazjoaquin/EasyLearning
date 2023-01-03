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
      <div>
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
          <Box w="auto" display="flex" flexDirection="column" mt="10" border='1px' borderColor='gray.400' borderRadius="10">
            <Link to="/formCourse">
              <Button ml='2' mt='2' display="flex" justifySelf='flex-start' colorScheme='blackAlpha'>Create new course</Button>
            </Link>
            <GridItem gap='20' colSpan={2} display="flex" flexDirection="row" alignItems="center" justifyContent='center' mt="5" mb='5'>
              {
                coursesCreateUser.length ? coursesCreateUser?.map(e => (
                  <CourseCard key={e.id} id={e.id} teacherName={e.teacherName} name={e.name} description={e.description} rating={e.rating} price={e.price} image={e.image} categories={e.categories} />
                ))
                  : undefined
              }
            </ GridItem>
            <Box display="flex" flexDirection='row-reverse' >
              <Link to="/cursosCreados">
                <Button mb='2' mr='2' colorScheme='blackAlpha'>Show more</Button>
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
      </div>
      <Footer2 />
    </>
  )
}

export default Profile;

