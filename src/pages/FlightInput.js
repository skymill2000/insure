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
    const [plan, setPlan] = useState(undefined);




    const clickBtn = () => {
        console.log('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/KRW/ko/'+
        departureLocation + '/' + destinationLoacation + '/2021-05-01')
    
        const options = {
            method: 'GET',
            url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/ko/KRW/ko/'+
            departureLocation + '/' + destinationLoacation + '/' + departureDate,
            params: {inboundpartialdate: inboundDate},
            headers: {
              'x-rapidapi-key': '3306ecbfffmsha6126fa12e98531p13e362jsndf48fa6dfadb',
              'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setPlan(response.data);
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
       if(name === 'departDate'){
          setdepartureDate(value);
         }
        if(name === 'inboundDate'){
            setinboundDate(value);
        }

    }

    return (
        <>
            <Header title={'?????? ????????? ??????'}></Header>
            ????????? : <input onChange={inputChange} value={departureLocation} name={'departInput'}></input> <br/>
            ????????? : <input onChange={inputChange} value={destinationLoacation} name={'destiInput'}></input> <br/>
            ????????? : <input onChange={inputChange} value={departureDate} name={'departDate'}></input> <br/>
            ????????? : <input onChange={inputChange} value={inboundDate} name={'inboundDate'}></input> <br/>
            <button onClick={clickBtn}>test</button>
            <select>
                <option value="JFK-sky">JFK</option>
                <option value="ICN-sky">ICN</option>
                <option value="JFK-sky">JFK</option>
                <option value="JFK-sky">JFK</option>
            </select>
            {plan !== undefined &&
                <>
                    <p>????????? : {plan.Places[0].CityName}</p>
                    <p>????????? : {plan.Places[1].CityName}</p>
                    <p>????????? : {plan.Carriers[0].Name}</p>
                    <p>???????????? : {plan.Quotes[0].QuoteDateTime}</p>
                    <p>????????? : {plan.Quotes[0].MinPrice}???</p>
                </>
            }
            <button onClick={() => window.location.href = "/singupInsure"}> ???????????? </button>
        </>

    );
}

export default FlightInput;
