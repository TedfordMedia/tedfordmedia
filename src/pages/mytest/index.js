import React from 'react' 
import Layout from "../../components/layoutwide" 
import TheGym from "../../components/gym"; 

const IndexPage = (props) => (   
  <Layout displayHero={false}>   
    <section >
      <div  style={{ height: "100vh", width: "100%",background:"yellow" }}>  
        <TheGym forcedHeight={'80vh'}/>
      </div>
    </section> 
  </Layout> 
)
 
export default IndexPage  