import React, { useEffect } from "react";
import { getCourseDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './CourseDetail.module.css'

export default function Detail() {

  const dispatch = useDispatch();

  const { id } = useParams();

  const myCourse = useSelector(state => state.courseDetail)
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

  return (
    <div>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <button className="back">Back</button>
      </Link>

      {
        myCourse ?
          <div>
            <div>
              <br />
              <h1>{`Nombre del curso: ${myCourse?.name}`}</h1>
              <br />
              <h3>Teacher:{myCourse?.teacher}</h3>
              <br />
              <p>Descripcion:{myCourse?.description}</p>
              <br />
              <div>
                <Link to={`/detail/${id}/videos`}>
                  <button>Ver todos los videos de este curso</button>
                </Link>
              </div>
              <br />
              <div>
                <h3>Category: </h3>
                {myCourse.categories?.map((e, i) => <h1 key={i}>{e.name}</h1>)}
              </div>
            </div>
          </div>
          : <p>Loading..</p>
      }
    </div >
  )
}