import React, {useState} from 'react'  
   
class Downarrow extends React.Component {

  constructor() {
    super();
    this.state = { hideMe: false };
    this.handleScroll = this.handleScroll.bind(this)   
  }
  
  componentDidMount () {  
    if(typeof window !== undefined){ 
      window.addEventListener('scroll', this.handleScroll);  
    } 
  }

  handleScroll(e) {   
    this.setState({ hideMe: true })
  }

  render () {
    const hideMe = this.state.hideMe; 
 
    let button;
 
    if (hideMe) {
      button = null;
    } else {
      button = <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>;
    }

    return button;
  }
}

export default Downarrow


