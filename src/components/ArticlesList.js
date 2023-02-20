import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div key={article.name} className="article-preview">
          <h2>{article.title}</h2>
          <p>{article.content[0].substring(0, 150)}...</p>
          <Link to={`/articles/${article.name}`}>Read</Link>
        </div>
      ))}
    </>
  );
};

export default ArticlesList;
