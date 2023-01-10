import React from 'react';
import { Card, CardHeader, Heading, CardBody, Text, CardFooter, Stack, Divider, Box, StackDivider, VStack} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'

const CardReview = ({ user, score, comments, date}) => {
    return (
    <VStack
    spacing={0.5}
    align='stretch'
    paddingBottom={5}
    w='700px'
    >
    <Box h='40px'
    position="relative"
    >
    {user} 
    <Text
    position="absolute"
    right={0}
    fontSize='sm'
    color= 'gray'
    > {date} </Text>
    </Box>
    <Box h='40px'>
    {comments}
    </Box>
    <Box h='40px'>
    {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                value={score}
                key={i}
                color={i < score ? 'teal.500' : 'gray.300'}
              />
            ))}

    </Box>
    <Divider 
    borderColor='gray.200'
    />
    </VStack>
  );
};



export default CardReview;