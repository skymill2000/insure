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
            method: 'post',
            url: 'https://dev-gateway.dbins.co.kr:8903/v1.0/cert/oauth2.0/clientCredential',
            headers: {
                'appKey': 'l7xxe840074288574eeabb346f15f7a3d6af', 
                'appSecret': 'f8449d6220b54dddb892a262409c3e07', 
                'Content-Type': 'application/json; charset=utf-8'
            }
        }

        axios(option)
        .then(function (response) {
            console.log(response.data);
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
            <button onClick={getAccessToken}>토큰발급</button>

        </>
    );
}

export default AuthTest;
