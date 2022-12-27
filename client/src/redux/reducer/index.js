import {
  GET_COURSE_BY_NAME,
  GET_ALL_COURSES,
  GET_CATEGORIES,
  GET_COURSE_DETAIL,
  CLEAR_DETAIL,
  ADD_TO_CART,
  BUY_NOW,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  CREATE_COURSE,
  DELETE_COURSE,
  ARCHIVE_COURSE,
  DELETE_COURSE_FROM_CART,
  GET_REVIEWS,
  FILTERS,
  RESET_FILTERS,
  COURSES_BY_TEACHER,
  GET_ALL_USERS,
  GET_TEACHERS,
  GET_ORDERS, //add
} from "../actions";

const initialState = {
  courses: [],
  filter: [],
  courseDetail: {},
  categories: [],
  cart: [],
  allReviews: [],
  reviews: [],
  allUsers: [],
  allOrders: [], //add
  coursesCreateUser: [],
  teachers: [],
};

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
    case ADD_TO_CART:
      let addToCart = state.courses;
      let cart = addToCart.filter(
        (course) => course.idCourse === action.payload
      );
      return {
        ...state,
        cart: [...state.cart, cart],
      };
    case DELETE_COURSE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((course) => course.idCourse !== action.payload),
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
        reviews: action.payload,
        // allReviews: action.payload
      };
    // case POST_REVIEW:
    //   return {
    //     ...state,
    //   };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
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
