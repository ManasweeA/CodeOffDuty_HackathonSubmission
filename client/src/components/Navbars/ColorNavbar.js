import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ColorNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="bg-info" expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="#pablo"
              target="_blank"
              id="navbar-brand"
            >
            <img
                  alt="..."
                  src={require("assets/img/tenrox_logo_light.png")}
                  style = {{ height: "50px"}}
                ></img>
              
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              AI based agile intimation for Tenants and other folks
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>About</p>
                </NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons shopping_shop"></i>
                  <p>Houses</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/create-post" tag={Link}>
                    <i className="now-ui-icons gestures_tap-01"></i>
                    Post Property
                  </DropdownItem>
                  <DropdownItem
                    to="/rent-property" tag={Link}
                  >
                    <i className="now-ui-icons objects_key-25"></i>
                    Rent Property
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons users_circle-08"></i>
                  <p>Roommates</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/roommate-post" tag={Link}>
                    <i className="now-ui-icons objects_spaceship"></i>
                    Post Roommate
                  </DropdownItem>
                  <DropdownItem
                    to="/find-roommates" tag={Link}
                  >
                    <i className="now-ui-icons objects_planet"></i>
                    Find Roommate
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
              <Link to="/messages">
                <NavLink
                >
                  <i className="now-ui-icons ui-2_chat-round"></i>
                  <p>Messages</p>
                </NavLink>
                </Link>
              </NavItem>

              <NavItem>
              <Link to="/profile/">
                <NavLink
      
                >
                  <i className="now-ui-icons users_single-02"></i>
                  <p>Profile</p>
                </NavLink>
                </Link>
              </NavItem>

              <NavItem>
              <Link to="/login-page">
                <Button
                  className="nav-link btn-neutral btn-round"
                  color="info"
                  id="upgrade-to-pro"
                  
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>SignUp/SignIn</p>
                </Button>
                </Link>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  SignIn to experience the most amazing features
                </UncontrolledTooltip>
              </NavItem>
              
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorNavbar;
