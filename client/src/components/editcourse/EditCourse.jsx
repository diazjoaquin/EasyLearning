import {
  Box, Text, Button, Video, Center, Input, InputGroup, InputLeftAddon, InputRightAddon, FormControl, FormLabel, Alert, AlertIcon, HStack, Tag, TagLabel, Tooltip, Select, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Card, Stack, CardBody, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Img, useToast
} from "@chakra-ui/react";
import { DeleteIcon, ArrowBackIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import { Link, useHistory, useParams } from "react-router-dom";
import { getCategories, getCourseDetail, clearDetail } from "../../redux/actions/index"
import axios from "axios";
import { validate, validateVideo } from "../create/validate";
import Swal from 'sweetalert2'




export default function EditCourse() {
  const history = useHistory()
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  let [nameVideo, setNameVideo] = useState("")
  let [urlVideo, setUrlVideo] = useState("")
  let [description, setDescription] = useState("")
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

  //manejo de errores
  const [errors, setErrors] = useState({})

  const [errorsVideo, setErrorsVideo] = useState({})
  //manejo de cambios 
  const handleChange = e => {
    const value = e.target.value
    if (e.target.name === "category") {
      const index = myCourse?.categories.findIndex(e => e.name === value)
      if (index === -1) {
        myCourse.categories.push({ name: value })
      }
    } else {
      myCourse[e.target.name] = e.target.value
    }
    setErrors(validate(myCourse))
  }

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
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const response = axios.patch("http://localhost:3001/updateCourse", myCourse);
        toast({
          title: 'Course updated.',
          description: "Course successfully updated.",
          status: 'success',
          duration: 3500,
          isClosable: true,
        })
        history.push("/profile")
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

  const handelSubmitVideo = () => {
    myCourse?.videos.push({
      nameVideo,
      urlVideo,
      description
    })
    document.getElementById("formVideo").reset()
    setNameVideo(nameVideo = "")
    setUrlVideo(urlVideo = "")
    setDescription(description = "")
    setErrorsVideo(validateVideo({ nameVideo, urlVideo, description }, myCourse))
    setErrors(validate(myCourse))
    onClose()
  }

  const handelDeleteVideo = (name) => {
    const index = myCourse.videos.findIndex(e => e.nameVideo === name)
    myCourse.videos.splice(index, 1)
    setErrors(validate(myCourse))
    setUpdate(!update)
  }

  const handelDelete = (e) => {
    const name = e.target.name
    const index = myCourse.categories.findIndex(e => e === name)
    myCourse.categories.splice(index, 1)
    setUpdate(!update)
    setErrors(validate(myCourse))
  }

  const handelDeleteCourse = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.get(`http://localhost:3001/deletedCourse/${myCourse.id}`)
        toast({
          title: 'Course deleted.',
          description: "Course successfully deleted.",
          status: 'error',
          duration: 3500,
          isClosable: true,
        })
        history.push("/profile")
      }
    })
  }

  useEffect(() => {
    if (!myCourse.length)
      dispatch(getCourseDetail(courseId));

    if (!categories.length)
      dispatch(getCategories())

    setErrors(validate(myCourse))
    setErrorsVideo(validateVideo({ nameVideo, urlVideo, description }, myCourse))

    return () => {
      dispatch(clearDetail())
    }

  }, [dispatch])

  return (
    <>
      <Navbar />
      <Box display="flex" justifyContent='center' width='100%'>
        <Link to='/profile'>
          <Button rightIcon={<ArrowBackIcon />} fontSize='30' size='30' colorScheme='teal' variant='outline' />
        </Link>
        <Box display="flex" justifyContent='center' flexDirection="column" alignItems='center' width='80%'>
          <Heading as='h2' size='xl'>
            Edit Course
          </Heading>
          <FormControl display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            {errors["name"]
              ? <Text color="red.400"> Course Name: <Button title="Un buen título puede atraer a más usuarios. Cuando escribas títulos para tus vídeos, te recomendamos que incluyas las palabras clave que creas que tu audiencia puede usar al buscar vídeos como los tuyos.">?</Button> </Text>
              : <Text> Course Name: <Button title="Un buen título puede atraer a más usuarios. Cuando escribas títulos para tus vídeos, te recomendamos que incluyas las palabras clave que creas que tu audiencia puede usar al buscar vídeos como los tuyos.">?</Button> </Text>}
            <Input
              defaultValue={myCourse?.name}
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              onChange={handleChange}
              textAlign='center'
            >
            </Input>
            {errors["name"] && <Alert justifyContent='center' status='error' bg='transparent' color='red'>
              <AlertIcon />
              {errors.name}
            </Alert>}

            {errors["description"]
              ? <Text color="red.400">Description: <Button title="Escribir descripciones con palabras clave puede ayudar a que los usuarios encuentren más fácilmente tus vídeos cuando hagan búsquedas. Puedes resumir el contenido del vídeo y añadir algunas palabras clave al principio de la descripción.">?</Button></Text>
              : <Text>Description: <Button title="Escribir descripciones con palabras clave puede ayudar a que los usuarios encuentren más fácilmente tus vídeos cuando hagan búsquedas. Puedes resumir el contenido del vídeo y añadir algunas palabras clave al principio de la descripción.">?</Button></Text>}
            <Input
              defaultValue={myCourse?.description}
              type="text"
              id="coursedescription"
              name="description"
              autoComplete="off"
              onChange={handleChange}
              textAlign='center'
            >
            </Input>
            {errors["description"] && <Alert justifyContent='center' mt='3' mb='6' status='error' bg='transparent' color='red'>
              <AlertIcon />
              {errors.description}
            </Alert>}

            {errors["category"]
              ? <Text color="red.400">Add Category: </Text>
              : <Text>Add Category:</Text>}
            <Select name="category" textAlign='center' onChange={handleChange}>
              <option value="category">Select categories</option>
              {categories.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </Select>
            {
              myCourse?.categories?.length ?
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
                : undefined
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
              autoComplete="off"
              value={myCourse.image}
              onChange={handleChange}
              textAlign='center'
            >
            </Input>
            <Img src={myCourse?.image}></Img>

            <Text>Price: <Button title="Dicte un precio acorde al contenido, y al publico que esta dirigo. La estrategio de precio en mercadeo es una de las bases para lograr el mayor exito en sus ventas">?</Button></Text>
            <Input
              type="number"
              id="price"
              name="price"
              autoComplete="off"
              value={myCourse.price}
              onChange={handleChange}
              textAlign='center'
            >
            </Input>
            {errors["price"] && <Alert justifyContent='center' status='error' bg='transparent' color='red'>
              <AlertIcon />
              {errors.price}
            </Alert>}

            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      <h2>
                        Videos {myCourse?.videos?.length ? `[${myCourse?.videos?.length}]` : undefined}
                      </h2>
                    </Box>
                    <AccordionIcon />
                    <Box><Button onClick={onOpen}> Add Video </Button></Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {myCourse?.videos?.map((e, i) => (
                    <Card
                      display="flex"
                      flexDirection='row'
                      justifyContent='space-between'
                      alignItems='center'
                      textAlign='center'
                      overflow="hidden"
                      variant="outline"
                      key={i}
                    >
                      <Stack>
                        <CardBody>
                          <Heading size="sm">{e.nameVideo}</Heading>
                          <Text py="2">
                            {e.description}
                            {e.urlVideo}
                          </Text>
                        </CardBody>
                      </Stack>
                      <Button m='2' onClick={() => handelDeleteVideo(e.nameVideo)}> <DeleteIcon /></Button>
                    </Card>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </FormControl>
          {errors["videos"] && <Alert justifyContent='center' mt='3' mb='6' status='error' bg='transparent' color='red'>
            <AlertIcon />
            {errors.videos}
          </Alert>}

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add video</ModalHeader>
              <ModalCloseButton />
              <form id="formVideo">
                <FormLabel display="flex" justifyContent="center">Video:</FormLabel>
                <FormLabel>Name:</FormLabel>
                <Input textAlign='center' autoComplete="off" name="nameVideo" onChange={handelChangeVideo} />
                {errorsVideo.nameVideo && <Text fontSize='10px' color='red'>
                  {errorsVideo.nameVideo}
                </Text>}
                <FormLabel>Description:</FormLabel>
                <Input textAlign='center' autoComplete="off" name="description" onChange={handelChangeVideo} />
                {errorsVideo.description && <Text fontSize='10px' color='red'>
                  {errorsVideo.description}
                </Text>}
                <FormLabel>urlVideo:</FormLabel>
                <Input textAlign='center' autoComplete="off" name="urlVideo" onChange={handelChangeVideo} />
                {errorsVideo.urlVideo && <Text fontSize='10px' color='red'>
                  {errorsVideo.urlVideo}
                </Text>}
              </form>
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
      </Box>
      <Box>
        <Center>
          <Link to={`/profile`}>
            <Button title="Click to cancel changes">Cancel</Button>
          </Link>
          <Button onClick={handleSubmit} title="Click to save changes">Save</Button>
          <Button onClick={handelDeleteCourse} title="Click to save delete course" >Delete Coruse</Button>
        </Center>
      </Box>
      <Footer2 />
    </>
  )
}