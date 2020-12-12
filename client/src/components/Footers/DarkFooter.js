/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            {/* <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-dark-footer"
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
          © {new Date().getFullYear()}, Designed and Developed By{" "}
          <Link
            to='/'
          >
            Tenouse Team
          </Link>
          {/* . Coded by{" "} }
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
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

export default DarkFooter;
