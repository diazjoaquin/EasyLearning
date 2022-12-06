import { GET_COURSE_BY_NAME } from "../actions"

const initialState = {
    course: [],

}

const rooRouter = (state = initialState, action) => {
    switch (action.type) {

        case GET_COURSE_BY_NAME:
            return {
                ...state,
                course: action.payload

            }
        default:
            return state;
    }
};

export default rooRouter;