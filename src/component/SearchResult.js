import React from 'react';
import styled from 'styled-components';

const SearchResult = ({title, description, author, articleUrl}) => {
    return (
        <>
            <p>{title}</p>
            <p>{description}</p>
            <p>{author}</p>
            <p>{articleUrl}</p>
        </>
    );
}

export default SearchResult;
