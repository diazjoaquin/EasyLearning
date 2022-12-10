import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByCat, getCategories } from "../../redux/actions";

const Filter = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);    

    useEffect(() => {
        if(!categories.length)
        dispatch(getCategories())
    },[dispatch, categories])

    function handleChange(e) {
        dispatch(filterByCat(e.target.value))
    }

    return(
        <div>
            <h4>Filters</h4>
            <div>
               <select onChange={handleChange}>
                        {
                            categories?.map(e => {
                                return(
                                    <option value={e}>{e}</option>
                                )
                            })
                        }
                </select>
            </div>
            <h4>OrderBy</h4>
        </div>
    )

}

export default Filter;