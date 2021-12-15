import { Navbar, Container} from "react-bootstrap";

const Navigationbar = () => {
  
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="./"><img src="./images/BestInCrypto-logo.png" className="img-logo" alt="Crypto-hub"/></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link" onClick={()=>{localStorage.clear();}}>Clear Storage</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
