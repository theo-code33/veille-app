import { useState, useEffect } from "react";
import CardArticle from "../components/CardArticle";

const Home = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const res = await fetch('https://629a00896f8c03a9784e867c.mockapi.io/articles');
            const data = await res.json();
            setArticles(data);
        }
        fetchArticles();
    }, []);

    return ( 
        <div className="container">
            <h1>Home</h1>
            <div className="card-container">
                {articles.map(article => (
                    <CardArticle key={article.id} article={article}/>
                ))}
            </div>
        </div>
     );
}
 
export default Home;