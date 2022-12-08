import axios from "axios";
export const GET_ALL_COURSES = "GET_ALL_COURSES";
export const GET_COURSE_BY_NAME = "GET_COURSE_BY_NAME";
export const GET_COURSE_DETAIL = "GET_COURSE_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const ADD_TO_CART = "ADD_TO_CART";
export const BUY_NOW = "BUY_NOW";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_COST = "FILTER_BY_COST";
export const FILTER_BY_PROFESSOR = "FILTER_BY_PROFESSOR";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const CREATE_COURSE = "CREATE_COURSE";
export const DELETE_COURSE = "DELETE_COURSE";
export const ARCHIVE_COURSE = "ARCHIVE_COURSE";

export const getAllCourses = () => async dispatch => {
    try {
        const all = await axios.get("/getAllCourses");
        return dispatch({
            type: GET_ALL_COURSES,
            payload: all.data
        });
    } catch (error) {
        
    }
}

export const byName = (name) => async dispatch => {
    try {
        const name = await axios.get(`/getByName?name=${name}`);
        return dispatch({
            type: GET_COURSE_BY_NAME,
            payload: name.data
        });
    } catch (error) {
        
    }
}

export const getCourseDetail = (id) => async dispatch => {
    try {
        const detail = await axios.get(`/getDetail/${id}`);
        return dispatch({
            type: GET_COURSE_DETAIL,
            payload: detail.data
        });
    } catch (error) {
        
    }
}

export const clearDetail = () => async dispatch => {
    try {
        return dispatch({
            type: CLEAR_DETAIL
        });
    } catch (error) {
        
    }
}

export const getCategories = () => async dispatch => {
    try {
        const categories = await axios.get('/categories');
        return dispatch({
            type: GET_CATEGORIES,
            payload: categories.data
        });
    } catch (error) {
        
    }
}

export const addToCart = (payload) => async dispatch => {
    try {
        return dispatch({
            type: ADD_TO_CART,
            payload
        });
    } catch (error) {
        
    }
}

export const buyNow = () => async dispatch => {
    try {
        return dispatch({
            type: BUY_NOW
        });
    } catch (error) {

    }
}

export const filterByCat = (payload) => async dispatch => {
    try {
        return dispatch({
            type: FILTER_BY_CATEGORY,
            payload
        });
    } catch (error) {
        
    }
}

export const filterByCost = (payload) => async dispatch => {
    try {
        return dispatch({
            type: FILTER_BY_COST,
            payload
        });
    } catch (error) {
        
    }
}

export const filterByProfessor = (payload) => async dispatch => {
    try {
        return dispatch({
            type: FILTER_BY_PROFESSOR,
            payload
        });
    } catch (error) {
        
    }
}

export const orderByName = (payload) => async dispatch => {
    try {
        return dispatch({
            type: ORDER_BY_NAME
        });
    } catch (error) {
        
    }
}

export const orderByRating = (payload) => async dispatch => {
    try {
        return dispatch({
            type: ORDER_BY_RATING
        });
    } catch (error) {
        
    }
}

export const createCourse = (form) => async dispatch => {
    try {
        const data = await axios.post('/', form);
        return dispatch({
            type: CREATE_COURSE,
            payload: data
        });
    } catch (error) {
        
    }
}

export const deleteCourse = (id) => async dispatch => {
    try {
        await axios.delete('/');
        return dispatch({
            type: DELETE_COURSE
        });
    } catch (error) {
        
    }
}

export const archiveCourse = () => dispatch => {
    try {
        return dispatch({
            type: ARCHIVE_COURSE
        });
    } catch (error) {
        
    }
}