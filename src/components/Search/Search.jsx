import { useState } from "react";
import { getArticles, getArticlesByTopic } from "../../utils/utils";
import { useSearchParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Search.css";

export default function Search({ topic, setArticles }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  let sort_by = searchParams.get("sort_by") || "created_at";
  let order = searchParams.get("order") || "DESC";

  function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    if (topic) {
      getArticlesByTopic(topic, sort_by, order).then((res) => {
        setArticles(res.articles);
        setIsLoading(false);
      });
    } else {
      getArticles(sort_by, order).then((res) => {
        setArticles(res.articles);
        setIsLoading(false);
      });
    }
  }

  return (
    <>
      <div className="form-container">
        <Form inline onSubmit={handleSubmit}>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingSelect" label="Sort By:">
                <Form.Select
                  id="sortby"
                  value={sort_by}
                  onChange={(event) => {
                    setSearchParams({ sort_by: event.target.value, order });
                  }}
                  size="sm"
                >
                  <option value="created_at">Date</option>
                  <option value="comment_count">Comments</option>
                  <option value="votes">Votes</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelect" label="Order:">
                <Form.Select
                  id="orderby"
                  value={order}
                  onChange={(event) => {
                    setSearchParams({ sort_by, order: event.target.value });
                  }}
                  size="sm"
                >
                  <option value="DESC">Descending</option>
                  <option value="ASC">Ascending</option>
                </Form.Select>
              </FloatingLabel>
            </Col>

            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? "Loading…" : "Sort Articles"}
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
}
