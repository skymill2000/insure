import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import SearchTool from '../component/SearchTool';
import SearchResult from '../component/SearchResult';
import axios from 'axios'

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

        const option = {
            method: 'get',
            url: 'https://newsapi.org/v2/everything',
            params: {
                'q': searchText,
                'from':'2021-04-13',
                'sortBy': 'publishedAt',
                'apiKey': 'a589daeaa7874c0da4467e386fc5e592'            
            }
        }

        axios.get(option)
        .then(function (response) {
            console.log(response.data.articles);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
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
