import React from 'react';
import { SimpleGrid, Box, Text, Heading, Button } from '@chakra-ui/react';
import style from "./Categories.module.css"
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { filters } from '../../redux/actions';



export default function Categories() {

  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = async (e) => {
    await history.push('/course')
    dispatch(filters({ category: e.target.name }))
  }

  return (
    <div className={style.categories}>
      <Heading mb={4}>Most Popular Categories</Heading>
      <Text fontSize='xl'> Varius version have envolved over the years, sometimes by accident,
      </Text>
      <br>
      </br>
      <SimpleGrid columns={4} spacing={10}>
        <Button onClick={handleClick} name="Design" height='60px'>Design</Button>
        <Button onClick={handleClick} name="Development" height='60px'>Development</Button>
        <Button onClick={handleClick} name="Marketing" height='60px'>Marketing</Button>
        <Button onClick={handleClick} name="IT and Software" height='60px'>IT and Software</Button>
        <Button onClick={handleClick} name="Personal Develop" height='60px'>Personal Develop</Button>
        <Button onClick={handleClick} name="Business" height='60px'>Business</Button>
        <Button onClick={handleClick} name="Photography" height='60px'>Photography</Button>
        <Button onClick={handleClick} name="Music" height='60px'>Music</Button>
        <Button onClick={handleClick} name="Health & Fitness" height='60px'>Health & Fitness</Button>
        <Button onClick={handleClick} name="Nutrition & Diet" height='60px'>Nutrition & Diet</Button>
        <Button onClick={handleClick} name="Cryptocurrency & Blockchain" height='60px'>Cryptocurrency & Blockchain</Button>
        <Button onClick={handleClick} name="Excel" height='60px'>Excel</Button>
      </SimpleGrid>

    </div>
  )

}


