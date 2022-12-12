import { useState } from "react";
import axios from "axios";
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
//CAMBIAR NOMBRE DE COMPONENTE POR FORMCOMMENTS
const Comments = ({ videoId, comments }) => {

  const [comment, setComment] = useState({
    videoId,
    userId: null,
    title: "",
    description: "",
  })

  const handleChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value
    });
    console.log(comment);
  }

  const handleSubmit = async (e) => {
    //e.preventDefault() //hay que cambiar esto por un estado local, para que se actualice solamente los comentarios cada vez que alguien comenta.
    await axios.post("http://localhost:3001/createCommentVideo", comment);
    console.log("llega al handlesubmit");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>Crear comentario:</label>
        <br />
        <label>userId: </label>
        <input type="number" name="userId" onChange={handleChange} />
        <br />
        <label>Title: </label>
        <input type="text" name="title" onChange={handleChange} />
        <br />
        <label>Description: </label>
        <input type="text" name="description" onChange={handleChange} />
        <br />
        <button type="submit">Comentar</button>

      </form>
      {
        comments?.map((el, i) => {
          return (
            <div key={i}>
              {/* <p>nombre del user</p> */}
              <p>{el.title}</p>
              <p>{el.description}</p>
            </div>
          )
        })
      }
      <br />
    </div>
  )
}

export default Comments;