import { Button, Col, Row } from "react-bootstrap";

export function Jumbotron({ onClick }) {
  return (
    <Row>
      <Col>
        <h1>My own react template</h1>
        <p>
          Made By Brandon Berrios
        </p>
        <Button variant="primary" onClick={onClick}>
          Click Here
        </Button>
      </Col>
    </Row>
  );
}