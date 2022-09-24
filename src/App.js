import {
  Nav,
  Navbar,
  Offcanvas,
  Container,
  Button,
  NavDropdown,
  Form,
} from "react-bootstrap";
import "./App.css";
import nasaLog from "../src/assets/NASA-Logo-Large.png";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/home/Home";
import Wildfire from "./components/wildfire/Wildfire";
import Imageofday from "./components/imageofday/Imageofday";
import Fireballs from "./components/Fireballs/Fireballs";

function App() {
  return (
    <div>
      <Navbar expand="lg" className="head">
        <Container fluid>
          <Navbar.Brand href="" className="text-light">
            {" "}
            <img src={nasaLog} width="50px" alt="" /> NASA Earth
          </Navbar.Brand>
          <Navbar.Toggle
            className="toggle"
            aria-controls={`offcanvasNavbar-expand-lg`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav>
                  <NavLink to="" className="text-light nav-link">
                    Home
                  </NavLink>
                  <NavLink to="wildfire" className="text-light nav-link">
                    WildFire
                  </NavLink>
                  <NavLink to="fireballs" className="text-light nav-link">
                    Fireballs
                  </NavLink>
                  <NavLink to="imageofday" className="text-light nav-link">
                    Image of the day
                  </NavLink>
                </Nav>
                <NavDropdown
                  title="More "
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item>More</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Something else here</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wildfire" element={<Wildfire />} />
        <Route path="/imageofday" element={<Imageofday />}></Route>
        <Route path="/fireballs" element={<Fireballs />} />

      </Routes>
    </div>
  );
}

export default App;
