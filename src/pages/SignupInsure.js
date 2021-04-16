import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import SearchTool from '../component/SearchTool';
import SearchResult from '../component/SearchResult';
import axios from 'axios'

//LOGIC

const SignupInsure = () => {

    const clickBtn = () => {
 
    }
    const inputChange = (e) =>{
       const {name, value} = e.target;
    }

    return (
        <>
            <Header title={'보험 가입 데이터 입력'}></Header>
        </>

    );
}

export default SignupInsure;
