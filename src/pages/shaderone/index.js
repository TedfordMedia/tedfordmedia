import React , {Suspense} from 'react';
import Layout from "../../components/Layout"  
import LogoTedfordMedia from "../../helpers/Tedmedialogotedb.js";  

const IndexPage = (props) => (   
  <Layout>   
    <section >
      <div  style={{ height:"calc(100vh-182.7344px) ", width: "100%",background:"white" }}>  
        <Suspense fallback={null}>   
            <LogoTedfordMedia position={[-.57, -.045, .51]} scale={[140, 140, 140]} castShadow/>  
        </Suspense> 
      </div>
    </section> 
  </Layout> 
)
 
export default IndexPage  