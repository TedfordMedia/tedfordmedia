import React from 'react' 
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import { Container, Row, Col, Card } from 'react-bootstrap'
import Layout from "../../components/layoutwide"  
import 'bootstrap/dist/css/bootstrap.min.css'
import './mystyling.css'
import { useTheme } from '../../components/Theming'
  
export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout noSubscribeForm site={site}> 
        {/* <Hero /> */}
        <Container>
            <Row>  
            {allMdx.edges.map(({ node: post }) => ( 
                <Col key={post.id} lg={12}> 
                    <Card> 
                        <Card.Body>
                            <Card.Title>
                                {post.frontmatter.title} 
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
