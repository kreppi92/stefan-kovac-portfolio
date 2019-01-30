import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg text-white`};
  background: ${props => props.bg};
  background-image: url(${props=> props.bg});
  background-size: cover;
  background-position: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const Overlay = styled.div`
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
background: linear-gradient(to bottom,rgba(0,0,0,0.1), rgba(0,0,0,.4));
width: 100%;
height: 100%;
transition: 0.8s;
&:hover {
  background: linear-gradient(to bottom,rgba(0,0,0,0.4), rgba(0,0,0,.7));
  }
`

const Text = styled.div`
  ${tw`opacity-85 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  &:hover {
    color: white;
  }
`

const Link = styled.div`
  ${tw`opacity-75 font-sans text-l md:text-xl xl:text-xl`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: opacity 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    ${tw`opacity-100 font-sans text-l md:text-xl xl:text-xl`};
  }
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const ProjectCard = ({ title, link, children, bg, github, deployed }) => (
  <Wrapper href={deployed} bg={bg}>
  <Overlay>
    <Title>{title}</Title>
    <Text>{children}</Text><br/>
    {github ?
      <Fragment>
        <Link>
          <a href={github} target="_blank" style={{cursor: 'pointer'}}>
            <FontAwesomeIcon icon={faGithub} />
            {" View Source Code on GitHub "}
          </a>
        </Link>
      </Fragment>
      : ""}
    {deployed ?
      <Fragment>
        <Link>
          <a href={deployed} target="_blank" style={{cursor: 'pointer'}}>
            <FontAwesomeIcon icon={faRocket} />
            {" View Deployed "}
          </a>
        </Link>
      </Fragment>
      : ""}
      </Overlay>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
