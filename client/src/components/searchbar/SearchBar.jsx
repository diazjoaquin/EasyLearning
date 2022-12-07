import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getCourseByName, loadingAction} from "../../redux/actions"
//import Lupa from "../../image/Lupa.png"
import searchbar from "../../image/searchbar.png"



export default function SearchBar() {

    // const dispatch = useDispatch();
    // const [name, setName] = useState("");


    // const handleInputChange = (e) => {
    //     setName(e.target.value);
    // };

    // const handleSubmit = () =>  {
    //     if (name) {
    //         dispatch(getCourseByName(name));
    //         setName("");
    //         dispatch(loadingAction(true));
    //         setTimeout(() => {
    //             dispatch(loadingAction(false));
    //         }, 3000);
    //     } else {
    //         alert("Debes escribir algo...");
    //     }
    // };



    return (
        <div>
            
            <img src={searchbar} alt="SearchBar"/>

        </div>
    //     <div>
    //         <input type="text" placeholder="Search..." onChange={handleInputChange} value={name} />
    //         <div>
    //             <img src={Lupa} alt="Search" onClick={(e) => handleSubmit(e)} />
    //         </div>


    //     </div>
    // )
    )
}