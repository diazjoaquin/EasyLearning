import React, { useEffect } from "react";
import { getCourseDetail } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './CourseDetail.module.css'
    
export default function Detail () {

    const dispatch = useDispatch();

    const {id} = useParams();

    const myCourse = useSelector(state => state.detail)

    useEffect(() => {
        dispatch(getCourseDetail(id));
    }, [dispatch, id])

// "category": "Bebe de benja", varias categorias? 
// "description": "The best course to learn how to create your first repository on GitHub.",
// "name": "El mejor curso de tu vida",
// "rating": "4.5",
// "students": [
// "German",
// "Bianca",
// "Fermin"
// ],
// "teacher": "Franco Cartucho",
// "video": [
// "https://www.youtube.com/watch?v=C6IjS7jKnjQ",
// "https://www.youtube.com/watch?v=vlCXdvcgiE0",
// "https://www.youtube.com/watch?v=DinilgacaWs"
// ]
  
    return(
        <div>
            <Link style= { {textDecoration: 'none'}} to = '/home'>
            <button className="back">Back</button>
            </Link>

            {
                myCourse.length > 0 ?
                <div>
                    <div>
                    <h1>{myCourse[0].name}</h1>
                    <h3>{myCourse[0].teacher}</h3>
                    <p>{myCourse[0].description}</p>
                    <div>
                    <h3>Video: </h3>
                    {
                        typeof myCourse[0].video !== "string" ? myCourse[0].video?.map((el) => el + ('  ')) :
                        myCourse[0].video
                    }
                    </div>
                    <div>
                    <h3>Category: </h3>
                    {  
                    
                    typeof myCourse[0].category !== "string" ? myCourse[0].category?.map((el) => el + ('  ')) :
                    myCourse[0].category
                    
                    }
                    </div>
                    </div>
                </div> : <p>Loading..</p>
            }
        </div>
    )
}