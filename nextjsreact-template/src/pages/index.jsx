import { Button, Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
   <Container>
    <Row>
      <Col>
        <h1>My own react template</h1>

        <Button variant="primary">Click Here!</Button>
      </Col>
    </Row>
   </Container>

  )
}