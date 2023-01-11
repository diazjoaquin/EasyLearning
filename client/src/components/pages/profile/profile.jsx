import { Box, Heading, Grid, GridItem, Button, } from '@chakra-ui/react'
import Navbar from "../../navbar/Navbar"
import Footer2 from "../../footer/Footer2.jsx"
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCoursesByTeacher, getCoursesByStudent, getOrders } from '../../../redux/actions'
import CourseCard from '../../card/CourseCard'
import { SettingsIcon } from '@chakra-ui/icons'
import CourseCard2 from '../../card/CourseCard2'

const Profile = () => {
  window.scrollTo({ top: 0, left: 0 });
  const userDB = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  let coursesCreateUser = useSelector(s => s.coursesCreateUser);
  //let purchasedCourses = useSelector(s => s.purchasedCourses);
  
  let orders = useSelector((state) => state.allOrders);


  !userDB && history.push("/")

  if (coursesCreateUser?.length > 3) {
    coursesCreateUser = coursesCreateUser?.slice(0, 3)
  }

  // if (purchasedCourses?.length > 3) {
  //   purchasedCourses = purchasedCourses?.slice(0, 3)
  // }

  if(orders.orderrs?.length > 3) {
    orders.orderrs = orders.orderrs?.slice(0,3)
  }

  useEffect(() => {
    dispatch(getAllCoursesByTeacher(userDB?.id))
    //dispatch(getCoursesByStudent(userDB?.id))
    dispatch(getOrders(userDB.id))
  }, [update])

  return (
    <>
      <Navbar />
      <Box>
        <Grid
          templateRows='repeat(2, 1fr)'
          templateColumns='15% 1fr'
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} >
            <Box height='780px' ml='4' mb='4'>
              <Box pl='4' justifyItems='center' bgColor='#20B486' borderRadius="10" height='100%'>
                <Heading>Profile</Heading>
                <h1>
                  {userDB?.fullName}
                </h1>
                <h1>
                  {userDB?.emailAddress}
                </h1>
                <Link to='settings'>
                  <Button rightIcon={<SettingsIcon />} display='flex' justifySelf='center' mb='2' mr='15px' colorScheme='blackAlpha' pos='relative' bottom='0'>Settings</Button>
                </Link>
              </Box>
            </Box>
          </ GridItem>
          <Box w="auto" display="flex" flexDirection="column" border='1px' borderColor='gray.400' borderRadius="10" mr='4' >
            <Heading display='flex' justifyContent='center' > Your created courses </Heading>
            <GridItem height='100%' colSpan={2} display="flex" flexDirection="row" alignItems="center">
              <Link to="/formCourse">
                <Button
                  mx='10px'
                  _hover=''
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
                      <CourseCard key={e.id} id={e.id} /* teacherName={e.teacherName} */ name={e.name} description={e.description} rating={e.rating} price={e.price} image={e.image} /* categories={e.categories} */ archieved={e.archieved} status={e.status} videos={e.videos} update={update} setUpdate={setUpdate} />
                    ))
                      : <h1>There´s not created courses </h1>
                  }
                </Box>
              </Box>
              <Link to="/cursosCreados">
                <Button disabled={coursesCreateUser.length ? false : true} mb='2' mr='15px' colorScheme='blackAlpha' pos='relative' bottom='0'>Show more</Button>
              </Link>
            </ GridItem>
          </Box>
          <Box w="auto" display="flex" flexDirection="column" border='1px' borderColor='gray.400' borderRadius="10" mr='4' mb='4'>
            <Heading display='flex' justifyContent='center' > Your purchased courses </Heading>
            <GridItem height='100%' colSpan={2} display="flex" flexDirection="row" alignItems="center" mb='5'>
              <Link to="/course">
                <Button
                  mx='10px'
                  _hover=''
                  width='100px'
                  cursor='pointer'
                  height='100px'
                  borderRadius='100px'
                  border='none'
                  bgColor='#2B6CB0'
                  color='#e5e5e5'
                  fontSize='25px'
                > Buy  </Button>
              </Link>
              <Box mr='15px' p='10px' display="flex" justifyContent='center' width='100%' flexDirection="column" >
                <Box display='flex' justifyContent='center' gap='10px'>
                  {
                     orders.orderrs?.length ? orders.orderrs?.map(e => (
                      <CourseCard2 key={e.id} id={e.id}  name={e.name} price={e.price} /* teacherName={e.teacherName} *//* image={e.image} */ /* categories={e.categories} */ />
                    ))
                      : <h1>There´s no purchased courses</h1>
                  }
                </Box>
              </Box>
              <Link to="/cursosComprados">
                <Button  mb='2' mr='2' colorScheme='blackAlpha'>Show more</Button>
              </Link>
            </ GridItem>
          </Box>
        </Grid>
      </Box >
      <Footer2 />
    </>
  )
}

export default Profile;

