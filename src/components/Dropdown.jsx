import { Dropdown } from "react-bootstrap";
import {Link, useLocation } from "react-router-dom";
const Dropdownmenu = () => {
  const location = useLocation();
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        {location.pathname === "/crypto-price" && <span>Market</span>}
        {location.pathname === "/crypto-news" && <span>News</span>}
        {location.pathname === "/Memes-section" && <span>Memes</span>}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark" id="dropdown-menu">
        <Dropdown.Item to="/crypto-price" as={Link}>
          Market
        </Dropdown.Item>
        <Dropdown.Item to="/crypto-news" as={Link}>
          News
        </Dropdown.Item>
        <Dropdown.Item to="/Memes-section" as={Link}>
          Memes
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Dropdownmenu;
