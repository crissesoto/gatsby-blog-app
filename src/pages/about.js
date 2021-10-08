import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Seo from './../components/Seo'

export default function About({data}) {
  return (
    <Layout>
      <Seo 
        title="About"
        description="Learn more about CODE-VAULT personal Blog app project made with JAMStack architecture"
      />
    <div className="content">
          <h5>Hi, I'm Crisse Soto, a frontend developer with experience in React, Shopify and custom API integrations.
          </h5> <h5>What this means is that I can help you bend your tech systems to your will!</h5>

          <p><strong>Do you want to...</strong>
            <ul>
              <li>Have a custom Shopify website?</li>
              <li>Build your own MVP web app?</li>
              <li>Integrate your website with third party services?</li>
              <li>Eliminate your repetitive tasks or tie two online services together with custom scripts?</li>
            </ul>
          </p>
          <p>If yes, <a href="/contact">let's talk!</a></p>

          <h5>About Me</h5>
          <p>I have almost 3 years of work experience as a developer. I also have experience in digital marketing and retail.</p>
          <p>If you're looking for a developer who can relate to your struggles and business needs, I'm the gal for you!</p>

          <p>I'm familiar with these technologies:
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>Gatsby</li>
              <li>Shopify</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
              <li>Node.js</li>
            </ul>
          </p>
      </div>
          <h3>See my <a href="/contact">Portfolio</a> or <a href="/contact">Contact Me About Your Project</a>.</h3>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`