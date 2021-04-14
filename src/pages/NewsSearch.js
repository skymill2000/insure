import React from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import SearchTool from '../component/SearchTool';

const NewsSearch = () => {
    return (
        <>
            <Header title={'뉴스검색'}></Header>
            <SearchTool></SearchTool>
            <SearchResult></SearchResult>
        </>
    );
}

export default NewsSearch;
