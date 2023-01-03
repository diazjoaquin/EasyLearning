import {
  Box, Text, Button, Video, Center, Input, InputGroup, InputLeftAddon, InputRightAddon, FormControl, FormLabel, Alert, AlertIcon, HStack, Tag, TagLabel, Tooltip, Select, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Card,
  Stack,
  CardBody,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useHistory, useParams } from "react-router-dom";
import { getCategories, getCourseDetail, clearDetail } from "../../redux/actions/index"
import axios from "axios";
import { validate, validateVideo } from "../create/validate";

export default function EditCourse() {

  const { courseId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure()

  let [nameVideo, setNameVideo] = useState()
  let [urlVideo, setUrlVideo] = useState()
  let [description, setDescription] = useState()

  const dispatch = useDispatch();
  const history = useHistory()
  const [update, setUpdate] = useState(false)
  const categories = useSelector(s => s.categories)
  const myCourse = useSelector(state => state.courseDetail)


  const [ecState, setecState] = useState({
    id: courseId,
    name: "",
    description: "",
    video: [],
    category: [],
    price: null,
  })

  // edicion de videos
  // const [inputVideo, setInputVideo] = useState({
  //   nameVideo: '',
  //   urlVideo: "",
  //   description: "",
  // })

  //manejo de errores
  const [errors, setErrors] = useState({})

  const [errorsVideo, setErrorsVideo] = useState({})

  //manejo de cambios 
  const handleChange = e => {
    if (e.target.value === 'category') return
    // if (e.target.name === "category") {
    //   if (!ecState.category) {
    //     setecState({
    //       ...ecState,
    //       [e.target.name]: auxCategory
    //     })
    //   } else
    //     if (!ecState.category.includes(e.target.value)) {
    //       setecState({
    //         ...ecState,
    //         [e.target.name]: [...ecState[e.target.name], e.target.value]
    //       })
    //     }


    // } else {
    //   setecState({
    //     ...ecState,
    //     [e.target.name]: e.target.value
    //   })
  }
  // }

  const handelChangeVideo = (e) => {
    if (e.target.name === "nameVideo") {
      setNameVideo(nameVideo = e.target.value)
    }
    if (e.target.name === "urlVideo") {
      setUrlVideo(urlVideo = e.target.value)
    }
    if (e.target.name === "description") {
      setDescription(description = e.target.value)
    }

    setErrorsVideo(validateVideo({ nameVideo, urlVideo, description }, myCourse))


    // setInputVideo({
    //   ...inputVideo,
    //   [e.target.name]: e.target.value
    // })
  }
  // const handelChangeVideo = (e) => {
  //   setInputVideo({
  //     ...inputVideo,
  //     [e.target.name]: e.target.value
  //   })
  // }

  //Submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.put("http://localhost:3001/editcourse", ecState);
    alert('¡Campos actualizados con exito!');
    history.push("/course")
  }

  const handelSubmitVideo = () => {
    // setecState({
    //   ...ecState,
    //   video: [...ecState.video, inputVideo]
    // })
    // setInputVideo({
    //   nameVideo: '',
    //   urlVideo: "",
    //   description: "",
    // })
    // document.getElementById("formVideo").reset()
  }

  const handelDeleteVideo = (name) => {
    const index = ecState.video.findIndex(e => e.name === name)
    let videos = ecState.video
    videos.splice(index, 1)
    setecState({
      ...ecState,
      video: videos
    })
  }

  const handelDelete = (e) => {
    const name = e.target.name
    const index = myCourse.categories.findIndex(e => e === name)
    myCourse.categories.splice(index, 1)

    // setecState({
    //   ...ecState,
    //   category: auxCategory
    // })

    setUpdate(!update)
  }

  // console.log(ecState);
  // console.log("*", myCourse);

  useEffect(() => {
    if (!myCourse.length)
      dispatch(getCourseDetail(courseId));

    if (!categories.length)
      dispatch(getCategories())

    setErrors(validate(ecState))

    return () => {
      dispatch(clearDetail())
    }

  }, [dispatch])

  return (

    <Box >
      <Navbar />
      <Text fontSize="36px">Video Detail</Text>
      <br />

      <Box display="flex" justifyContent='center' flexDirection="row" width='100%'>
        <Box width="85%" >
          <form onSubmit={handleSubmit}>
            <Text> Course Name: <Button title="Un buen título puede atraer a más usuarios. Cuando escribas títulos para tus vídeos, te recomendamos que incluyas las palabras clave que creas que tu audiencia puede usar al buscar vídeos como los tuyos.">?</Button> </Text>
            <Input
              defaultValue={myCourse?.name}
              type="text"
              id="name"
              name="name"
              fontSize='24px'
              onChange={handleChange}
            >
            </Input>
            <br />

            <Text>Description: <Button title="Escribir descripciones con palabras clave puede ayudar a que los usuarios encuentren más fácilmente tus vídeos cuando hagan búsquedas. Puedes resumir el contenido del vídeo y añadir algunas palabras clave al principio de la descripción.">?</Button></Text>
            <Input
              defaultValue={myCourse?.description}
              type="text"
              id="coursedescription"
              name="description"
              onChange={handleChange}
            >
            </Input>

            <br />

            <FormLabel>Add Category:</FormLabel>
            <Select name="category" onChange={handleChange}>
              <option value="category">Select categories</option>
              {categories.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </Select>
            {
              //   ? 
              myCourse?.categories?.length &&
              <Box my='5' border='1px' borderRadius="20" p='5'>
                <HStack spacing={4} display="flex" flexWrap="wrap" justifyContent="center" gap='2'>
                  {myCourse?.categories?.map((e) => (
                    <Tag size={"md"} key={e.name} variant='subtle' colorScheme='cyan'>
                      <TagLabel>{e.name}</TagLabel>
                      <Tooltip hasArrow label="delete" placement="top">
                        <Button name={e.name} onClick={handelDelete} bg='transparent' color='black' _hover={{ background: "transparent" }}> X </Button>
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

            <br />

            <Text>Thumbnail: <Button title="Eliga la miniatura que describa con lenguaje no verbal la manera mas completa de presentar su curso">?</Button></Text>
            <Input
              type="text"
              id="thumbnail"
              name="description"
              value={myCourse.image}
              onChange={handleChange}
            >
            </Input>

            <br />

            <Text>Price: <Button title="Dicte un precio acorde al contenido, y al publico que esta dirigo. La estrategio de precio en mercadeo es una de las bases para lograr el mayor exito en sus ventas">?</Button></Text>
            <Input
              type="number"
              id="price"
              name="description"
              value={myCourse.price}
              onChange={handleChange}
            >
            </Input>

            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      <h2>
                        Videos
                      </h2>
                    </Box>
                    <AccordionIcon />
                    <Box><Button onClick={onOpen}> Add </Button></Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {myCourse?.videos?.map((e, i) => (
                    <Card
                      direction={{ base: "column", sm: "row" }}
                      overflow="hidden"
                      variant="outline"
                      key={i}
                    >
                      <Stack>
                        <CardBody>
                          <Heading size="sm">{e.title}</Heading>
                          <Text py="2">
                            {e.name}
                            {e.description}
                            <Link to={`/detailVideo/${e.courseId}/${e.id}`}>
                              <button>{e.urlVideo}</button>
                            </Link>
                            {e.teacher}
                          </Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

          </form>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add video</ModalHeader>
            <ModalCloseButton />
            <FormControl id="formVideo">
              <FormLabel display="flex" justifyContent="center">Video:</FormLabel>
              <FormLabel>Name:</FormLabel>
              <Input autoComplete="off" name="nameVideo" onChange={handelChangeVideo} />
              {errorsVideo.nameVideo && <Text fontSize='10px' color='red'>
                {errorsVideo.nameVideo}
              </Text>}
              <FormLabel>Description:</FormLabel>
              <Input autoComplete="off" name="description" onChange={handelChangeVideo} />
              {errorsVideo.description && <Text fontSize='10px' color='red'>
                {errorsVideo.description}
              </Text>}
              <FormLabel>urlVideo:</FormLabel>
              <Input autoComplete="off" name="urlVideo" onChange={handelChangeVideo} />
              {errorsVideo.urlVideo && <Text fontSize='10px' color='red'>
                {errorsVideo.urlVideo}
              </Text>}
            </FormControl>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='teal' onClick={handelSubmitVideo} disabled={Object.keys(errorsVideo).length ? true : false}>
                Add Video
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Box>
      <Box>
        <Center>
          <Link to={`/profile`}>
            <Button title="click to dischard changes">Cancel</Button>
          </Link>
          <Button type="submit" title="click to save changes">Save</Button>
          <Button title="click to save delete course">Delete Coruse</Button>
        </Center>
      </Box>
      <Footer2 />
    </Box>
  )
}