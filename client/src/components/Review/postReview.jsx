import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllUsers } from "../../redux/actions/index.js"
import { useDispatch, useSelector } from "react-redux";
import { FormControl, FormLabel, Input, Button, FormErrorMessage, Select, Card } from '@chakra-ui/react';
import { useParams } from "react-router-dom";

const PostReview = ({ update, setUpdate }) => {
    const userDB = JSON.parse(localStorage.getItem("user"));
    const params = useParams();
    const [input, setInput] = useState({
        userId: userDB?.id,
        courseId: parseInt(params.id),
        score: 0,
        title: '',
        comments: ''
    });

    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const allUser = useSelector((state) => state.allUsers);


    useEffect(() => {
        dispatch(getAllUsers())
        // if(usuario){
        //     setInput({
        //         userId: usuario.id,
        //         courseId: courseId
        //     })
        // }
    }, [dispatch, update]);


    function validate(input) {
        let errors = {};

        if (!input.title) {
            errors.title = "Please add a title.";
        }
        if (!input.score) {
            errors.score = "Please add a score";
        }
        if (!input.comments) {
            errors.comments = "Please add your comments";
        }
        return errors
    }

    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value

        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setInput({
            ...input,
            score: parseInt(input.score)
        })
        await axios.post("/createReview", input);
        setUpdate(!update)
    }

    return (
        <Card padding="5"
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
        >
            <FormControl onSubmit={(e) => handleSubmit(e)} isRequired>
                <FormLabel>Rate: </FormLabel>
                <Select
                    placeholder='Select a rating'
                    name='score'
                    onChange={(e) => handleChange(e)}
                >
                    <option onChange={e => handleChange(e)} value={1}>1</option>
                    <option onChange={e => handleChange(e)} value={2}>2</option>
                    <option onChange={e => handleChange(e)} value={3}>3</option>
                    <option onChange={e => handleChange(e)} value={4}>4</option>
                    <option onChange={e => handleChange(e)} value={5}>5</option>
                </Select>
                <FormErrorMessage> {errors.score && (<p>{errors.score}</p>)}</FormErrorMessage>

                <FormLabel>Add a title: </FormLabel>
                <Input
                    type="text"
                    value={input.title}
                    name="title"
                    onChange={(e) => handleChange(e)}
                />
                <FormErrorMessage> {errors.title && (<p>{errors.title}</p>)}</FormErrorMessage>

                <FormLabel>Add your comments: </FormLabel>
                <Input
                    type="text"
                    value={input.comments}
                    name="comments"
                    onChange={(e) => handleChange(e)}
                />
                <FormErrorMessage> {errors.comments && (<p>{errors.comments}</p>)}</FormErrorMessage>

                <Button
                    mt={4}
                    colorScheme='teal'
                    // isLoading={props.isSubmitting}
                    // type='submit'
                    onClick={(e) => handleSubmit(e)}
                > Submit </Button>
            </FormControl>
        </Card>

    )
}

export default PostReview;