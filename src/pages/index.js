import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Link from '../components/Link' 
import { useTheme } from '../components/Theming' 
import { rhythm } from '../lib/typography'
import RobotStarsSceneNew from "../components/basics/robots/robotscenemainpage" 
import { Container, Row, Col, Card } from 'react-bootstrap'

//     height: calc(100vh - 82.73px); 
 
const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        height: 100%; max-height:100%;
        background: ${theme.colors.primary};
        padding: 0px 0 0px 0;
        display: flex;
      `}
    > 
      <div
        css={css`
          height: calc(100vh - 82.73px);  
          width: 100%;
          background: ${theme.colors.blue};
          overflow: hidden;
        `}
      >
        <RobotStarsSceneNew/> 
      </div>
    </section>
  )
}

 
export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout noSubscribeForm noFooter site={site}> 
      <Hero /> 
        <Row className="myroww">  

            <Col  key={'nothing123'} lg={6}> 
                <Card className="mycardpart mb-2 mt-2 "> 
                    <Card.Body className="mytemppp"> 
                        <Card.Text  >
                          
                            <Link
                              to={'/blog'}
                              aria-label={`View ${'post.frontmatter.title'}`}
                            >
                              {'Temporary Blog Page'}
                            </Link>
                  
                        </Card.Text>
                    </Card.Body> 
                </Card>    
            </Col>   

            <Col key={'asdasdasdassdasd'} lg={6}> 
                <Card className="mycardpart mb-2 mt-2"> 
                    <Card.Body className="mytemppp">    
                      <Link
                          to={'/portfolio_page'}
                          aria-label={`View ${'Portfolio Page'}`}
                        >
                        <Card.Text className="mycardbottombit  "> 
                              {'Portfolio Page'} 
                        </Card.Text>  
                      </Link>
                    </Card.Body> 
                </Card>    
            </Col>  

        </Row> 
        <hr /> 
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
