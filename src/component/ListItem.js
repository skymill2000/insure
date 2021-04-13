import React, {useState} from 'react';
const ListItem = ({number, handleClick}) => {
    return (
        <>
            <div>{number}<button onClick={handleClick}>{number}클릭</button></div>
        </>
    );
}

export default ListItem;
