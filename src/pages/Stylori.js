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
import decore1 from "../images/sylori.png";
import decore2 from "../images/stylori2.png";
import decore3 from "../images/stylori3.png";

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
        title="Mohammed Samir - Stylori"
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
            <Heading>Stylori</Heading>
            <Paragraph>
              Stylori is a project I built alongside{" "}
              <a
                style={{
                  color: "#DD7834",
                  fontWeight: "900",
                }}
                href="https://www.crayond.com/"
              >
                Crayon'd
              </a>{" "}
              for a Jewellery Company. We decided to create a react web application that would help to create easy and reuseable
              component for this project. Stylori used to people to order their liked gold, diamond, platinum and gemstones
              jewellery. We also build Admin portal of this project so that admin can create, altered and delete the product
              easily.
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
                  <td>React</td>

                  <Bold>
                    <a href="https://www.stylori.com/">View Site</a>
                  </Bold>
                </tr>
                <tr>
                  <td></td>
                  <td>Graphql</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>Server side rendering</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </ProjectTable>
          </TextContent>
          <Image src={decore1} alt="stylori" />

          <WebStack>
            <CenterText>
              <Heading>Web Stack and Explanation</Heading>
              <Paragraph>
                React was the clear choice for this project, because of its ease of state management and the amount of packages
                available. We also utilized AWS as a server to host Stylori.
              </Paragraph>
              <Paragraph>
                This whole project is completely intergrated with graphql, because of its ease of querying and required data only
                querying.
              </Paragraph>
            </CenterText>
          </WebStack>
          <Image src={decore2} alt="Stylori Image" />

          <TextContent>
            <Heading>Lessons Learned</Heading>
            <Paragraph>
              This project helped to solidify a lot my React knowledge, such as using hooks or updating the states. I also got a
              lot of great practice using ES6+ syntax across the entirety of the project. This was a large code base to manage
              across a team, and we all got some more great experience with version control and reviewing each others code.
            </Paragraph>
          </TextContent>
          <Image src={decore3} alt="stylori" />
        </Container>
      </Layout>
      <Footer projectDisplay="block" />
    </>
  );
}

export default Decore;
