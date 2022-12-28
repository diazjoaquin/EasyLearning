import {
  Box, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import axios from "axios"

export default function FormUpdateUser({ update, setUpdate }) {
  const userDB = JSON.parse(localStorage.getItem("user"))
  const [user, setUser] = useState({
    id: userDB?.id,
    fullName: null,
    password: null,
    phoneNumber: null,
    emailAddress: null,
    avatar: null
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    console.log(user);
    let response = await axios.patch("http://localhost:3001/updateUser", user)
    localStorage.setItem("user", JSON.stringify(response.data))
    setUpdate(!update)
  }

  const handelDeletUser = () => {
    // await axios.delete("/userDelete", user)
  }

  return (
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
            <Input name="fullName" defaultValue={userDB?.fullName} onChange={handleChange} textAlign="center" w="90%" />
            <FormLabel>Password:</FormLabel>
            <Input name="password" defaultValue={userDB?.password} onChange={handleChange} textAlign="center" w="90%" />
            <FormLabel>PhoneNumber:</FormLabel>
            <Input name="phoneNumber" defaultValue={userDB?.phoneNumber} onChange={handleChange} textAlign="center" w="90%" />
            <FormLabel>EmailAddress:</FormLabel>
            <Input name="emailAddress" defaultValue={userDB?.emailAddress} onChange={handleChange} textAlign="center" w="90%" />
            <FormLabel>Avatar:</FormLabel>
            <Input name="avatar" defaultValue={userDB?.avatar} onChange={handleChange} textAlign="center" w="90%" />
            <Button colorScheme='pink' variant='solid' mt="5" onClick={handelDeletUser}>Delete Acount</Button>
            <br />
            <Button colorScheme='whatsapp' variant='solid' mb="5" onClick={() => handleSubmit()}>Save changes</Button>
          </FormControl>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}