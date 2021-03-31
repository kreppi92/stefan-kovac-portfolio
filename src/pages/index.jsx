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
import portfolioRibbon from "../images/ribbon-thumbnail.png";
import portfolioZipp from "../images/zipp.png";
import portfolioSolpage from "../images/solpage.png";
import portfolioStellar from "../images/stellarx.jpg";

import diamFullsize from "../images/diam-fullsize.jpg";
import diamFullsize2 from "../images/diam-fullsize-2.jpg";

import yorkvilleThumbnail from "../images/yorkville-thumbnail.png";
import yorkvilleFullsize from "../images/yorkville-fullsize.jpg";

import stellar1 from "../images/stellar1.png";
import stellar2 from "../images/stellar2.png";
import stellar3 from "../images/stellar3.png";

import idThumbnail from "../images/waste-receptacle-thumbnail.png";
import id1 from "../images/waste-receptacle-1.jpg";
import id2 from "../images/waste-receptacle-2.jpg";

import stellarDashboard from "../images/stellar-dashboard-fullsize.png";
import stellarThumbnail from "../images/stellar-dashboard-thumbnail.png";

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
  const lightbox = {
    Yorkville: [diamFullsize, yorkvilleFullsize, diamFullsize2],
    StellarDashboard: [stellarDashboard],
    StellarMobile: [stellar1, stellar2, stellar3],
    IndustrialDesign: [id1, id2],
  };
  const [toggler, setToggler] = useState(false);
  const [currentLightbox, setCurrentLightbox] = useState("Yorkville");
  return (
    <>
      <Layout />
      <Parallax pages={5}>
        <Hero offset={0}>
          <BigTitle>
            Hi, <br /> I'm Stefan. 🙋🏼‍♂️
          </BigTitle>
          <Subtitle>
            Full stack developer and designer. <br />
            If you want to know more about my work then you're in the right
            place!
          </Subtitle>
        </Hero>
        <Projects offset={1}>
          <Title>Software Engineering stuff</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="zipp"
              link="https://zipp.xyz/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={portfolioZipp}
              github="https://github.com/zyngly/zyngly-landing"
              deployed="https://zipp.xyz"
            >
              Mobile audio NFT marketplace (Coming soon)
            </ProjectCard>
            <ProjectCard
              title="Solpage"
              link="https://solpage.io/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={portfolioSolpage}
              github="https://github.com/zyngly/sol-wallet-adapter"
              deployed="https://solpage.io/"
            >
              Ad space NFT project based on MillionDollarPage.com (Beta)
            </ProjectCard>
            <ProjectCard
              title="Ribbon Home"
              link="https://www.ribbonhome.com/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={portfolioRibbon}
              deployed="https://www.ribbonhome.com/"
            >
              Employee at Ribbon Home. Real estate solutions for agents. I've
              built features such as the Home Listing product.
            </ProjectCard>
            <ProjectCard
              title="StableCoin"
              link="https://stellarx.com/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={portfolioStellar}
              github="https://github.com/stellarx-cs"
              deployed="https://stellarx.com/"
            >
              Employee at StellarX working on StellarX marketplace and the
              Stablecoin project on Stellar blockchain.
            </ProjectCard>
            {/* <ProjectCard
              title="AngelCoins"
              link="https://angelcoins.netlify.com/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={portfolioAngelcoins}
              github="https://github.com/kreppi92/angelcoins-frontend"
              deployed="https://angelcoins.netlify.com/"
            >
              Platform for buying shares in startups using Cryptocurrencies.
            </ProjectCard> */}
            <ProjectCard
              title="MapFolio"
              link="https://www.behance.net/gallery/58937147/Freiheit"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={portfolioMapfolio}
              github="https://github.com/kreppi92/finalproject"
              deployed="https://decodemtl-nsu.firebaseapp.com/"
            >
              *FOR DESKTOP* <br />
              Project Management Dashboard for Construction Industry.
            </ProjectCard>
            <ProjectCard
              title="Ghost Of A Tale"
              link="https://www.behance.net/gallery/52915793/Harry-Potter"
              bg={portfolioGoat}
              deployed="https://www.ghostofatale.com/"
            >
              Web designer for this award winning Unity game released on xBox,
              PS4, Switch and others. Built on WordPress.
            </ProjectCard>
          </ProjectsWrapper>
          <br />
          <br />
          <Title>Design stuff</Title>
          <ProjectsWrapper>
            <ProjectCard
              id="StellarDashboard"
              title="StellarX UIUX MOCKUP"
              link="https://angelcoins.netlify.com/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={stellarThumbnail}
              // github="https://github.com/kreppi92/angelcoins-frontend"
              // deployed="https://angelcoins.netlify.com/"
              toggle={{ toggler, setToggler }}
              setCurrentLightbox={setCurrentLightbox}
              lightbox
            >
              UI/UX Dashboard Design for Crypto Currency Trading Platform
            </ProjectCard>
            <ProjectCard
              id="StellarMobile"
              title="StellarX Mobile UIUX MOCKUP"
              link="https://angelcoins.netlify.com/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={stellar2}
              // github="https://github.com/kreppi92/angelcoins-frontend"
              // deployed="https://angelcoins.netlify.com/"
              toggle={{ toggler, setToggler }}
              setCurrentLightbox={setCurrentLightbox}
              lightbox
            >
              UI/UX Mobile Trading Design for Crypto Currency Trading Platform
            </ProjectCard>
            <ProjectCard
              id="Yorkville"
              title="Architecture"
              // link="https://angelcoins.netlify.com/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={yorkvilleThumbnail}
              // github="https://github.com/kreppi92/angelcoins-frontend"
              // deployed="https://angelcoins.netlify.com/"
              toggle={{ toggler, setToggler }}
              setCurrentLightbox={setCurrentLightbox}
              lightbox
            >
              3D Renderings for $15MM Residential Development in Yorkville,
              Toronto
            </ProjectCard>
            <ProjectCard
              id="IndustrialDesign"
              title="Industrial Design"
              // link="https://angelcoins.netlify.com/"
              // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              bg={idThumbnail}
              // github="https://github.com/kreppi92/angelcoins-frontend"
              // deployed="https://angelcoins.netlify.com/"
              toggle={{ toggler, setToggler }}
              setCurrentLightbox={setCurrentLightbox}
              lightbox
            >
              Designed and manufactured for Toronto's GO Transit Authority
            </ProjectCard>
          </ProjectsWrapper>
        </Projects>
        <About offset={3}>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="Stefan Kovac" />
            <AboutSub>
              Stefan Kovac <br />
              Full Stack Developer & Designer
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            I create awesome stuff using design and technology. I love designing
            apps in Figma/Adobe Creative Suite and building them with a tech
            stack such as ReactJS, GraphQL and a NodeJS or Django backend. I
            also love blockchain, 3D printing, architecture but most importantly
            I love cooking really delicious food and cocktails for my friends.
            <br />
            <br />
            Building something cool? 👨🏼‍💻
            <br />
            ...or cooking something delicious? 🍗
            <br /> Let me know!
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
          <Footer>&copy; 2021</Footer>
        </Contact>
      </Parallax>
      <FsLightbox
        toggler={toggler}
        sources={lightbox[currentLightbox]}
        key={currentLightbox}
      />
    </>
  );
};

export default Index;
