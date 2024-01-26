import React from "react";
import { Row, Container } from "reactstrap";

function IndexFooter() {
    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <div className="content-center">
                    <span className="copyright">
                        © {new Date().getFullYear()}, made with{" "}
                        <i className="fa fa-heart heart" /> by Ma. Michelle Cloribel
                    </span>
                </div>
            </Container>
        </footer>
    );
}

export default IndexFooter;
