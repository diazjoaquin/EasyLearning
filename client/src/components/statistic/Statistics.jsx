import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

import axios from "axios";
import { useEffect, useState } from "react";

import style from "./Statistics.module.css";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} >
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function BasicStatistics() {
  
    const [state, setState] = useState();

    const getStatistics = async () => {
        setState(await axios.get("/admin/statistics"))
      }
      
      useEffect(() => {
        getStatistics()
      }, [])
      
      console.log(state)
  return (
    <div>
      <div className={style.statistic}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWK8VSfQosu7oxu9tyAN7isAj-3A_eu7giA&usqp=CAU" alt="estudiante" />
      </div>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Our Achievements?
        </chakra.h1>
        <SimpleGrid columns={{ base: 2, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Courses'} stat={state?.data?.courses} />
          <StatsCard title={'Instructors'} stat={state?.data?.teachers} />
          <StatsCard title={'Videos'} stat={state?.data?.videos} />
          <StatsCard title={'Users'} stat={state?.data?.users} />
        </SimpleGrid>
      </Box>
    </div>
  );
}

