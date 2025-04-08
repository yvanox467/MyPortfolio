import { Col, Container, Row, Nav,Tab}from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Business startup",
      description: "Design & Development",
      imageurl: projImg1,
    },
    {
      title: "Business startup",
      description: "Design & Development",
      imageurl: projImg2,
    },
    {
      title: "Business startup",
      description: "Design & Development",
      imageurl: projImg3,
    },
    {
        title: "Business startup",
        description: "Design & Development",
        imageurl: projImg1,
      },
      {
        title: "Business startup",
        description: "Design & Development",
        imageurl: projImg2,
      },
      {
        title: "Business startup",
        description: "Design & Development",
        imageurl: projImg3,
      },
   
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>PROJECTS</h2>
            <p>These are the projects that I've been working on</p>

            <Tab.Container id="projects0-tab" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index)=>{
                                return(
                                    <ProjectCards
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>

            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
