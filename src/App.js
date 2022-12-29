import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import QRCode from "react-qr-code";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [text, setText] = useState("");
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    setValue(text);
  };

  return (
    <Container className="border-primary rounded text-center my-5 p-3 shadow-lg bg-light">
      <Col className="my-4">
        <Row className="mb-5">
          <form>
            <input
              className="p-2 border bg-info rounded shadow-sm"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text here"
              style={{ fontSize: "19px", fontWeight: "500" }}
              autoFocus
            />
            <Button
              className="p-2 shadow"
              variant="outline-primary"
              style={{ fontSize: "19px", fontWeight: "700" }}
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Generate QR Code
            </Button>
          </form>
        </Row>
        {value && (
          <Row>
            <div className="my-5">{value && <QRCode value={value} />}</div>
          </Row>
        )}
      </Col>
    </Container>
  );
}

export default App;
