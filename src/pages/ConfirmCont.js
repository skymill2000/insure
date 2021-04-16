import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import SearchTool from '../component/SearchTool';
import SearchResult from '../component/SearchResult';
import qs from 'query-string';
import axios from 'axios';

//LOGIC

const ConfirmCont = ({location}) => {

    let planId = qs.parse(location.search).planId;
    console.log(planId)
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
