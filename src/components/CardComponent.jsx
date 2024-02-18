import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cardcomponent() {
  return (
    <Card style={{ width: "20rem", marginTop: "2rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Order</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardcomponent;
