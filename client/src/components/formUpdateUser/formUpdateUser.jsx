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
import Navbar from '../navbar/Navbar'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { useToast } from '@chakra-ui/react'

export default function FormUpdateUser() {
  const toast = useToast()
  const history = useHistory()
  const userDB = JSON.parse(localStorage.getItem("user"))
  !userDB && history.push("/")

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
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        let response = await axios.patch("/updateUser", user)
        localStorage.setItem("user", JSON.stringify(response.data))
        toast({
          title: 'Update acount.',
          description: "Successfullly updated",
          status: 'success',
          duration: 3500,
          isClosable: true,
        })
        history.push('/profile')
      }
    })
  }

  const handelDeletUser = () => {
    // await axios.delete("/userDelete", user)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }



  return (
    <>
      <Navbar />
      <Box display='flex' justifyContent='center'>
        <FormControl width='90%' border='1px' borderColor='gray.400' display="flex" flexDirection="column" alignItems="center" borderRadius="10">
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
          <Box my='4'>
            <Button mr='4' colorScheme='whatsapp' variant='solid' onClick={() => handleSubmit()}>Save changes</Button>
            <Button colorScheme='pink' variant='solid' onClick={handelDeletUser}>Delete Acount</Button>
          </Box>
        </FormControl>
      </Box>
    </>
  )
}