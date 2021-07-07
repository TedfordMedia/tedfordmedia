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
 
const StyledLink = styled(props => <Link {...props} />)`
    color: black;
    text-decoration: none;
`;

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout noSubscribeForm site={site}>  
        {/* <Hero /> */}
    <h2>Portfolio</h2>
        <Container>
            <Row>  
            {allMdx.edges.map(({ node: post }) => ( 
                <Col key={post.id} lg={6}> 
                    <Card className="mycardpart mb-2 mt-2"> 
                        <Card.Body className="mycardbody">
                            {post.frontmatter.banner && (
                                <Link
                                    aria-label={`View ${post.frontmatter.title} article`}
                                    to={`/${post.fields.slug}`}
                                    >
                                    <Image   
                                        className="zthecard_image" 
                                        fluid={post.frontmatter.banner.childImageSharp.fluid}  
                                    />
                                </Link>
                            )}
                            <Card.Title className="mycardbottombit mytoppadding">
                                <StyledLink
                                    to={'../'+post.frontmatter.slug}
                                    aria-label={`View ${post.frontmatter.title}`}
                                >{post.frontmatter.title}
                                </StyledLink>
                            </Card.Title>
                            <Card.Text className="mycardbottombit">
                                {post.frontmatter.description}{' '}
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
fixed(width: 300, height: 300) {
        ...GatsbyImageSharpFixed
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
