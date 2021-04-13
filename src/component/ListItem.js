import React, {useState} from 'react';
const ListItem = ({number, handleClick}) => {
    const insideClick = () =>{
        alert(number);
    }
    return (
        <>
            <div>{number}<button onClick={insideClick}>{number}클릭</button></div>
        </>
    );
}

export default ListItem;
