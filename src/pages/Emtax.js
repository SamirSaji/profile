import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../components/Media";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Footer from "../components/footer";
import "../index.css";
import decore1 from "../images/emtax.png";
import decore2 from "../images/emtax1.png";

const Container = styled.div`
  margin: 50px 0;
  width: 100%;
  height: auto;
  align-items: center;

  h1 {
    font-size: 30px;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    margin: 100px 0;
  }
`;

const TextContent = styled.div`
  max-width: 800px;
  margin-top: 40px;

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-top: 100px;
  }

  :nth-child(1) > ${Heading} {
    font-size: 40px;

    @media (min-width: ${breakpoints.mobileMax}) {
      font-size: 60px;
    }
  }
`;

const ProjectTable = styled.table`
  width: 100%;
  text-align: left;

  th {
    font-style: normal;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    padding-bottom: 20px;
  }

  td {
    width: 100px;
    font-size: 14px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
  }
`;

const Bold = styled.td`
  a {
    font-size: 16px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
    font-weight: 900;
    color: #dd7834;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    padding-bottom: 3px;

    :hover {
      border-bottom: 2px solid #dd7834;
    }
  }
`;

const Image = styled.img`
  margin: 50px 0 20px 0;
  width: 105%;
  transform: translatex(-2.5%);
  height: auto;
  border-radius: 4px;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: auto;
    margin: 50px 0 50px 0;
  }
`;

const WebStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 100px 0;
  }
`;

const CenterText = styled.div`
  width: 100%;
  padding: 50px 0;
  text-align: center;

  ${Paragraph} {
    max-width: 700px;
    margin: 30px auto;
  }
`;

function Decore() {
  return (
    <>
      <Helmet
        title="Mohammed Samir - Emtax"
        meta={[
          {
            name: "Mohammed Samir",
            content: "Portfolio - Mohammed Samir",
          },
          {
            name: "Mohammed Samir",
            content: "Mohammed Samir - SamirSaji - Front End Developer",
          },
        ]}
      >
        {" "}
        <html lang="en" />
      </Helmet>
      <Layout>
        <Link to="/">
          <Logo />
        </Link>
        <Container>
          <TextContent>
            <Heading>Emtax</Heading>
            <Paragraph>
              Emtax is a project I built alongside{" "}
              <a
                style={{
                  color: "#DD7834",
                  fontWeight: "900",
                }}
                href="https://www.crayond.com/"
              >
                Crayon'd
              </a>{" "}
              for a Auditing Company. We developed this project using HTML, CSS, Javascript, JQuery. Emtax used to people to
              reduce their auditing for their IT taxes. User upload their montly spends. Our product easily calculate their Tax
              amount. It is widely used in UAE. easily.
            </Paragraph>
            <ProjectTable>
              <tbody>
                <tr>
                  <th>Type</th>
                  <th>Stack</th>

                  <th>Live</th>
                </tr>
                <tr>
                  <td>Team Project</td>
                  <td>HTML & CSS</td>

                  <Bold>
                    <a href="https://www.emtaxtech.com">View Site</a>
                  </Bold>
                </tr>
                <tr>
                  <td></td>
                  <td>Javascript</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </ProjectTable>
          </TextContent>
          <Image src={decore1} alt="Emtax" />

          <WebStack>
            <CenterText>
              <Heading>Web Stack and Explanation</Heading>
              <Paragraph>
                We developed this project by HTML, CSS and Javascript. EJS format - nodeJS server side rendering method used in
                this project.
              </Paragraph>
              <Paragraph>
                This whole project completely worked along with JQuery because of its give lots of inbuilt function and easy of
                use and quickly developed projects.
              </Paragraph>
            </CenterText>
          </WebStack>
          <Image src={decore2} alt="Emtax" />

          <TextContent>
            <Heading>Lessons Learned</Heading>
            <Paragraph>
              This project helped to solidify a lot my Javascript knowledge. I also got a lot of great practice using ES6+ syntax
              across the entirety of the project. This was a large code base to manage across a team, and we all got some more
              great experience with version control and reviewing each others code.
            </Paragraph>
          </TextContent>
        </Container>
      </Layout>
      <Footer projectDisplay="block" />
    </>
  );
}

export default Decore;
