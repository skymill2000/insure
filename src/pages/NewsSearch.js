import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import SearchTool from '../component/SearchTool';
import SearchResult from '../component/SearchResult';
import axios from 'axios'

//LOGIC

const NewsSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [news, setNews] = useState([]);

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
                'apiKey': 'c97361fe1fb44aad85885cc1a63de7fe'            
            }
        }

        axios(option)
        .then(function (response) {
            console.log(response.data.articles);
            setNews(response.data.articles);
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
            {/* array.map */}
            {news.map((n) => {
                return (
                <SearchResult 
                    title={n.title} 
                    description={n.description} 
                    author={n.author} 
                    articleUrl={n.url}>
                    </SearchResult>
                    )
            })}


        </>
    );
}

export default NewsSearch;
