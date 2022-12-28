import React from 'react';
import { Card, CardHeader, Heading, CardBody, Text, CardFooter, } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'

const CardReview = ({ user, score, comments, title}) => {
    return (
        <>
        <Card>
        <CardHeader>
          <Heading size='md'>{user}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{title}</Text>
        </CardBody>
        <CardBody>
          <Text>{comments}</Text>
        </CardBody>
        <CardFooter>
        {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                value={score}
                key={i}
                color={i < score ? 'teal.500' : 'gray.300'}
              />
            ))}
        </CardFooter>
       </Card>
        </>
       );
    };

export default CardReview;