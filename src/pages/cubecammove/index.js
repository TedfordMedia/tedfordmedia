import React from 'react' 
import Layout from "../../components/layoutwide" 
import RobotStarsScene from "../../components/basics/robots/twogltfcammove" 
 

const IndexPage = (props) =>  {

  return (
    <Layout displayHero={false}>   
      <section >
        <div  style={{ height: "500px", width: "100%",background:"yellow" }}>  
            <RobotStarsScene/>    
        </div>
      </section> 
    </Layout> 
  )

}
 
export default IndexPage  