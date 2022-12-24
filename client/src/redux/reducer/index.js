import {
  GET_COURSE_BY_NAME,
  GET_ALL_COURSES,
  GET_CATEGORIES,
  GET_COURSE_DETAIL,
  CLEAR_DETAIL,
  BUY_NOW,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  CREATE_COURSE,
  DELETE_COURSE,
  ARCHIVE_COURSE,
  GET_REVIEWS,
  FILTERS,
  RESET_FILTERS,
  COURSES_BY_TEACHER,
  GET_ALL_USERS,
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_TEACHERS,
  GET_ORDERS, //add
} from "../actions";

const initialState = {
  courses: [],
  filter: [],
  courseDetail: {},
  categories: [],
  allReviews: [],
  reviews: [],
  allUsers: [],
  cart: [],
  allOrders: [], //add
  coursesCreateUser: [],
  teachers: [],
};

if(localStorage.getItem("cart")){
  initialState.cart =  JSON.parse(localStorage.getItem("cart"));
} else {
  initialState.cart = [];
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_BY_NAME:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_ALL_COURSES:
      return {
        ...state,
        courses: action.payload,
        filter: action.payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload,
      };
    case GET_COURSE_DETAIL:
      return {
        ...state,
        courseDetail: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        courseDetail: [],
      };

    case BUY_NOW:
      let buyNow = state.courses;
      let buy = buyNow.filter((course) => course.idCourse === action.payload);
      return {
        ...state,
        cart: buy,
      };

    case FILTERS:
      let filtros = state.filter;
      if (action.payload.category) {
        filtros = filtros.filter((e) =>
          e.categories.includes(action.payload.category)
        );
      }
      if (action.payload.price) {
        action.payload.price === "uno"
          ? (filtros = filtros.filter((e) => e.price <= 25))
          : action.payload.price === "dos"
          ? (filtros = filtros.filter((e) => e.price > 25 && e.price <= 50))
          : (filtros = filtros.filter((e) => e.price > 50));
      }
      if (action.payload.teacher) {
        filtros = filtros.filter((e) => action.payload.teacher === e.teacher);
      }
      return {
        ...state,
        courses: filtros,
      };

    case ORDER_BY_NAME:
      const byName =
        action.payload === "A-Z"
          ? state.courses.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : action.payload === "Z-A"
          ? state.courses.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
            })
          : [...state.courses];
      return {
        ...state,
        courses: byName,
      };
    case ORDER_BY_RATING:
      const byRating =
        action.payload === "min"
          ? state.courses.sort((a, b) => a.rating - b.rating)
          : action.payload === "max"
          ? state.courses.sort((a, b) => b.rating - a.rating)
          : [...state.courses];
      return {
        ...state,
        courses: byRating,
      };
    case RESET_FILTERS:
      return {
        ...state,
        courses: state.filter,
      };
    case CREATE_COURSE:
      return {
        ...state,
      };
    case DELETE_COURSE:
      return {
        ...state,
      };
    case ARCHIVE_COURSE:
      return {
        ...state,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload
      };
    case ADD_TO_CART:
			return {
        ...state,
				cart: action.payload
			};
		case DELETE_FROM_CART:
			return {
        ...state,
				cart: [...action.payload]
			};
    case GET_ORDERS: //add
      return {
        ...state,
        allOrders: action.payload,
      };
    case COURSES_BY_TEACHER:
      return {
        ...state,
        coursesCreateUser: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
