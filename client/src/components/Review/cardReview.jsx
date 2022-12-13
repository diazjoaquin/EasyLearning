import React from 'react';
import Rating from "@mui/material";

const CardReview = ({ user, score, comments}) => {
    return (
        <div style={{}}>
            <div style={{marginLeft:'10px', display: 'inline-block', width: '20%'}}>
                <p>{user}</p>
            </div>
            <div style={{marginLeft:'30px', display: 'inline-block', flexDirection: 'column', width: '25%', flexWrap: 'wrap', textAlign: 'left', justifyContent: 'center' }}>
                <Rating name="read-only" value={score} readOnly />
            </div>
            <div style={{ marginLeft:'10px', display: 'inline-block',padding:'5px', wordWrap: 'break-word', width: '45%',  justifyContent: 'center', alignItems: 'center' }}>
                <p>{comments}</p>
            </div>
        </div>
    );
};

export default CardReview