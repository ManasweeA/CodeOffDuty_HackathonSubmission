/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            {/* <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-transparent-footer"
                target="_blank"
              >
                Creative Tim
              </a>
            </li> */}
            <li>
              <a
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed and Developed by{" "}
          <Link to='/'>
            Tenouse Team
          </Link>
          {/* . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-transparent-footer"
            target="_blank"
          >
            Creative Tim
          </a> */}
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
