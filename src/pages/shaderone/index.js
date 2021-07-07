import React from 'react' 
import Layout from "../../components/layoutwide"  
import LogoTedfordMedia from "../../helpers/Tedmedialogotedb.js";  

const IndexPage = (props) => (   
  <Layout displayHero={false}>   
    <section >
      <div  style={{ height: "100vh", width: "100%",background:"white" }}>  
        <Suspense fallback={null}>   
            <LogoTedfordMedia position={[-.57, -.045, .51]} scale={[140, 140, 140]} castShadow/>  
        </Suspense> 
      </div>
    </section> 
  </Layout> 
)
 
export default IndexPage  