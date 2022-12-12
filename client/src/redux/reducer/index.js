import { GET_COURSE_BY_NAME, GET_ALL_COURSES, GET_CATEGORIES, GET_COURSE_DETAIL, CLEAR_DETAIL, ADD_TO_CART, BUY_NOW, FILTER_BY_CATEGORY, FILTER_BY_COST, FILTER_BY_PROFESSOR, ORDER_BY_NAME, ORDER_BY_RATING, CREATE_COURSE, DELETE_COURSE, ARCHIVE_COURSE } from "../actions"

const initialState = {
    courses: [],
    filter: [],
    courseDetail: [],
    categories: [],
    ranking: [],
    proffesors: [],
    cart: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COURSE_BY_NAME:
            return {
                ...state,
                courses: state.courses.filter((course) => course.name === action.payload)
            }
        case GET_ALL_COURSES:
            return {
                ...state,
                courses: action.payload,
                filter: action.payload,
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case GET_COURSE_DETAIL:
            return {
                ...state,
                courseDetail: action.payload
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                courseDetail: [],
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case BUY_NOW:
            return {
                ...state,
                cart: action.payload
            }
        case FILTER_BY_CATEGORY:
            let category = state.filter;
            let data = category.filter((course) => course.category === action.payload)
            return {
                ...state,
                courses: data
            }
        case FILTER_BY_COST:
            let cost = state.filter;
            return {
                ...state,
            }
        case FILTER_BY_PROFESSOR:
            let professor = state.filter;
            return {
                ...state,
            }
        case ORDER_BY_NAME:
            const byName = action.payload === 'A-Z' ? state.courses.sort((a,b) => {
                if(a.name > b.name) return 1
                if(a.name < b.name) return -1
                return 0
            }) : state.courses.sort((a,b) => {
                if(a.name < b.name) return 1
                if(a.name > b.name) return -1
                return 0
            });
            return {
                ...state,
                courses: byName
            }
        case ORDER_BY_RATING:
            const byRating = action.payload === 'min' ? state.courses.sort((a,b) => {
                return a.rating - b.rating
            }) : state.courses.sort((a,b) => {
                return b.rating - a.rating
            });
            return {
                ...state,
                courses: byRating
            }
        case CREATE_COURSE:
            return {
                ...state
            }
        case DELETE_COURSE:
            return {
                ...state,
            }
        case ARCHIVE_COURSE:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;