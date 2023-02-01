import axios from "axios";
import { toast } from "react-toastify";
// courses
export const GET_ALL_COURSES = "GET_ALL_COURSES";
export const GET_COURSE_BY_NAME = "GET_COURSE_BY_NAME";
export const GET_COURSE_DETAIL = "GET_COURSE_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const COURSES_BY_TEACHER = "COURSES_BY_TEACHER";
export const COURSES_BY_STUDENT = "COURSES_BY_STUDENT";
export const GET_TEACHERS = "GET_TEACHERS";

// filtering & ordering:
export const FILTERS = "FILTERS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const RESET_FILTERS = "RESET_FILTERS";

// create & mannage course:
export const CREATE_COURSE = "CREATE_COURSE";
export const DELETE_COURSE = "DELETE_COURSE";
export const ARCHIVE_COURSE = "ARCHIVE_COURSE";
export const GET_REVIEWS = "GET_REVIEWS";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const GET_VIDEOS = "GET_VIDEOS";
export const CREATE_VIDEO = "CREATE_VIDEO";
export const DELETE_VIDEO = "DELETE_VIDEO";

//users
export const GET_ALL_USERS = "GET_ALL_USERS";

//carrito
export const BUY_NOW = "BUY_NOW";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const TOTAL_CART = "TOTAL_CART";
export const GET_ORDERS = "GET_ORDERS";
export const CLEAN_CART = "CLEAN_CART";

//Review
export const GET_SCORES = "GET_SCORES";
export const GET_DATE = "GET_DATE";

export const getAllCourses = () => async (dispatch) => {
  try {
    const all = await axios.get("/courses");
    return dispatch({
      type: GET_ALL_COURSES,
      payload: all.data,
    });
  } catch (error) {}
};

export const byName = (name) => async (dispatch) => {
  try {
    const byName = await axios.get(`/courses?name=${name}`);
    return dispatch({
      type: GET_COURSE_BY_NAME,
      payload: byName.data,
    });
  } catch (error) {}
};

export const getCourseDetail = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`/courses/${id}`);
    return dispatch({
      type: GET_COURSE_DETAIL,
      payload: detail.data,
    });
  } catch (error) {}
};

export const clearDetail = () => async (dispatch) => {
  try {
    return dispatch({
      type: CLEAR_DETAIL,
    });
  } catch (error) {}
};

export const getCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get("/categories");
    return dispatch({
      type: GET_CATEGORIES,
      payload: categories.data,
    });
  } catch (error) {}
};

export const getTeachers = () => async (dispatch) => {
  try {
    const teachers = await axios.get("/teachers");
    return dispatch({
      type: GET_TEACHERS,
      payload: teachers.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const buyNow = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: BUY_NOW,
      payload,
    });
  } catch (error) {}
};

export const getOrders = (userId) => async (dispatch) => {
  const orders = await axios.get(`/orders/${userId}`);
  try {
    return dispatch({
      type: GET_ORDERS,
      payload: orders.data,
    });
  } catch (error) {}
};

export const filters = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: FILTERS,
      payload,
    });
  } catch (error) {
    console.log(error);
  }
};

export const resetFilters = () => async (dispatch) => {
  try {
    return dispatch({
      type: RESET_FILTERS,
    });
  } catch (error) {
    console.log(error);
  }
};

export const orderByName = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: ORDER_BY_NAME,
      payload,
    });
  } catch (error) {}
};

export const orderByRating = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: ORDER_BY_RATING,
      payload,
    });
  } catch (error) {}
};

export const createCourse = (form) => async (dispatch) => {
  try {
    const data = await axios.post("/courses", form);
    return dispatch({
      type: CREATE_COURSE,
      payload: data,
    });
  } catch (error) {}
};

export const archiveCourse = () => (dispatch) => {
  try {
    return dispatch({
      type: ARCHIVE_COURSE,
    });
  } catch (error) {}
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    await axios.delete("/courses");
    return dispatch({
      type: DELETE_COURSE,
    });
  } catch (error) {}
};

export const getReviews = (id) => {
  return async function (dispatch) {
    try {
      var reviews = await axios.get("/reviews/" + id);
      return dispatch({
        type: GET_REVIEWS,
        payload: reviews.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllCoursesByTeacher = (userId) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/courses/teacher/${userId}`);
      return dispatch({
        type: COURSES_BY_TEACHER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCoursesByStudent = (userId) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/courses/student/${userId}`);
      return dispatch({
        type: COURSES_BY_STUDENT,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllUsers = () => {
  return async function (dispatch) {
    var json = await axios.get("/users");
    return dispatch({
      type: GET_ALL_USERS,
      payload: json.data,
    });
  };
};

export const addToCart = (data) => async (dispatch) => {
  // if cart already exists in local storage, use it, otherwise set to empty array
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  // check if duplicates
  const duplicates = cart.filter((cartItem) => cartItem.id === data.id);

  // if no duplicates, proceed
  if (duplicates.length === 0) {
    // prep product data
    const courseToAdd = {
      ...data,
      // count: 1,
    };

    // add product data to cart
    cart.push(courseToAdd);
    toast.success("Course added to cart", {
      position: "bottom-left",
    });

    // add cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // add cart to redux
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  } else {
    toast.error("Course already in cart", {
      position: "bottom-left",
    });
  }
};

export const deleteFromCart = (product) => async (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const updatedCart = cart.filter((cartItem) => cartItem.id !== product.id);

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  dispatch({
    type: DELETE_FROM_CART,
    payload: updatedCart,
  });
};

export const getScores = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: GET_SCORES,
      payload,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDate = (payload) => async (dispatch) => {
  try {
    return dispatch({
      type: GET_DATE,
      payload,
    });
  } catch (error) {
    console.log(error);
  }
};

export const cleanCart = () => async (dispatch) => {
  try {
    localStorage.setItem("cart", JSON.stringify([]));
    return dispatch({
      type: CLEAN_CART,
      payload: null,
    });
  } catch (error) {
    console.log(error);
  }
};
