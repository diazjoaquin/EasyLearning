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
import { useState } from 'react'
import Carousel from '../../carousel/carousel'
import { Link } from 'react-router-dom'
// import axios from "axios"



const Profile = () => {

  const [user, setUser] = useState({
    fullName: "",
    password: "",
    phoneNumber: "",
    emailAddress: "",
    avatar: ""
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log("se submitea");
    // await axios.patch("/userUpdate", user)
  }

  const handelDeletUser = () => {
    console.log("delet user");
    // await axios.delete("/userDelete", user)
  }

  return (
    <>
      <Navbar />
      <div>
        <Grid
          h='1100px'
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
                  <FormControl border='1px' borderColor='gray.400' display="flex" flexDir="column" alignItems="center" borderRadius="10">
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

          <GridItem colSpan={2} display="flex" flexDir="column" alignItems="center">
            <Link to="/cursosComprados">
              <Button colorScheme='blackAlpha'>Cursos Comprados</Button>
            </Link>
            <Carousel />
          </ GridItem>

          <GridItem colSpan={2} display="flex" flexDir="column" alignItems="center">
            <Link to="/cursosCreados">
              <Button colorScheme='blackAlpha'>Cursos Creados</Button>
            </Link>
            <Carousel />
          </ GridItem>
          <GridItem colSpan={4} bg='tomato' />
        </Grid>
      </div>
      <Footer2 />
    </>
  )
}

export default Profile;