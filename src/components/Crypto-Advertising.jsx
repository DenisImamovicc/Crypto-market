import { Button, Card } from "react-bootstrap";
function CryptoAd(props) {
const adFrequency=3 //For every x card render a true CryptoAd component
const index=props.i+1
  return (
    <div className="CryptoAd">
      {index &&
      index % adFrequency === 0 &&(
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Ad titel</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go to Ad</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default CryptoAd;
