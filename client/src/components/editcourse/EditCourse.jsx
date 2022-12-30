import { Box, Text, Button, Video, Center } from "@chakra-ui/react";
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";

const prueba = { name: "Curso de santi", video: <iframe width="560" height="315" src="https://www.youtube.com/embed/H_vEJt5Id_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, description: "this is a video explaining how to crate a authenticator component in react using Firebase, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere ea officiis sapiente nemo. Repellendus enim esse libero ea sequi aspernatur quo! Corporis eveniet in id dolores! Nobis, illum corporis., Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere ea officiis sapiente nemo. Repellendus enim esse libero ea sequi aspernatur quo! Corporis eveniet in id dolores! Nobis, illum corporis.", }


export default function EditCourse() {

    return (

        <Box>
            <Navbar />

            <Text fontSize="36px">Video Detail</Text>
            <br />

            <Box>
                <Box display="flex" flexDirection="row" justifyContent="space-around">
                    <Box width="800px" >
                        <Box padding="13px" borderWidth='1px' borderRadius='lg'>
                        <Text> Course Name: <Button title="Un buen título puede atraer a más usuarios. Cuando escribas títulos para tus vídeos, te recomendamos que incluyas las palabras clave que creas que tu audiencia puede usar al buscar vídeos como los tuyos.">?</Button> </Text>
                        <Text fontSize='24px' > {prueba.name} </Text>
                        </Box>
                        <br />
                        <Box padding="13px" maxW="800px" borderWidth='1px' borderRadius='lg'>
                            <Text>Description: <Button title="Escribir descripciones con palabras clave puede ayudar a que los usuarios encuentren más fácilmente tus vídeos cuando hagan búsquedas. Puedes resumir el contenido del vídeo y añadir algunas palabras clave al principio de la descripción.">?</Button></Text>
                            <Text>{prueba.description}</Text>
                        </Box>
                    </Box>
                    <Box>
                        <a>{prueba.video}</a>
                    </Box>
                </Box>
                <br />
                <Box></Box>

            </Box>
            <Footer2 />
        </Box>
    )
}