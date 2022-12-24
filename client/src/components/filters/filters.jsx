import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filters, getAllCourses, getCategories, getTeachers, orderByName, orderByRating, resetFilters } from "../../redux/actions";
import style from './Filters.module.css';
import { Button } from "@chakra-ui/button";

const Filters = ({ update, setUpdate }) => {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const courses = useSelector(state => state.courses);
  const teachers = useSelector(state => state.teachers);
  const [filterValue, setFilterValue] = useState({
    category: null,
    teacher: null,
    price: null
  });

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories())
    }
    if (!courses) {
      dispatch(getAllCourses())
    }
    if (!teachers.length) {
      dispatch(getTeachers())
    }
    dispatch(filters(filterValue));
  }, [dispatch, filterValue])

  function handleChange(e) {
    if (e.target.value === "Categories") {
      setFilterValue({
        ...filterValue,
        category: null,
      })
    } else if (e.target.value === "Prices") {
      setFilterValue({
        ...filterValue,
        price: null,
      })
    } else if (e.target.value === "Select teacher") {
      setFilterValue({
        ...filterValue,
        teacher: null,
      })
    } else {
      setFilterValue({
        ...filterValue,
        [e.target.name]: e.target.value,
      })
    }
  }

  function handleSort(e) {
    dispatch(orderByName(e.target.value))
    setUpdate(!update);
  }

  function handleRating(e) {
    dispatch(orderByRating(e.target.value))
    setUpdate(!update);
  }


  function handleReset(e) {
    dispatch(resetFilters());
    document.getElementById("1").selected = "selected"
    document.getElementById("2").selected = "selected"
    document.getElementById("3").selected = "selected"
  }

  return (
    <div className={style.cont}>
      <div className={style.filters}>
        <h4>Filters:</h4>
        <h5>By Categories</h5>
        <div className={style.categories}>
          <select name="category" onChange={handleChange}>
            <option id="1">Categories</option>
            {
              categories?.map((e, i) => {
                return (
                  <option key={`A${i}`} value={e}>{e}</option>
                )
              })
            }
          </select>
        </div>
        <h5>By Price</h5>
        <div>
          <select name="price" onChange={handleChange}>
            <option id="2">Prices</option>
            <option value="uno">0-25</option>
            <option value="dos">26-50</option>
            <option value="tres">+50</option>
          </select>
        </div>
        <h5>By Teachers</h5>
        <div>
          <select name="teacher" onChange={handleChange}>
            <option id="3">Select teacher</option>
            {
              teachers?.map((e, i) => {
                return (
                  <option key={`B${i}`} value={e}>{e}</option>
                )
              })
            }
          </select>
        </div>
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