import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.div`
    padding : 20px;
    font-size : 15px;
    text-align : center;
    border : 1px solid #dfdfdf;

`

const Header = ({title}) => {
    return (
        <>
            <HeaderTitle>{title}</HeaderTitle>
        </>
    );
}

export default Header;
