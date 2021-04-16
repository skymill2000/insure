import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import SearchTool from '../component/SearchTool';
import SearchResult from '../component/SearchResult';
import axios from 'axios'

//LOGIC

const SignupInsure = () => {
    const [username, setusername] = useState(undefined);
    const [ssnnum, setssnnum] = useState(undefined);
    const [phonenum, setphonenum] = useState(undefined);
    const [isHealth, setisHealth] = useState(undefined);
    const [q1, setq1] = useState(undefined);

    const clickBtn = () => {
 
    }
    const inputChange = (e) =>{
       const {name, value} = e.target;
       if(name === 'username'){
        setusername(value);
       }
       if(name === 'ssnnum'){
        setssnnum(value);
       }
       if(name === 'phonenum'){
        setphonenum(value);
       }
       if(name === 'isHealth'){
        setisHealth(value);
         }
        if(name === 'q1'){
            setq1(value);
        }

    }

    return (
        <>
            <Header title={'보험 가입 데이터 입력'}></Header>
            <p>성명</p> <input onChange={inputChange} value={username} name={'username'}></input> <br/>
            <p>주민등록번호</p>  <input onChange={inputChange} value={ssnnum} name={'ssnnum'}></input> <br/>
            <p>핸드폰</p>  <input onChange={inputChange} value={phonenum} name={'phonenum'}></input> <br/>
            <p>건강보험</p> <input onChange={inputChange} value={isHealth} name={'isHealth'}></input> <br/>
            <p>취미관련 자격증이 있습니까?</p> <input onChange={inputChange} value={q1} name={'q1'}></input>
        </>

    );
}

export default SignupInsure;
