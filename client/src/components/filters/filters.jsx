import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filters, getAllCourses, getCategories, orderByName, orderByRating, resetFilters } from "../../redux/actions";
import style from './Filters.module.css';
import { Button } from "@chakra-ui/button";

const Filters = ({update, setUpdate}) => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);  
    const courses = useSelector(state => state.courses); 
    const [filterValue, setFilterValue] = useState({
        category: null,
        teacher: null,
        price: null
    });

    useEffect(() => {
        if(!categories.length){
           dispatch(getCategories()) 
        }
        if(!courses){
            dispatch(getAllCourses())
        }
    },[dispatch, categories, courses])

    function handleChange(e) {
        setFilterValue({
            ...filterValue,
            [e.target.name]: e.target.value,
        })
    }

    function handleClick(e){
        dispatch(filters(filterValue));
        setUpdate(!update);
        console.log("filter", filterValue)
    }

    function handleSort(e){
        dispatch(orderByName(e.target.value))
        setUpdate(!update);
    }

    function handleRating(e){
        dispatch(orderByRating(e.target.value))
        setUpdate(!update);
    }

    function handleReset(e){
        dispatch(resetFilters());
    }

    return(
        <div className={style.cont}>
            <div className={style.filters}>
                <h4>Filters:</h4>
                <h5>By Categories</h5>
                <div className={style.categories}>
                <select name="category" onChange={handleChange}>
                            <option value="Categories">Categories</option>
                            {
                                categories?.map(e => {
                                    return(
                                        <option value={e.name}>{e.name}</option>
                                    )
                                })
                            }
                    </select>
                </div>
                <h5>By Price</h5>
                <div>
                    <select name="price" onChange={handleChange}>
                        <option value="prices">P</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="500">500</option>
                    </select>
                </div>
                {/* <h5>By Teachers</h5>*/}
                {/* <div>
                    <section name="teacher" onChange={handleChange}>
                        {

                        }
                    </section>
                </div> */} 
                {/* <button onClick={handleClick}>Aplicar Filtros</button> */}
                <Button colorScheme='teal' variant='link'
                onClick={handleClick}>
                    Aplicar Filtros
                </Button>
                <Button colorScheme='teal' variant='link'
                onClick={handleReset}>Reset filters</Button>
            </div>


            <div className={style.order}>
            <h4>Order By:</h4>
                        <div>
                            <select name="Sort" onChange={handleSort}>
                                <option value="sort">Alphabet</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                            </select>
                            <select name="Rating" onChange={handleRating}>
                                <option value="rating">Rating</option>
                                <option value="min">Minor-Major</option>
                                <option value="max">Major-Minor</option>
                            </select>
                        </div>
            </div>
        </div>
    )

}

export default Filters;