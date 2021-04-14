import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    font-size : 50px;
    text-align: center;
    background: #1C6EA4;
    background: -moz-linear-gradient(top, #1C6EA4 0%, #2388CB 50%, #144E75 100%);
    background: -webkit-linear-gradient(top, #1C6EA4 0%, #2388CB 50%, #144E75 100%);
    background: linear-gradient(to bottom, #1C6EA4 0%, #2388CB 50%, #144E75 100%);
`

const StyledComponentTest = ({number, handleClick}) => {
    return (
        <>
            <Title>HELLO</Title>
        </>
    );
}

export default StyledComponentTest;
