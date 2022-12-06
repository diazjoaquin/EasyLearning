import React from "react";
import Navbar from '../navbar/Navbar';
import style from "./Home.module.css"
import SearchBar from "../searchbar/SearchBar.jsx";
import Carousel from "../carousel/Carousel";


export default function Home() {

    return (
        //navbar
        <div>
            <div className={style.bg}>
                <Navbar>
                </Navbar>
            </div>
            <div>
                <span calssName={style.span1}>
                    START TO SUCCESS
                </span>
                <span className={style.span2}> Acceso To 5000+ Courses from
                    300 Instructor & Institutions
                </span>
                <span>
                    Varius version have envolved over the years, sometimes by accident, 
                </span>
                <SearchBar>
                </SearchBar>
            </div>
            <div title="carousel">
                <Carousel>

                </Carousel>

            </div>
            <br />
        </div>



        //Texto pincipal 


    );

}