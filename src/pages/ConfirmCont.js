import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import SearchTool from '../component/SearchTool';
import SearchResult from '../component/SearchResult';
import qs from 'query-string';
import axios from 'axios';
import cryptoMy from '../lib/apiCrypto';

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
        const databody = {
            "dataHeader":
            {
                "z_user_id":"10786830"
            }, 
            "dataBody":
            {
                "inpt_plan_no": planId
            }
        }
        
        const option = {
            method: 'post',
            url: '/v1.0/GNI/trip_overseas/inj/wound/design/detail',
            data : JSON.stringify(databody),
            headers: {
                'Authorization' : 'Bearer ' + sessionStorage.getItem('userToken'),
                'timestamp' : '20210218190839',
                'ci' : 'E4PIs45uiscs8quYnySoQXuZKwjB66mE3Wqvw9gRuWOqMON3FiLQt+U4ZV42Y1+prQWpFWWnbKomShR+O5dHlg==',
                'appKey': 'l7xxe840074288574eeabb346f15f7a3d6af', 
                'appSecret': 'f8449d6220b54dddb892a262409c3e07', 
                'Content-Type': 'application/json; charset=utf-8',
                'hsKey' : cryptoMy.hsKey(JSON.stringify(databody))
            }
        }
        axios(option).then((res) =>{
            console.log(res.data);

        })

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
