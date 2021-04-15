import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import axios from 'axios'

//LOGIC
const AuthTest = () => {
    const getAccessToken = () => {
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
            <Header title={'이용기관 ACCESS Token'}></Header>
            <button onClick={clickBtn}>토큰발급</button>

        </>
    );
}

export default AuthTest;
