import React from 'react';
import styled from 'styled-components';

const SearchResultBlock = styled.div`
    padding : 5px;
    border: 1px solid #dfdfdf;
`

const ArticleTitle = styled.div`
    font-weight : bold;
`


const SearchResult = ({title, description, author, articleUrl}) => {
    return (
        <SearchResultBlock>
            <ArticleTitle>{title}</ArticleTitle>
            <p>{description}</p>
            <p>{author}</p>
            <a href={articleUrl}>{articleUrl}</a>
        </SearchResultBlock>
    );
}

export default SearchResult;
