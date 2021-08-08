import React from 'react' 
import Layout from "../../components/layoutwide"  

const IndexPage = (props) => (   
  <Layout displayHero={false}>   
    <section >
      <div  style={{ height: "100vh", width: "100%",background:"yellow" }}>  
      <iframe title="myframe" style={{ height: "80%", width: "100%" }} src="./unit/index.html"></iframe>
      </div>
    </section> 
  </Layout> 
)
 
export default IndexPage  