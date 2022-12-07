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
export const ORDER_BY_RANKING = "ORDER_BY_RANKING";
export const CREATE_COURSE = "CREATE_COURSE";
export const DELETE_COURSE = "DELETE_COURSE";

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
        })
    } catch (error) {
        
    }
}

export const getCategories = () => async dispatch => {
    try {
        const categories = await axios.get('/categories')
    } catch (error) {
        
    }
}

export const addToCart = () => async dispatch => {
    
}

export const buyNow = () => async dispatch => {
    
}

export const filterByCat = (payload) => async dispatch => {
    try {
        return dispatch({
            type: FILTER_BY_CATEGORY,
            payload
        })
    } catch (error) {
        
    }
}

export const filterByCost = (payload) => async dispatch => {
    try {
        return dispatch({
            type: FILTER_BY_COST,
            payload
        })
    } catch (error) {
        
    }
}

export const filterByProfessor = (payload) => async dispatch => {
    try {
        return dispatch({
            type: FILTER_BY_PROFESSOR,
            payload
        })
    } catch (error) {
        
    }
}

export const orderByName = (payload) => async dispatch => {
    
}

export const orderByRanking = (payload) => async dispatch => {
    
}

export const createCourse = (form) => async dispatch => {
    
}

export const deleteCourse = (id) => async dispatch => {
    
}




// export function loadingAction(payload) {
//     return (dispatch) => {
//         dispatch({
//             type: LOADING,
//             payload
//         })
//     }
// }