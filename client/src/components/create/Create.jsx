import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCategories } from "../../redux/actions/index"
import Navbar from "../navbar/Navbar.jsx"
import Footer2 from "../footer/Footer2.jsx"
import {
  FormControl, FormLabel, Input, Box, Button, Text, Alert, AlertIcon, HStack, Tag, TagLabel, Tooltip, Select,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import axios from "axios"
import { validate, validateVideo } from "./validate";

const Create = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const userDB = JSON.parse(localStorage.getItem("user"))
  const categories = useSelector(s => s.categories)
  const [file, setFile] = useState(null)

  const [input, setInput] = useState({
    name: "",
    description: "",
    teacherId: userDB?.id,
    teacherName: userDB?.fullName,
    video: [],
    category: [],
    price: null,
  })

  const [errors, setErrors] = useState({})

  const handelChange = (e) => {
    if (e.target.name === "Thumbnail") {
      return setFile(e.target.files[0])
    }
    if (e.target.name === "category") {
      if (e.target.value === 'category') return
      if (!input.category.includes(e.target.value)) {
        setInput({
          ...input,
          [e.target.name]: [...input[e.target.name], e.target.value]
        })
      }
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    }
  }

  const handelSubmit = async () => {
    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("name", input.name);
    formdata.append("description", input.description);
    formdata.append("teacherId", input.teacherId);
    formdata.append("teacherName", input.teacherName);
    formdata.append("video", input.video);
    formdata.append("category", input.category);
    formdata.append("price", input.price);


    let response = await axios
      .post("http://localhost:3001/createCourse", formdata)
      .catch((err) => console.error(err));

    alert(response.data.msg)

    history.push(`/editcourse/${response.data.course.id}`)
  }

  const handelDelete = (e) => {
    const name = e.target.name
    const index = input.category.findIndex(e => e === name)
    let categories = input.category
    categories.splice(index, 1)
    setInput({
      ...input,
      category: categories
    })
  }

  useEffect(() => {
    if (!categories.length)
      dispatch(getCategories())
    setErrors(validate(input))
  }, [dispatch, input])



  return (
    <Box>
      <Navbar />
      <Box display='flex' width='100%' margin='0' justifyContent='center'>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent="center" w='90%'  >
          <Text fontSize='3xl'>Create Course</Text>
          <Box display='flex' flexDirection='column' justifyItems='center' w="100%" border="1px" borderRadius="20" p="10">
            <Link to='/profile'>
              <Button rightIcon={<ArrowBackIcon />} fontSize='30' size='30' colorScheme='teal' variant='outline' />
            </Link>
            <FormControl >
              <FormLabel>Name:</FormLabel>
              <Input name="name" onChange={handelChange} autoComplete='off' />
              {errors["name"] && <Alert justifyContent='center' status='error' bg='transparent' color='red'>
                <AlertIcon />
                {errors.name}
              </Alert>}
              <FormLabel>Thumbnail of course:</FormLabel>
              <Input type="file" id="Thumbnail" name="Thumbnail" onChange={handelChange} />
              <FormLabel>Description:</FormLabel>
              <Input name="description" onChange={handelChange} autoComplete='off' />
              {errors["description"] && <Alert justifyContent='center' mt='3' mb='6' status='error' bg='transparent' color='red'>
                <AlertIcon />
                {errors.description}
              </Alert>}
              <FormLabel>Category:</FormLabel>
              <Select name="category" onChange={handelChange}>
                <option value="category">Select categories</option>
                {categories.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </Select>
              {input.category?.length !== 0 &&
                <Box my='5' border='1px' borderRadius="20" p='5'>
                  <HStack spacing={4} display="flex" flexWrap="wrap" justifyContent="center" gap='2'>
                    {input.category?.map((e) => (
                      <Tag size={"md"} key={e} variant='subtle' colorScheme='cyan'>
                        <TagLabel>{e}</TagLabel>
                        <Tooltip hasArrow label="delete" placement="top">
                          <Button name={e} onClick={handelDelete} bg='transparent' color='black' _hover={{ background: "transparent" }}> X </Button>
                        </Tooltip>
                      </Tag>
                    ))}
                  </HStack>
                </Box>
              }
              {errors["category"] && <Alert justifyContent='center' status='error' bg='transparent' color='red'>
                <AlertIcon />
                {errors.category}
              </Alert>}
              <FormLabel>Price:</FormLabel>
              <Input type='number' name="price" onChange={handelChange} autoComplete='off' />
              {errors["price"] && <Alert w='80%' justifyContent='center' status='error' bg='transparent' color='red'>
                <AlertIcon />
                {errors.price}
              </Alert>}
              <Text textAlign="center">All these data can be modified after creating the course.</Text>
              <Button mt={4} colorScheme='teal' disabled={Object.keys(errors).length ? true : false} onClick={handelSubmit}>
                Create
              </Button>
            </FormControl>
          </Box>
        </Box >
      </Box >
      <Footer2 />
    </Box>
  )
}

export default Create;