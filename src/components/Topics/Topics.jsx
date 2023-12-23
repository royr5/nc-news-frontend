import { useState, useEffect } from "react";
import { getTopics } from "../../utils/utils";
import "./Topics.css";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Card, CardGroup } from "react-bootstrap";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="topic-container">
      <h2>All Topics</h2>

      {isLoading ? (
        <Spinner animation="border" variant="primary" className="spinner" />
      ) : null}

      <CardGroup id="topics-list">
        <ul>
          {topics.map((topic, index) => (
            <Card className="topic" key={index}>
              <Link to={`/topics/${topic.slug}`} className="topic-link">
                <Card.Title className="topic-title">{topic.slug}</Card.Title>
                <Card.Text >{topic.description}</Card.Text>
              </Link>
            </Card>
          ))}
        </ul>
      </CardGroup>
    </div>
  );
}
