import axios from "axios";
import { useState } from "react";
import { FormControl, FormLabel, Input, Button, FormErrorMessage, Select, Card } from '@chakra-ui/react';

const CreateReviewPage = () => {
    const [form, setForm] = useState({
        userId: 1,
        score: null,
        title: "",
        comments: ""
    })
    const [errors, setErrors] = useState({});

    function validate(form) {
        let errors = {};

        if (!form.title) {
            errors.title = "Please add a title.";
        }
        if (!form.score) {
            errors.score = "Please add a score";
        }
        if (!form.comments) {
            errors.comments = "Please add your comments";
        }
        return errors
    }

    function handleChange(e) {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value

        }));
    }

    async function handleSubmit(e) {
        setForm({
            ...form,
            score: parseInt(form.score)
        })

        let alert = await axios.post("/createReviewPage", form);

        if(alert.data.msg === "error"){
            alert("Solo peudes crear una reseña")
        } else {
            alert("Reseña creada")
        }
    }

    return(
        <Card
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
                    value={form.title}
                    name="title"
                    onChange={(e) => handleChange(e)}
                />
                <FormErrorMessage> {errors.title && (<p>{errors.title}</p>)}</FormErrorMessage>

                <FormLabel>Add your comments: </FormLabel>
                <Input
                    type="text"
                    value={form.comments}
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

export default CreateReviewPage;