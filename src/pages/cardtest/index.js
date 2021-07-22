import React from 'react' 
import Layout from "../../components/Layout" 
import { Container, Row, Col, Card } from 'react-bootstrap'
import { graphql, Link } from 'gatsby' 
import Img from 'gatsby-image';
import styled from '@emotion/styled'
import './mystylingZZ.scss' 
import { css } from '@emotion/core'
const StyledLink = styled(props => <Link {...props} />)`
    color: black;
    text-decoration: none;
`;

const IndexPage = ({data}) => (   

  <Layout displayHero={false}>   

 
        <Container>
            <div className="portfolioheader">
                <h2   css={css`
                  width: 100%;
                  flex-shrink: 0;
                  background: none;
                  padding: 20px 0;
                  padding-bottom: 10px;
                  font-weight: bold;
                  font-size: 38px; 
                `}>
                  Pixi demo
                </h2>  
                <h1>Under construction;</h1> 
            </div>
            <Row>   
                <Col key={'asdasdasd'} lg={6}> 
                    <Card className="mycardpart mb-2 mt-2  " 
                          css={css`
                          padding:0px;     -moz-box-shadow: 10px 10px 5px #ccc;
                          -webkit-box-shadow: 10px 10px 5px #ccc;
                          box-shadow: 10px 10px 5px #ccc;
                          -moz-border-radius:20;
                          -webkit-border-radius:20px;
                          border-radius:15px;
                          padding-bottom:1em;
                          background-color:#edf2f6;
                      `}> 
                        <Card.Body className="mycardbody"  css={css`
                          padding:0px; 
                        `}>
                            <Link
                                aria-label={`View article`}
                                to={`/unitymarsvideos`}
                                >
                                <Img   
                                    className="zthecard_image" 
                                    fluid={data.myTestImageGI.childImageSharp.fluid}  
                                />
                            </Link>
                            <Card.Title className="mycardbottombit mytoppadding">
                                <StyledLink
                                    to={'../unitymarsvideos'}
                                    aria-label={`View Unity Mars Videos`}
                                >
                                  {'MarsVxideos'}
                                </StyledLink>
                            </Card.Title>
                            <Card.Text className="mycardbottombit  ">
                                {'sss.frontmatter.description'}{' '}
                            </Card.Text> 
                        </Card.Body> 
                    </Card>    
                </Col>   
         
        </Row>
        </Container> 
 
  </Layout> 
) 

export default IndexPage  

  // file(relativePath: {eq: "2021/May/followcurve/flyfoljs.png"}) {
  //   id
  //   relativePath
  //   absolutePath
  // }


export const pageQuery = graphql`
  query {
      myTestImageGI:   file(relativePath: {eq: "2021/May/followcurve/flyfoljs.png"}) { 
         childImageSharp {
          fluid(cropFocus: CENTER, maxHeight: 700, maxWidth: 1000, fit: COVER) {
                  ...GatsbyImageSharpFluid 
            }
        }
  }
  }
`