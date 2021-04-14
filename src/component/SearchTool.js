import React from 'react';
import styled from 'styled-components';

const SearchTool = ({changeText, clickBtn}) => {
    return (
        <>
            <input type="text" onChange={changeText}></input>
            <button onClick={clickBtn}>검색</button>
        </>
    );
}

export default SearchTool;
