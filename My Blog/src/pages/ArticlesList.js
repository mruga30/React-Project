import React from 'react';
import ArtList from '../components/ReuseArticleList.js'
import Articlecontent from '../pages/Articlecontent.js';

const ArticlesList = () => (
    <>
        <h1>Articles </h1>
        <ArtList articles={Articlecontent}/>
    </>
)

export default ArticlesList;