import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import SearchTool from '../component/SearchTool';
import SearchResult from '../component/SearchResult';
import axios from 'axios'

//LOGIC

const FlightInput = () => {

    const [departureLocation, setdepartureLocation] = useState('ICN-sky');
    const [destinationLoacation, setdestinationLoacation] = useState('JFK-sky');
    const [departureDate, setdepartureDate] = useState('2021-04-15');
    const [inboundDate, setinboundDate] = useState('2021-04-20');



    const clickBtn = () => {
        console.log('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/KRW/ko/'+
        departureLocation + '/' + destinationLoacation + '/2021-05-01')
    
        const options = {
            method: 'GET',
            url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/ko/KRW/ko/'+
            departureLocation + '/' + destinationLoacation + '/2021-09-01',
            params: {inboundpartialdate: '2021-12-01'},
            headers: {
              'x-rapidapi-key': '3306ecbfffmsha6126fa12e98531p13e362jsndf48fa6dfadb',
              'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });          
    }
    const inputChange = (e) =>{
       const {name, value} = e.target;
       if(name === 'departInput'){
          setdepartureLocation(value);
       }
       if(name === 'destiInput'){
          setdestinationLoacation(value);
       }

    }

    return (
        <>
            <Header title={'비행 데이터 입력'}></Header>
            출발지 : <input onChange={inputChange} value={departureLocation} name={'departInput'}></input> <br/>
            도착지 : <input onChange={inputChange} value={destinationLoacation} name={'destiInput'}></input> <br/>
            출발일 : <input></input> <br/>
            도착일 : <input></input> <br/>
            <button onClick={clickBtn}>test</button>
        </>

    );
}

export default FlightInput;
