import React from 'react';
import styled from 'styled-components';

const SearchInputBlock = styled.div`
    padding : 10px;
`


const InputSearch = styled.input`
    width : 70%;
    margin-right : 5px;
`

const SearchTool = ({changeText, clickBtn}) => {
    return (
        <SearchInputBlock>
            <InputSearch type="text" onChange={changeText}></InputSearch>
            <button onClick={clickBtn}>검색</button>
        </SearchInputBlock>
    );
}

export default SearchTool;
