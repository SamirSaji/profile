import React from "react";
import { HeadingWrapCont, HeadingElements, Line, SocialCont, Social } from "./styles";
import { Container } from "../container";
import { HeadingMain } from "../../styles/";

function HeadingWrap() {
  return (
    <Container>
      <HeadingWrapCont>
        <HeadingElements>
          <Line />
          <SocialCont>
            <a title="LinkedIn - SamirSaji" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samirsaji">
              <Social>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="linkedin"
                  width="30"
                  height="35"
                  viewBox="0 0 30 28"
                  fill="none"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    fill="#9a9a9a"
                  />
                </svg>
              </Social>
            </a>

            <a title="Github Repository" target="_blank" rel="noreferrer" href="https://github.com/samirsaji">
              <Social>
                <svg className="git" width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.9883 1.23535C7.74316 1.23242 1.875 7.09766 1.875 14.3369C1.875 20.0615 5.5459 24.9277 10.6582 26.7148C11.3467 26.8877 11.2412 26.3984 11.2412 26.0645V23.7939C7.26563 24.2598 7.10449 21.6289 6.83789 21.1895C6.29883 20.2695 5.02441 20.0352 5.40527 19.5957C6.31055 19.1299 7.2334 19.7129 8.30273 21.292C9.07617 22.4375 10.585 22.2441 11.3496 22.0537C11.5166 21.3652 11.874 20.75 12.3662 20.2725C8.24707 19.5342 6.53027 17.0205 6.53027 14.0322C6.53027 12.582 7.00781 11.249 7.94531 10.1738C7.34766 8.40137 8.00098 6.88379 8.08887 6.6582C9.79102 6.50586 11.5605 7.87696 11.6982 7.98535C12.665 7.72461 13.7695 7.58692 15.0059 7.58692C16.248 7.58692 17.3555 7.73047 18.3311 7.99414C18.6621 7.74219 20.3027 6.56445 21.8848 6.70801C21.9697 6.9336 22.6084 8.41602 22.0459 10.165C22.9951 11.2432 23.4785 12.5879 23.4785 14.041C23.4785 17.0352 21.75 19.5518 17.6191 20.2783C17.973 20.6263 18.2539 21.0413 18.4455 21.499C18.6372 21.9567 18.7357 22.4481 18.7354 22.9443V26.2402C18.7588 26.5039 18.7354 26.7647 19.1748 26.7647C24.3633 25.0156 28.0986 20.1143 28.0986 14.3398C28.0986 7.09766 22.2275 1.23535 14.9883 1.23535V1.23535Z"
                    fill="#9a9a9a"
                  />
                </svg>
              </Social>
            </a>
            <a title="E-Mail" target="_blank" rel="noreferrer" href="mailto:samirsaji13@gmail.com">
              <Social>
                <svg className="mail" xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 28" fill="none">
                  <path
                    d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"
                    fill="#9a9a9a"
                  />
                </svg>
              </Social>
            </a>
          </SocialCont>
        </HeadingElements>
        <HeadingMain>
          <span>
            Hi there, I’m Samir. <br />
          </span>
          <span>
            Front End <span className="blue">Developer</span>, <br />
          </span>
          <span>Crayon'd Technology - Chennai.</span>
        </HeadingMain>
      </HeadingWrapCont>
    </Container>
  );
}

export default HeadingWrap;
