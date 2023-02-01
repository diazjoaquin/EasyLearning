// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}
  //   : {
  //     src: string;
  //     name: string;
  //     title: string;
  //   }
) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Speak() {


  const [data, setData] = useState()

  const getData = async (data, setData) => {
    let reviews;
    reviews = await axios.get("/reviewsPage");
    reviews = reviews?.data
    reviews?.sort((a, b) => b.score - a.score)
    reviews = reviews?.splice(0, 3);
    setData(data = reviews)
  }

  useEffect(() => {
    if (!data) {
      getData(data, setData);
    }
  }, [data, setData])

  return (

    <Box bg={useColorModeValue('gray.100', 'gray.700')}>

      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Center>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            {
              data?.map((e, i) => {
                return (
                  <Testimonial key={i}>
                    <TestimonialContent>
                      <TestimonialHeading>{e.title}</TestimonialHeading>
                      <TestimonialText>
                        {e.comments}
                      </TestimonialText>
                    </TestimonialContent>
                    <TestimonialAvatar
                      // src={
                      //   'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                      // }
                      name={e.user.fullName}
                      title={'User'}
                    />
                  </Testimonial>
                )
              })

            }


          </Stack>
        </Center>
      </Container>
    </Box>
  );
}