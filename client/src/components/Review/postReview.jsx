import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, FormLabel, Input, Button, FormErrorMessage, Select, Card, useToast } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/Auth-context";

const PostReview = ({ update, setUpdate, students }) => {
    const userDB = JSON.parse(localStorage.getItem("user"));
    const params = useParams();
    const [input, setInput] = useState({
        userId: userDB?.id,
        courseId: parseInt(params.id),
        score: 0,
        title: '',
        comments: ''
    });

    const toast = useToast()

    const [errors, setErrors] = useState({});

    const { user } = useAuth();
    const allUser = useSelector((state) => state.allUsers);

    const usuario = user && allUser.find(u => u.email === user.email)

    useEffect(() => {
        // dispatch(getAllUsers())
        if (usuario) {
            setInput({
                userId: usuario.id,
            })
        }
    }, [update]);


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
        if (!students.includes(userDB?.id)) {
            return toast({
                title: 'Comment failed!',
                description: "Cannot comment if have not purchased the course.",
                status: 'error',
                duration: 3500,
                isClosable: true,
            })
        }
        console.log(userDB?.status);
        if (userDB?.status === "ACTIVE") {
            if (input.title.length > 1
                && !errors.hasOwnProperty("title") //devuelve un buleano si el objeto tiene la propiedad especificada 
                && !errors.hasOwnProperty("score")
                && !errors.hasOwnProperty("comments")
            )
                setInput({
                    ...input,
                    score: parseInt(input.score)
                })
            // toast.success("Review submitted", {
            //     position: "bottom-left",
            // });
            // console.log(userDB?.status);

            await axios.post("/createReview", input);
            setUpdate(!update)
        }
        else {
            window.alert(`Acount ${userDB?.status}`)
        }
    }

    return (
        <Card
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
        >
            <FormControl onSubmit={(e) => handleSubmit(e)} isRequired>
                <FormLabel>Rate: </FormLabel>
                <Select
                    name='score'
                    onChange={(e) => handleChange(e)}
                >
                    <option selected hidden disabled value="">Select a rating</option>
                    <option onChange={e => handleChange(e)} value={1}>1 ⭐</option>
                    <option onChange={e => handleChange(e)} value={2}>2 ⭐⭐</option>
                    <option onChange={e => handleChange(e)} value={3}>3 ⭐⭐⭐</option>
                    <option onChange={e => handleChange(e)} value={4}>4 ⭐⭐⭐⭐</option>
                    <option onChange={e => handleChange(e)} value={5}>5 ⭐⭐⭐⭐⭐</option>
                </Select>
                <FormErrorMessage>{errors.score && (<p>{errors.score}</p>)}</FormErrorMessage>

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
                    disabled={input.errors}
                    mt={4}
                    colorScheme='teal'
                    onClick={(e) => handleSubmit(e)}
                > Submit </Button>
            </FormControl>
        </Card>

    )
}

export default PostReview;