import IndexNavbar from "components/IndexNavbar";
import IndexHeader from "components/IndexHeader";
import IndexFooter from "components/IndexFooter";
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import React from "react";




function App() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-thumbnail img-responsive img-no-padding"
                src={require("assets/img/my_pic.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Ma. Michelle Cloribel <br />
              </h4>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                I'm Ma. Michelle Cloribel, taking bachelor of science in information technology , I love exploring new things. With that I can and I will this for my future career. Pursuing this course isn't easy at all but I aim this high.
              </p>
              <br />
            </Col>
          </Row>
          <br />
        </Container>
      </div>
      <div className="section section-image section-snd">
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Let's Talk ?</h3>
                <Form className="register-form">
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                  <label>Message</label>
                  <Input
                    placeholder="Tell me about your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Send
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
      <IndexFooter />
    </>
  );
}

export default App;