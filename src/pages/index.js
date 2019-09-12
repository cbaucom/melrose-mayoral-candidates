import React from "react"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Button, { MelroseButton } from "../components/button"

import jackielavenderbird from "../images/jackielavenderbird.png"
import manishabewtra from "../images/manishabewtra.png"
import mikezwirko from "../images/mikezwirko.png"
import monicamedeiros from "../images/monicamedeiros.png"
import paulbrodeur from "../images/paulbrodeur.png"

const jello = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`

const MainContainer = styled.div`
  padding: 1rem 0;
  text-align: center;
  color: #180656;
`

const Banner = styled.div`
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9e0610;
  color: white;
  height: 50px;

  h3 {
    margin: 0;
    padding: 0;
    animation: ${jello} 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Melrose Mayoral Candidates 2019" />
    <Banner>
      <h3>Please vote September 17, 2019</h3>
    </Banner>
    <MainContainer>
      <h1>Melrose Mayoral Candidates 2019</h1>
      <h4>
        Below are the candidates for the 2019 preliminary city election in
        Melrose, Massachusetts
      </h4>
      <Card
        image={manishabewtra}
        title={"Manisha Bewtra"}
        text={`Her vision for Melrose is for a city with stronger ties between neighbors, where long-time residents and newcomers come together in support of a thriving, connected community. She works towards making Melrose more inclusive and accessible, where more residents feel like they have a voice at City Hall. Her problem-solving experience as a city planner who has worked with many municipal governments adds value to local decision-making.
        `}
        buttonText={"Learn more"}
        link={"https://www.manishaformelrose.com/"}
        color={"RGBA(120, 51, 47, 1.00)"}
        hover={"RGBA(120, 51, 47, .80)"}
      />
      <Card
        image={jackielavenderbird}
        title={"Jackie Lavender Bird"}
        text={`Jackie’s top priorities will be to strengthen our public schools, ensure strong and accountable fiscal management, and lead stakeholders through a decision making process regarding public safety buildings and resources.

        Jackie looks forward to connecting with Melrose residents through her campaign, talking about issues most important to them, and continuing to build a shared vision for the future of our city.`}
        buttonText={"Learn more"}
        link={"http://www.jackieformelrose.com/"}
        color={"RGBA(139, 168, 199, 1.00)"}
        hover={"RGBA(139, 168, 199, .80)"}
      />
      <Card
        image={paulbrodeur}
        title={"Paul Brodeur"}
        text={`"I am excited to put my passion for our community and my experience in public service to work for Melrose. I believe our best days lie ahead. Our city, our people and our future are what matters to me and I am ready to start building a brighter future for Melrose."
        `}
        buttonText={"Learn more"}
        link={"https://www.paulbrodeur.com/"}
        color={"RGBA(44, 57, 128, 1.00)"}
        hover={"RGBA(44, 57, 128, .80)"}
      />
      <Card
        image={monicamedeiros}
        title={"Monica Medeiros"}
        text={`"I am ready to make Melrose a leader in the areas that matter most -- a leader in education, in fiscal management, in sustainability and in community engagement.”`}
        buttonText={"Learn more"}
        link={"https://www.votemonica.com/"}
        color={"RGBA(143, 43, 41, 1.00)"}
        hover={"RGBA(143, 43, 41, .80)"}
      />
      <Card
        image={mikezwirko}
        title={"Mike Zwirko"}
        text={`"To accomplish great things we need vision, a vision for Melrose that transcends change and points us directly towards our future. I have and will continue to discuss the tough issues and face them head-on with thoughtful and innovative approaches: for as long as it takes to get them done. Whether it be how we educate our children, expanding our tax base, or stabilizing our fiscal burdens; I intend to embrace all the creative, disruptive and strategic ideas that ensure they happen."`}
        buttonText={"Learn more"}
        link={"https://www.zwirko.com/"}
        color={"RGBA(90, 143, 59, 1.00)"}
        hover={"RGBA(90, 143, 59, .80)"}
      />
      <MelroseButton href="https://www.cityofmelrose.org/elections/pages/find-my-polling-location">
        Find your polling location
      </MelroseButton>
    </MainContainer>
  </Layout>
)

export default IndexPage
