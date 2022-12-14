import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCategories } from "../../redux/actions/index"
import Navbar from "../navbar/Navbar.jsx"
import Footer2 from "../footer/Footer2.jsx"
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Text,
  Alert,
  AlertIcon,
  Stack,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
  TagRightIcon,
  Tooltip,
  background
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, CloseIcon } from '@chakra-ui/icons'
import axios from "axios"
import validate from "./validate";

const Create = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const categories = useSelector(s => s.categories)


  const [input, setInput] = useState({
    name: "",
    description: "",
    teacher: "Fermin", //De momento es hardcode, hasta que tengamos el login y sepamos cual es el user que esta creando el curso.
    // video: [],
    category: [],
    price: null
  })

  const [inputVideo, setInputVideo] = useState({
    urlVideo: "",
    description: "",
    courseId: ""
  })

  const [errors, setErrors] = useState({})

  const handelChange = (e) => {
    if (e.target.value === "Select Category") return
    if (e.target.name === "category") {
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

  const handelChangeVideo = (e) => {
    setInputVideo({
      ...inputVideo,
      [e.target.name]: e.target.value
    })
  }

  const handelSubmit = async () => {
    await axios.post("http://localhost:3001/createCourse", input)
    history.push("/profile")
  }

  const handelSubmitVideo = () => {
    console.log(inputVideo);
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
    <div>
      <Stack spacing={3}>
      </Stack>
      <Navbar />
      <Box display='flex' justifyContent="center" my="20" >
        <Box w="50%" border="1px" borderRadius="20" p="10">
          <h1>Falta hardcodear el teacher</h1>
          <FormControl display='flex' flexDirection="column" alignItems="center" >
            <FormLabel>Name:</FormLabel>
            <Input name="name" onChange={handelChange} />
            {errors["name"] && <Alert justifyContent='center' status='error'>
              <AlertIcon />
              {errors.name}
            </Alert>}
            <FormLabel>Description:</FormLabel>
            <Input name="description" onChange={handelChange} />
            {errors["description"] && <Alert justifyContent='center' mt='3' mb='6' status='error'>
              <AlertIcon />
              {errors.description}
            </Alert>}
            <FormLabel>Category:</FormLabel>
            <select name="category" onChange={handelChange}>
              <option>Select Category</option>
              {categories.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </select>
            {input.category.length !== 0 &&
              <Box my='5' border='1px' borderRadius="20" p='5'>
                <HStack spacing={4} display="flex" flexWrap="wrap" justifyContent="center" gap='2'>
                  {input.category?.map((e) => (
                    <Tag size={"md"} key={e} variant='subtle' colorScheme='cyan'>
                      <TagLabel>{e}</TagLabel>
                      <Tooltip hasArrow label="deleted" placement="top">
                        <Button name={e} onClick={handelDelete} bg='transparent' _hover={{ background: "transparent" }}> X </Button>
                      </Tooltip>
                    </Tag>
                  ))}
                </HStack>
              </Box>
            }
            {errors["category"] && <Alert justifyContent='center' status='error'>
              <AlertIcon />
              {errors.category}
            </Alert>}
            <FormLabel>Price:</FormLabel>
            <Input name="price" onChange={handelChange} />
            {errors["price"] && <Alert w='80%' justifyContent='center' status='error'>
              <AlertIcon />
              {errors.price}
            </Alert>}
            <Box w="100%" border="1px" borderRadius="20" p="10" my="10">
              <FormLabel display="flex" justifyContent="center">Video:</FormLabel>
              <FormLabel>Name:</FormLabel>
              <Input name="name" onChange={handelChangeVideo} />
              <FormLabel>urlVideo:</FormLabel>
              <Input name="urlVideo" onChange={handelChangeVideo} />
              <FormLabel>courseId:</FormLabel>
              <Text>(hardCode por el momento, tendria que tener una logica de obtener el id que se le genere al curso que se esta creando, para poder relacionarle los videos)</Text>
              <Input name="courseId" onChange={handelChangeVideo} />
              <Box display="flex" flexDirection="row-reverse">
                <Button mt={4} colorScheme='teal' onClick={handelSubmitVideo} >
                  Add Video
                </Button>
              </Box>
            </Box>
            <Text textAlign="center">(Todos estos datos se podran modificar luego de crear el curso.)</Text>
            <Button mt={4} colorScheme='teal' onClick={handelSubmit} disabled={Object.keys(errors).length ? true : false}>
              Submit
            </Button>
          </FormControl>
        </Box>
      </Box >
      <Footer2 />
    </div >
  )
}

export default Create;