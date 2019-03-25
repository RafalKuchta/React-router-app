import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "111Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores et nemo architecto sed exercitationem velit, quis rem fuga accusamus minima rerum repellendus facere, possimus nobis itaque sunt mollitia laborum corporis."
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego",
        author: "Jan Kowalski",
        text: "222Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores et nemo architecto sed exercitationem velit, quis rem fuga accusamus minima rerum repellendus facere, possimus nobis itaque sunt mollitia laborum corporis."
    },
    {
        id: 3,
        title: "Ciemna strona",
        author: "Asia Kwiatkowska",
        text: "333Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores et nemo architecto sed exercitationem velit, quis rem fuga accusamus minima rerum repellendus facere, possimus nobis itaque sunt mollitia laborum corporis."
    },
]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key="article.id" {...article}/>
    ))
    return ( 
    <div className="home">{artList}</div> 
    );
}
 
export default HomePage;