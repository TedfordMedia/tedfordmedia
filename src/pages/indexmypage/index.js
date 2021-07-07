import React from 'react' 
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import { Container, Row, Col, Card } from 'react-bootstrap'
import Layout from "../../components/layoutwide"  
import styled from '@emotion/styled'
import 'bootstrap/dist/css/bootstrap.min.css'
import './mystyling.css'
import { useTheme } from '../../components/Theming'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
const Description = styled.p`
  margin-bottom: 10px;
  font-size: .9em;
  display: inline-block;
`
const StyledLink = styled(props => <Link {...props} />)`
    color: black;
    text-decoration: none;
`;

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout noSubscribeForm site={site}>  
        {/* <Hero /> */}
        <Container>
            <Row>  
            {allMdx.edges.map(({ node: post }) => ( 
                <Col key={post.id} lg={6}> 
                    <Card className="mycardpart"> 
                        <Card.Body>
                            {post.frontmatter.banner && (
                                <Link
                                    aria-label={`View ${post.frontmatter.title} article`}
                                    to={`/${post.fields.slug}`}
                                    >
                                    <Image   
                                        className="mycardimage"
                                        sizes={post.frontmatter.banner.childImageSharp.fluid} 
                                    /><br/>
                                </Link>
                            )}
                            <Card.Title>
                                <StyledLink
                                    to={'../'+post.frontmatter.slug}
                                    aria-label={`View ${post.frontmatter.title}`}
                                >
                                    {post.frontmatter.title}
                                </StyledLink>
                            </Card.Title>
                            <Card.Text>
                                {post.excerpt}{' '}
                            </Card.Text>
                        </Card.Body> 
                    </Card>    
                </Col>   
            ))}
        </Row>
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
                fluid(maxWidth: 2000, quality: 100) {
                    ...GatsbyImageSharpFluid
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
