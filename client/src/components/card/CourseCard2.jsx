import React from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, FormControl, FormLabel, Switch, Box, Tooltip } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';


const CourseCard2 = ({id, name , price}) => {
    const location = useLocation();
    const dispatch = useDispatch()
    return (
        
        <Card maxW='sm' bgColor={location.pathname === "/profile" ? '#BEE3F8' : undefined} width='300px'>
            <CardBody display='flex' flexDirection='column' alignItems='center' pt='3'>
                
                <Stack>
                    <Link to={`/detail/${id}`}>
                    <Heading size='md'>{name}</Heading>
                    </Link>
                <Text color='blue.600' fontSize='2xl'>${price}</Text>
                </Stack>
            </CardBody>
        </Card>
    )
}
export default CourseCard2;