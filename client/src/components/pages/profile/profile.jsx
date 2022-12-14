import {
  Box, Heading, Grid, GridItem, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import Navbar from "../../navbar/Navbar"
import Footer2 from "../../footer/Footer2.jsx"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getAllCoursesByTeacher } from '../../../redux/actions'
import CourseCard from '../../card/CourseCard'



const Profile = () => {

  const dispatch = useDispatch()
  const [user, setUser] = useState({
    fullName: "",
    password: "",
    phoneNumber: "",
    emailAddress: "",
    avatar: ""
  })
  let coursesCreateUser = useSelector(s => s.coursesCreateUser)
  if (coursesCreateUser.length > 3) {
    coursesCreateUser = coursesCreateUser.slice(0, 3)
  }
  useEffect(() => {
    //Previamente, obtener el id del usuario logeado. Por el momento es hardcode
    dispatch(getAllCoursesByTeacher(1))
  }, [])

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    // await axios.patch("/userUpdate", user)
  }

  const handelDeletUser = () => {
    // await axios.delete("/userDelete", user)
  }

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
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      Configure User
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <FormControl border='1px' borderColor='gray.400' display="flex" flexDirection="column" alignItems="center" borderRadius="10">
                    <FormLabel>FullName:</FormLabel>
                    <Input name="fullName" defaultValue={"Pepito Gomez"} onChange={handleChange} textAlign="center" w="90%" />
                    <FormLabel>Password:</FormLabel>
                    <Input name="password" defaultValue={"12345"} onChange={handleChange} textAlign="center" w="90%" />
                    <FormLabel>PhoneNumber:</FormLabel>
                    <Input name="phoneNumber" defaultValue={"123400123"} onChange={handleChange} textAlign="center" w="90%" />
                    <FormLabel>EmailAddress:</FormLabel>
                    <Input name="emailAddress" defaultValue={"pepitog@gmail.com"} onChange={handleChange} textAlign="center" w="90%" />
                    <FormLabel>Avatar:</FormLabel>
                    <Input name="avatar" defaultValue={"urlAvatar"} onChange={handleChange} textAlign="center" w="90%" />
                    <Button colorScheme='pink' variant='solid' mt="5" onClick={handelDeletUser}>Delete Acount</Button>
                    <br />
                    <Button colorScheme='whatsapp' variant='solid' mb="5" onClick={handleSubmit}>Save changes</Button>
                  </FormControl>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ GridItem>


          {/* Si, userCoruseCreated es <= 3, renderizar 3 tarjetas de los cursos */}
          <Box w="auto" display="flex" flexDirection="column" alignItems="center" mt="10" border='1px' borderColor='gray.400' borderRadius="10">
            <Link to="/cursosCreados">
              <Button mt='5' colorScheme='blackAlpha'>Courses Created</Button>
            </Link>
            <GridItem gap='20' colSpan={2} display="flex" flexDirection="row" alignItems="center" mt="5" mb='5'>
              {coursesCreateUser.map(e => (
                <CourseCard key={e.id} id={e.id} teacher={e.teacher} name={e.name} description={e.description} rating={e.rating} price={e.price} image={e.image} categories={e.categories} />
              ))}
              <Box display="flex" flexDirection="column">
                <Link to="/cursosCreados">
                  <Button mt='5' colorScheme='blackAlpha'>Show more</Button>
                </Link>
                <Link to="/formCourse">
                  <Button mt='5' colorScheme='blackAlpha'>Create new course</Button>
                </Link>
              </Box>
            </ GridItem>
          </Box>
          <GridItem colSpan={4} bg='tomato' />
        </Grid>
      </div>
      <Footer2 />
    </>
  )
}

export default Profile;