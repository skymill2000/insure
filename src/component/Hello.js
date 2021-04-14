import React, {useState} from 'react';
import axios from 'axios'

const Hello = () => {
    let myName = "hello gwanwoo"
    let [myNameWithState, setmyNameWithState] = useState('유관우');
    let [myNameWithState2, setmyNameWithState2] = useState('유관우');
    const [news, setNews] = useState([]);
    const nameChange = () => {
        console.log("이름이 바뀝니다.")
        // myNameWithState = "유장비"
        //직접 할당시 데이터가 바뀌지 않음
        setmyNameWithState('유장비');
    }
    const getNewApi = () =>{
        axios.get('https://newsapi.org/v2/everything?q=intel&from=2021-04-13&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5')
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

    const handleTextChange = (e) =>{
        const {value, name} = e.target;
        setmyNameWithState(value);
    }

    return (
        <>
            <div style={{color : 'red'}}>Hello world in compoenet</div>
            <div>{myNameWithState}</div>
            <button onClick={getNewApi}>이름을 변경합니다.</button>
            <br></br>
            <input type="text" onChange={handleTextChange}></input>
            {news.map((n) => {
                return (<><p>{n.title}</p></>)
            })}
        </>
    );
}

export default Hello;
