import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { byName } from "../../redux/actions"
import style from "./SearchBar.module.css";
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'






export default function SearchBar() {

    const dispatch = useDispatch();
    const [name, setName] = useState("");


    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        if (name) {
            dispatch(byName(name));
            setName("");
        } else {
            alert("Please complete the search input");
        }
    };



    return (
        <div className={style.searchbar}>
            <input title="Please complete with the name of the course" type="text" placeholder="What do you whant to learn? " onChange={handleInputChange} value={name} />
            <div className={style.searchbutton}>               
                <IconButton
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<SearchIcon />}
                    title="Click to search"
                    onClick={(e)=> handleSubmit(e)}
                />
            </div>
        </div>
    )
}

