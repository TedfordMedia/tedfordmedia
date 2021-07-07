import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Link from '../components/Link' 
import { useTheme } from '../components/Theming'
import Container from '../components/Container'
import { rhythm } from '../lib/typography'
import RobotStarsSceneNew from "../components/basics/robots/robotscenemainpage" 

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.primary};
        padding: 0px 0 0px 0;
        display: flex;
      `}
    >
   
      <div
        css={css`
          height: 95vh;
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

const Description = styled.p`
  margin-bottom: 10px;
  font-size: .9em;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout noSubscribeForm site={site}>
 
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >

        <div className="portfolioheader">
            <h2   css={css`
              width: 100%;
              flex-shrink: 0;
              background: none;
              padding: 20px 0;
              padding-bottom: 10px;
              font-weight: bold;
              font-size: 38px;
              color: ${theme.colors.headerBg};
            `}>
              Portfolio
            </h2>  
            Browse through these samples and demos.. 
        </div>
        {/* <Row>  
     
                <Col key={'asdasdasdasdasd'} lg={6}> 
                    <Card className="mycardpart mb-2 mt-2"> 
                        <Card.Body className="mycardbody"> 
                            <Card.Text className="mycardbottombit  ">
                                {'poasdfsadfsadf st.sadfasdf  .descsadfsadfription'}{' '}
                            </Card.Text>
                        </Card.Body> 
                    </Card>    
                </Col>   
        
          </Row> */}
 
        <div
            key={'mydivvaa'}
            css={css`
              max-width: 900px;
              margin:auto;
              margin-bottom: 40px;
            `}
          >
            <h2
              css={css({
                marginBottom: rhythm(0.3),
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.blue,
                },
              })}
            >
              <Link
                to={'/portfolio_page'}
                aria-label={`View ${'Portfolio Page'}`}
              >
                {'Portfolio Page'}
              </Link>
            </h2> 
          </div>

          <div
            key={'mydivv'}
            css={css`
              max-width: 900px;  
              margin:auto;
              margin-bottom: 40px;
            `}
          >
            <h2
              css={css({
                marginBottom: rhythm(0.3),
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.secondary,
                },
              })}
            >
              <Link
                to={'/blog'}
                aria-label={`View ${'post.frontmatter.title'}`}
              >
                {'Temporary Blog Page'}
              </Link>
            </h2> 
          </div>
  
        <hr />
      </Container>
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
