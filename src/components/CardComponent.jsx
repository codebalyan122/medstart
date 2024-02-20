import Card from "react-bootstrap/Card";

function Cardcomponent({ title, image, price }) {
  return (
    <Card style={{ width: "20rem", marginTop: "2rem" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{
          height: "10rem",
          objectFit: "contain",
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Cardcomponent;
