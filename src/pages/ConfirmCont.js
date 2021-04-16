import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import SearchTool from '../component/SearchTool';
import SearchResult from '../component/SearchResult';
import qs from 'query-string';
import axios from 'axios';

//LOGIC

const ConfirmCont = ({location}) => {
    useEffect(()=>{
        startScreen();
    },[])
        //시작하자마자 함수를 불러오고 싶을때


    let planId = qs.parse(location.search).planId;
    let ssnnum = sessionStorage.getItem('ssnnum');
    console.log(planId, ssnnum)
    const startScreen = () => {
        console.log('hello')
    }

    const changeText = (e) =>{
    }

    const clickBtn = () => {

    }

    return (
        <>
            <Header title={'뉴스검색'}></Header>

        </>
    );
}

export default ConfirmCont;
