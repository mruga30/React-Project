import React from 'react';
import Articlecontent from './Articlecontent.js';
import ArtList from '../components/ReuseArticleList.js';

const Articlepage = ({match}) => {
    const name = match.params.name;
    const article = Articlecontent.find(article=>article.name===name);
    const Otherarticles = Articlecontent.filter(article=>article.name!==name);

    return(
    <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph,key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <hr/>
        <h3>Other Articles:</h3>
        <ArtList articles={Otherarticles} />
    </>
    );
}

export default Articlepage;