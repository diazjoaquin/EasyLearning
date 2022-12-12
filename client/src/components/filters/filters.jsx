import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filters, getAllCourses, getCategories } from "../../redux/actions";

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

    return(
        <div>
            <h4>Filters</h4>
            <h5>By Categories</h5>
            <div>
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
            <button onClick={handleClick}>Aplicar Filtros</button>

            <h4>OrderBy</h4>
        </div>
    )

}

export default Filters;