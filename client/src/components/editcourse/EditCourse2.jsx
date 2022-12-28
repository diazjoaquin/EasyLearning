import { Box, Text, Button, Video, Center, Input, InputGroup, InputLeftAddon, InputRightAddon, FormControl, FormLabel, Alert, AlertIcon, HStack, Tag, TagLabel, Tooltip, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useHistory, useParams } from "react-router-dom";
import { getCategories, getCourseDetail } from "../../redux/actions/index"
import axios from "axios";
import { validate, validateVideo } from "../create/validate";



const prueba = { name: "Curso de santi el capo", video: <iframe width="560" height="315" src="https://www.youtube.com/embed/H_vEJt5Id_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, description: "this is a video explaining how to crate a authenticator component in react using Firebase, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere ea officiis sapiente nemo. Repellendus enim esse libero ea sequi aspernatur quo! Corporis eveniet in id dolores! Nobis, illum corporis., Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere ea officiis sapiente nemo. Repellendus enim esse libero ea sequi aspernatur quo! Corporis eveniet in id dolores! Nobis, illum corporis.", }


export default function EditCourse() {

    const { id, courseId } = useParams();


    const dispatch = useDispatch();
    const history = useHistory()
    const categories = useSelector(s => s.categories)
    const myCourse = useSelector(state => state.courseDetail)

    console.log("ger",myCourse);

    // definimos el estado del formulario con un objeto que contendrá las propiedades necesarias para almacenar los valores de los campos del formulario
    // aca deberiamos traernos los valores por id del curso
    const [ecState, setecState] = useState({
        name: "",
        video: [],
        title: "",
        description: "",
        thumbnail: "",
        category: [],
        price: "",
    })

    // edicion de videos
    const [inputVideo, setInputVideo] = useState({
        nameVideo: '',
        urlVideo: "",
        description: "",
    })

    //manejo de errores
    const [errors, setErrors] = useState({})

    const [errorsVideo, setErrorsVideo] = useState({})

    //manejo de cambios 
    const handleChange = e => {
        if (e.target.value === 'category') return
        if (e.target.name === "category") {
            if (!ecState.category.includes(e.target.value)) {
                setecState({
                    ...ecState,
                    [e.target.name]: [...ecState[e.target.name], e.target.value]
                })
            }


        } else {
            setecState({
                ...ecState,
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

    //Submit
    const handleSubmit = async () => {
        const response = await axios.put("http://localhost:3001/editcourse", ecState);
        alert('¡Campos actualizados con exito!');
        history.push("/course")
    }

    const handelSubmitVideo = () => {
        setecState({
            ...ecState,
            video: [...ecState.video, inputVideo]
        })
        setInputVideo({
            nameVideo: '',
            urlVideo: "",
            description: "",
        })
        document.getElementById("formVideo").reset()
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
        const index = ecState.category.findIndex(e => e === name)
        let categories = ecState.category
        categories.splice(index, 1)
        setecState({
            ...ecState,
            category: categories
        })
    }


    useEffect(() => {
        dispatch(getCourseDetail(courseId));

        if (!categories.length)
            dispatch(getCategories())
        setErrors(validate(ecState))
        setErrorsVideo(validateVideo(inputVideo, ecState))
        console.log(errorsVideo);
    }, [dispatch, ecState, inputVideo])

    return (

        <Box >

            <Navbar />

            <Text fontSize="36px">Video Detail</Text>
            <br />

            <Box display="flex" flexDirection="row">
                <Box display="flex" flexDirection="row" justifyContent="space-around">
                    <Box width="800px" >
                        <form onSubmit={handleSubmit}>
                            <Box padding="13px" borderWidth='1px' borderRadius='lg'>
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
                            </Box>
                            <br />

                            <Box padding="13px" maxW="800px" borderWidth='1px' borderRadius='lg'>
                                <Text>Description: <Button title="Escribir descripciones con palabras clave puede ayudar a que los usuarios encuentren más fácilmente tus vídeos cuando hagan búsquedas. Puedes resumir el contenido del vídeo y añadir algunas palabras clave al principio de la descripción.">?</Button></Text>
                                <Input
                                    defaultValue={myCourse?.description}
                                    type="text"
                                    id="coursedescription"
                                    name="description"
                                    onChange={handleChange}
                                >
                                </Input>
                            </Box>

                            <br />
                            {/* ------------ */}


                            <FormLabel>Category:</FormLabel>
                            <Select name="category" onChange={handleChange}>
                                <option value="category">Select categories</option>
                                {categories.map((e, i) => (
                                    <option key={i} value={e}>
                                        {e}
                                    </option>
                                ))}
                            </Select>
                            {ecState.category?.length !== 0 &&
                                <Box my='5' border='1px' borderRadius="20" p='5'>
                                    <HStack spacing={4} display="flex" flexWrap="wrap" justifyContent="center" gap='2'>
                                        {ecState.category?.map((e) => (
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


                            {/* ------------ */}
                            <br />

                            <Box padding="13px" maxW="800px" borderWidth='1px' borderRadius='lg'>
                                <Text>Thumbnail: <Button title="Eliga la miniatura que describa con lenguaje no verbal la manera mas completa de presentar su curso">?</Button></Text>
                                <Input
                                    type="text"
                                    id="thumbnail"
                                    name="description"
                                    value={ecState.thumbnail}
                                    onChange={handleChange}
                                >
                                </Input>
                            </Box>

                            <br />

                            <Box padding="13px" maxW="800px" borderWidth='1px' borderRadius='lg'>
                                <Text>Price: <Button title="Dicte un precio acorde al contenido, y al publico que esta dirigo. La estrategio de precio en mercadeo es una de las bases para lograr el mayor exito en sus ventas">?</Button></Text>
                                <Input
                                    type="number"
                                    id="price"
                                    name="description"
                                    value={ecState.price}
                                    onChange={handleChange}
                                >
                                </Input>
                            </Box>

                        </form>
                    </Box>

                    <Box display="flex" justifyContent="center" border="1px" borderRadius="20" p="10" my="10">
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
                </Box>

            </Box>

            <Box>
                <Center>
                    <Link to={`/profile`}>
                        <Button title="click to dischard changes">Cancel</Button>
                    </Link>
                    <Button type="submit" title="click to save changes">Save</Button>
                </Center>
            </Box>

            <Footer2 />
        </Box>


    )
}