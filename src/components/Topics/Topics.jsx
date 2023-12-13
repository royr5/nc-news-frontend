import { useState, useEffect } from "react";
import { getTopics } from "../../utils/utils";
import "./Topics.css";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="topic-container">
      <h2>All Topics</h2>
      <ul>
        {topics.map((topic, index) => (
          <li className="topic" key={index}>
            <Link to={`/topics/${topic.slug}`} className="topic-link">
              <h3>{topic.slug}</h3>
              <p>{topic.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
