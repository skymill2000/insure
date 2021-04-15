import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import axios from 'axios'
import cryptoMy from '../lib/apiCrypto'
//LOGIC
const AuthTest = () => {
    const getAccessToken = () => {
        //axios api 요청 만들기
        //CONSOLE.LOG 요청에 대한 결과 출력하기
        const option = {
            method: 'post',
            url: '/v1.0/cert/oauth2.0/clientCredential',
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

    const getMaster = () =>{
        const option = {
            method: 'post',
            url: '',
            headers: {
                'Authorization' : 'Bearer ' + AccessToken,
                'timestamp' : '20210218190839',
                'ci' : 'E4PIs45uiscs8quYnySoQXuZKwjB66mE3Wqvw9gRuWOqMON3FiLQt+U4ZV42Y1+prQWpFWWnbKomShR+O5dHlg==',
                'appKey': 'l7xxe840074288574eeabb346f15f7a3d6af', 
                'appSecret': 'f8449d6220b54dddb892a262409c3e07', 
                'Content-Type': 'application/json; charset=utf-8',
                'hsKey' : cryptoMy.hsKey(dataBody)
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
            <button onClick={getAccessToken}>마스터 증권</button>
        </>
    );
}

export default AuthTest;
