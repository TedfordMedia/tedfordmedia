import React from "react";
import ReactDOM from "react-dom";
import { Stage } from "react-pixi-fiber";
import RotatingBunny from "./RotatingBunny";
import { css } from '@emotion/core'
const height = 450;
const width = 600;
const OPTIONS = {
  backgroundColor: 0x1099bb,
  height: height,
  width: width
};


function MyPage(props){
     
    return (
      <>    
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
                  Pixi Test
                </h2>  
                <h1  css={css` 
                  font-size: 28px; 
                `}>This site is currently under construction;</h1> 
            </div> 
        <Stage options={OPTIONS}>
            <RotatingBunny x={width / 2} y={height / 2} />
        </Stage> 
        </>
    )
}
 
export default MyPage  