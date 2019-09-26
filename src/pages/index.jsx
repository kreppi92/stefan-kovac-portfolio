import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/addons.cjs";

import FsLightbox from "fslightbox-react";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";

import portfolioGoat from "../images/portfolio-goat.jpg";
import portfolioMapfolio from "../images/portfolio-mapfolio.jpg";
import portfolioRecipes from "../images/portfolio-recipes.jpg";
import portfolioAngelcoins from "../images/portfolio-angelcoins.jpg";

import diamThumbnail from "../images/diam-thumbnail.png"
import diamFullsize from "../images/diam-fullsize.jpg"
import diamFullsize2 from "../images/diam-fullsize-2.jpg"

import yorkvilleThumbnail from "../images/yorkville-thumbnail.png"
import yorkvilleFullsize from "../images/yorkville-fullsize.jpg"

import stellar1 from "../images/stellar1.png"
import stellar2 from "../images/stellar2.png"
import stellar3 from "../images/stellar3.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white font-sans pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => {
  const [toggler, setToggler] = useState(false);
  const lightbox = {
    Diam: [diamFullsize, diamFullsize2],
    Yorkville: [yorkvilleFullsize],
    StellarX: [stellar1, stellar2, stellar3]
  }
  const [currentLightbox, setCurrentLightbox] = useState("StellarX") 
  return (
    <>
      <Layout />
      <Parallax pages={5}>
        <Hero offset={0}>
          <BigTitle>
            Hi, <br /> I'm Stefan.
          </BigTitle>
          <Subtitle>
            Full stack developer and designer. <br />
            If you want to know more about my work then you're in the right
            place!{" "}
          </Subtitle>
        </Hero>
        <Projects offset={1}>
          <Title>Software Engineering Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="AngelCoins"
              link="https://angelcoins.netlify.com/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={portfolioAngelcoins}
              github="https://github.com/kreppi92/angelcoins-frontend"
              deployed="https://angelcoins.netlify.com/"
            >
              Platform for buying shares in startups using Cryptocurrencies.
            </ProjectCard>
            <ProjectCard
              title="MapFolio"
              link="https://www.behance.net/gallery/58937147/Freiheit"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={portfolioMapfolio}
              github="https://github.com/kreppi92/finalproject"
              deployed="https://decodemtl-nsu.firebaseapp.com/"
            >
              Project Management Dashboard for Construction Industry. Built
              using ReactJS, FireBase.
            </ProjectCard>
            <ProjectCard
              title="Ghost Of A Tale"
              link="https://www.behance.net/gallery/52915793/Harry-Potter"
              bg={portfolioGoat}
              deployed="https://www.ghostofatale.com/"
            >
              Web designer / coder for this multi-million dollar xBox project.
              Built using WordPress CMS.
            </ProjectCard>
            <ProjectCard
              title="Simple Recipe App"
              link="https://www.behance.net/gallery/43907099/Tomb-Raider"
              bg={portfolioRecipes}
              github="https://github.com/kreppi92/recipeAppDemo"
              deployed="https://recipe-app-demo-slingshot.herokuapp.com/"
            >
              Built using React, Redux, React-Router, LocalStorage Persistence,
              BrowserSync, ES Linting, Jest&Enzyme, Sass, HML, Responsive Grid,
              Material UI
            </ProjectCard>
          </ProjectsWrapper>
        </Projects>
        <Projects offset={2}>
          <Title>Other Cool Stuff I've Made</Title>
          <ProjectsWrapper>
          <ProjectCard
              id="StellarX"
              title="StellarX UI/UX"
              link="https://angelcoins.netlify.com/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={stellar2}
              // github="https://github.com/kreppi92/angelcoins-frontend"
              // deployed="https://angelcoins.netlify.com/"
              toggle={{toggler, setToggler}}
              setCurrentLightbox={setCurrentLightbox}
              lightbox
            >
              UI/UX Design for Crypto Currency Trading Platform
            </ProjectCard>
            <ProjectCard
              id="Diam"
              title="Diam Rendering"
              link="https://angelcoins.netlify.com/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={diamThumbnail}
              // github="https://github.com/kreppi92/angelcoins-frontend"
              // deployed="https://angelcoins.netlify.com/"
              toggle={{toggler, setToggler}}
              setCurrentLightbox={setCurrentLightbox}
              lightbox
            >
              3D Rendering for $15MM Residential Development Project
            </ProjectCard>
            <ProjectCard
              id="Yorkville"
              title="Yorkville Rendering"
              link="https://angelcoins.netlify.com/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={yorkvilleThumbnail}
              // github="https://github.com/kreppi92/angelcoins-frontend"
              // deployed="https://angelcoins.netlify.com/"
              toggle={{toggler, setToggler}}
              setCurrentLightbox={setCurrentLightbox}
              lightbox
            >
              3D Rendering for $2MM Condo in Yorkville, Toronto
            </ProjectCard>
          </ProjectsWrapper>
        </Projects>
        <About offset={3.5}>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="Stefan Kovac" />
            <AboutSub>
              Stefan Kovac <br />
              Full Stack Developer & Designer
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            I like to create awesome stuff, whether its building new apps using
            a tech stack based on ReactJS, Express and NodeJS, or designing in
            the Adobe Creative Suite and creating 3D models.
            <br />
            <br />
            Building something cool? Let me know!
          </AboutDesc>
        </About>
        <Contact offset={4}>
          <Inner>
            <Title>Get in touch</Title>
            <ContactText>
              Shoot me an <a href="mailto:stefankovac416@gmail.com">e-mail</a>{" "}
              or find me on other platforms: <br />
              <br />
              <a href="https://github.com/Kreppi92">
                <FontAwesomeIcon icon={faGithub} />
                {" GitHub "}
              </a>{" "}
              {" || "}
              <a href="https://www.linkedin.com/in/stefan-kovac/">
                <FontAwesomeIcon icon={faLinkedin} />
                {" LinkedIn "}
              </a>
            </ContactText>
          </Inner>
          <Footer>&copy; 2019</Footer>
        </Contact>
      </Parallax>
      <FsLightbox
      toggler={toggler} 
      sources={lightbox[currentLightbox]} 
      key={ currentLightbox }
      />
    </>
  );
};

export default Index;
