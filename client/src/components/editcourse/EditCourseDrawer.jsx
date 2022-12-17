import { Box, Text, Button, Video, Center, Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react";
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const prueba = { name: "Curso de santi", video: <iframe width="560" height="315" src="https://www.youtube.com/embed/H_vEJt5Id_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, description: "this is a video explaining how to crate a authenticator component in react using Firebase, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere ea officiis sapiente nemo. Repellendus enim esse libero ea sequi aspernatur quo! Corporis eveniet in id dolores! Nobis, illum corporis., Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere ea officiis sapiente nemo. Repellendus enim esse libero ea sequi aspernatur quo! Corporis eveniet in id dolores! Nobis, illum corporis.", }


export default function EditCourseDrawer() {

    return (

        <Box>
            <Text fontSize="36px">Video Detail</Text>
            <br />
            <Box>
                <Box display="flex" flexDirection="row" justifyContent="space-around">
                    <Box width="800px" >
                        <Box padding="13px" borderWidth='1px' borderRadius='lg'>

                            <Text> Course Name: <Button title="Un buen título puede atraer a más usuarios. Cuando escribas títulos para tus vídeos, te recomendamos que incluyas las palabras clave que creas que tu audiencia puede usar al buscar vídeos como los tuyos.">?</Button> </Text>
                            <Input fontSize='24px' placeholder={prueba.name}></Input>
                            {/* <Text fontSize='24px' > {prueba.name} </Text> */}
                        </Box>
                        <br />
                        <Box padding="13px" maxW="800px" borderWidth='1px' borderRadius='lg'>
                            <Text>Description: <Button title="Escribir descripciones con palabras clave puede ayudar a que los usuarios encuentren más fácilmente tus vídeos cuando hagan búsquedas. Puedes resumir el contenido del vídeo y añadir algunas palabras clave al principio de la descripción.">?</Button></Text>
                            <Text>{prueba.description}</Text>
                        </Box>
                    </Box>
                    <Box>
                        <a>{prueba.video}</a>
                        <br />
                        <Text>Copy and paste the new video direction:</Text>

                        <InputGroup size='sm'>
                            <InputLeftAddon children='https://' />
                            <Input placeholder='mysite' />
                            <InputRightAddon children='.com' />
                        </InputGroup>
                    </Box>
                </Box>
                <br />
                <Box>
                    <Center>
                        <Link to={`/course`}>
                            <Button title="click to dischard changes">Cancel</Button>
                        </Link>
                        <Button title="click to save changes">Save</Button>
                    </Center>
                </Box>
            </Box>
        </Box>

    )
}