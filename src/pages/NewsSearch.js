import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import SearchTool from '../component/SearchTool';
import SearchResult from '../component/SearchResult';

//LOGIC

const NewsSearch = () => {
    const [searchText, setSearchText] = useState('');
    const changeText = (e) =>{
        const {value, name} = e.target;
        console.log(value);
        setSearchText(value);
    }

    const clickBtn = () => {
        console.log(searchText)
        //axios api 요청 만들기
        //CONSOLE.LOG 요청에 대한 결과 출력하기
    }

    return (
        <>
            <Header title={'뉴스검색'}></Header>
            <SearchTool changeText={changeText} clickBtn={clickBtn}></SearchTool>
            <SearchResult></SearchResult>
        </>
    );
}

export default NewsSearch;
