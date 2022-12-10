import React from 'react';
import { SimpleGrid, Box, Text, Heading, Button } from '@chakra-ui/react';
import style from "./Categorys.module.css"


export default function Categorys() {
    return (
        <div className={style.categorys}>
            {/* <Text fontSize='xl'>
                        START TO SUCCESS
                    </Text> */}
            <Heading mb={4}>Most Popular Categorys</Heading>
            <Text fontSize='xl'> Varius version have envolved over the years, sometimes by accident,
            </Text>
            <br>
            </br>
            <SimpleGrid columns={4} spacing={10}>
                <Button height='60px'>Design</Button>
                <Button height='60px'>Lifestyle</Button>
                <Button height='60px'>Personal Develop</Button>
                <Button height='60px'>Development</Button>
                <Button height='60px'>Photography</Button>
                <Button height='60px'>Health & Fitness</Button>
                <Button height='60px'>Marketing</Button>
                <Button height='60px'>Music</Button>
                <Button height='60px'>Finance</Button>
                <Button height='60px'>Business</Button>
                <Button height='60px'>Data Science</Button>
                <Button height='60px'>Teaching</Button>
            </SimpleGrid>

        </div>
    )

}


