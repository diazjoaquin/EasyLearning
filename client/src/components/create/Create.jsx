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
  HStack,
  Tag,
  TagLabel,
  Tooltip,
  Select,
  Stack,
  RadioGroup,
  Radio
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import axios from "axios"
import { validate, validateVideo } from "./validate";

//FALTAN VALIDACIONES EN EL FORMULARIO DEL VIDEO
//FALTAN VALIDACIONES EN EL FORMULARIO DEL VIDEO
//FALTAN VALIDACIONES EN EL FORMULARIO DEL VIDEO
//FALTAN VALIDACIONES EN EL FORMULARIO DEL VIDEO
//FALTAN VALIDACIONES EN EL FORMULARIO DEL VIDEO
//FALTAN VALIDACIONES EN EL FORMULARIO DEL VIDEO
//FALTAN VALIDACIONES EN EL FORMULARIO DEL VIDEO
//FALTAN VALIDACIONES EN EL FORMULARIO DEL VIDEO
const Create = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const userDB = JSON.parse(localStorage.getItem("user"))
  const categories = useSelector(s => s.categories)
  const [value, setValue] = useState('1')
  const [file, setFile] = useState(null)

  const [input, setInput] = useState({
    name: "",
    description: "",
    teacher: userDB?.fullName,
    video: [],
    category: [],
    price: null
  })


  const [inputVideo, setInputVideo] = useState({
    nameVideo: '',
    urlVideo: "",
    description: "",
  })

  const [errors, setErrors] = useState({})

  const [errorsVideo, setErrorsVideo] = useState({})

  const handelChange = (e) => {
    if (e.target.name === "Thumbnail") {
      if (value === "1")
        return setFile(e.target.value)
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

  const handelChangeVideo = (e) => {
    setInputVideo({
      ...inputVideo,
      [e.target.name]: e.target.value
    })
  }

  const handelSubmit = async () => {
    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("name", input.name);
    formdata.append("description", input.description);
    formdata.append("teacher", input.teacher);
    formdata.append("video", input.video);
    formdata.append("category", input.category);
    formdata.append("price", input.price);


    let response = await axios
      .post("http://localhost:3001/createCourse", formdata)
      .catch((err) => console.error(err));
    console.log(response.data);


    // document.getElementById("Thumbnail").value = null
    // setFile(null)
    // history.push("/profile")
  }

  const handelSubmitVideo = () => {
    setInput({
      ...input,
      video: [...input.video, inputVideo]
    })
    setInputVideo({
      nameVideo: '',
      urlVideo: "",
      description: "",
    })
    document.getElementById("formVideo").reset()
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

  const handelDeleteVideo = (name) => {
    const index = input.video.findIndex(e => e.name === name)
    let videos = input.video
    videos.splice(index, 1)
    setInput({
      ...input,
      video: videos
    })
  }

  useEffect(() => {
    if (!categories.length)
      dispatch(getCategories())
    setErrors(validate(input))
    setErrorsVideo(validateVideo(inputVideo, input))
  }, [dispatch, input, inputVideo])



  return (
    <div>
      <Navbar />
      <Box display='flex'>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent="center" my="5" w='45%'  >
          <Text fontSize='3xl'>Create Course</Text>
          <Box w="85%" border="1px" borderRadius="20" p="10">
            <Link to='/profile'>
              <Button rightIcon={<ArrowBackIcon />} fontSize='30' size='30' colorScheme='teal' variant='outline' />
            </Link>
            <FormControl >
              <FormLabel>Name:</FormLabel>
              <Input defaultValue="peperoni" name="name" onChange={handelChange} autoComplete='off' />
              {errors["name"] && <Alert justifyContent='center' status='error' bg='transparent' color='red'>
                <AlertIcon />
                {errors.name}
              </Alert>}
              <FormLabel>Thumbnail of course:</FormLabel>
              {
                value === "1"
                  ? <input name="Thumbnail" onChange={handelChange} autoComplete='off' />
                  : <input type="file" id="Thumbnail" name="Thumbnail" onChange={handelChange} />
              }
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row'>
                  <Radio value='1'>Url</Radio>
                  <Radio value='2'>File</Radio>
                </Stack>
              </RadioGroup>
              <FormLabel>Description:</FormLabel>
              <Input defaultValue="peperoni" name="description" onChange={handelChange} autoComplete='off' />
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
              <Input defaultValue={12} name="price" onChange={handelChange} autoComplete='off' />
              {errors["price"] && <Alert w='80%' justifyContent='center' status='error' bg='transparent' color='red'>
                <AlertIcon />
                {errors.price}
              </Alert>}
              <Box border="1px" borderRadius="20" p="10" my="10">
                <form id="formVideo">
                  <FormLabel display="flex" justifyContent="center">Video:</FormLabel>
                  <FormLabel>Name:</FormLabel>
                  <Input name="nameVideo" onChange={handelChangeVideo} />
                  {errorsVideo.nameVideo && <Text fontSize='10px' color='red'>
                    {errorsVideo.nameVideo}
                  </Text>}
                  <FormLabel>Description:</FormLabel>
                  <Input name="description" onChange={handelChangeVideo} />
                  {errorsVideo.description && <Text fontSize='10px' color='red'>
                    {errorsVideo.description}
                  </Text>}
                  <FormLabel>urlVideo:</FormLabel>
                  <Input name="urlVideo" onChange={handelChangeVideo} />
                  {errorsVideo.urlVideo && <Text fontSize='10px' color='red'>
                    {errorsVideo.urlVideo}
                  </Text>}
                  <Box display="flex" flexDirection="row-reverse">
                    <Button mt={4} colorScheme='teal' onClick={handelSubmitVideo} disabled={Object.keys(errorsVideo).length ? true : false}>
                      Add Video
                    </Button>
                  </Box>
                </form>

              </Box>
              <Text textAlign="center">Todos estos datos se podran modificar luego de crear el curso.</Text>
              <Button mt={4} colorScheme='teal' disabled={Object.keys(errors).length ? true : false} onClick={handelSubmit}>
                Submit
              </Button>
            </FormControl>
          </Box>
        </Box >
        <Box w='65%' my="5" display='flex' flexDirection='column' alignItems='center' justifyContent='center' h='-webkit-fit-content' >
          <Text fontSize='3xl'>List Videos</Text>
          <Box border='1px' display='grid' gridTemplateColumns='repeat(2, 1fr)' gridAutoRows='200px' justifyContent='center' w='95%' borderRadius='25' py='5' gap='10'>

            {
              input.video?.map((e, i) => (
                <Box w='90%' h='200' bg='gray.100' key={i} borderRadius='20' display='flex' flexDirection='column' alignItems='center' justifyContent='center' ml='5' textAlign='center' whiteSpace='initial' overflow='hidden'>
                  <h1>{e.name}</h1>
                  <h4>{e.description}</h4>
                  <h6>{e.urlVideo}</h6>
                  <Button colorScheme='red' m='2' onClick={() => handelDeleteVideo(e.name)}> X </Button>
                </Box>
              ))
            }

          </Box>
        </Box>
      </Box >
      <Footer2 />
    </div >
  )
}

export default Create;