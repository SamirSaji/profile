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
import Coffee1 from "../images/silver.png";
import Coffee2 from "../images/silver2.png";
import Coffee3 from "../images/silver3.png";
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
    width: 33%;
    font-style: normal;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    padding-bottom: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
      width: auto;
    }
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


function Forecast(props) {
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
            <Heading>Stylori Silver</Heading>
            <Paragraph>
              Stylori Silver is a project I built alongside Crayon'd for a Jewellery Company. We decided to create a react web
              application that would help to create easy and reuseable component for this project. Stylori Silver used to people to
              order their liked Silver jewellery. We also build Admin portal of this project so that admin can create, altered and
              delete the product easily.
            </Paragraph>
            <ProjectTable>
              <tbody>
                <tr>
                  <th>Type</th>
                  <th>Stack</th>
                  <th>Live</th>
                </tr>
                <tr>
                  <td>Team</td>
                  <td>React</td>

                  <Bold>
                    <a href="https://www.stylori.com/styloriSilver">View Site</a>
                  </Bold>
                </tr>
                <tr>
                  <td></td>
                  <td>GraphQL</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </ProjectTable>
          </TextContent>
          <Image src={Coffee1} alt="Stylori Silver" />

          <WebStack>
            <CenterText>
              <Heading>Web Stack and Explanation</Heading>
              <Paragraph>
                React was the clear choice for this project, because of its ease of state management and the amount of packages
                available. We also utilized AWS as a server to host Stylori Silver.
              </Paragraph>
              <Paragraph>
                This whole project is completely intergrated with graphql, because of its ease of querying and required data only
                querying.
              </Paragraph>
            </CenterText>
          </WebStack>
          <Image src={Coffee2} alt="Stylori Silver" />

          <TextContent>
            <Heading>Lessons Learned</Heading>
            <Paragraph>
              I could spend all day describing the lessons that I learned while working on this project, but the most important
              ones involved my newfound understanding of React Hooks, Git management, Feature Keys, and API integration. As my
              first large project using React, I learned a lot of lessons regarding code structure and organization. When I first
              began, I would write sloppy code and move on, but now I know how doing so can come back to bite you; I now spend a
              lot more time refactoring and improving every line I code I write, for the best readability and far fewer headaches.
            </Paragraph>
          </TextContent>
          <Image src={Coffee3} alt="Stylori Silver" />
        </Container>
      </Layout>
      <Footer projectDisplay="block" />
    </>
  );
}

export default Forecast;
