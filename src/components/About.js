import React, { useState } from 'react'

export default function About(props) {

  // const [mystyle,setmystyle]=useState({
  //   // color:props.mode=="dark"?'white':'black',
  //   // backgroundColor:props.mode=='dark'?'black':'white'
  //   color:'black',
  //   backgroundColor:'white'
  // })
  let mystyle={
     color:props.mode==="dark"?'white':'#555759',
    backgroundColor:props.mode==='dark'?'#555759':'white',
    border:'1px solid',
    borderColor:props.mode==="dark"?'white':'#555759'
    // backgroundColor:props.mode==='dark'?'#555759':'white', 
    // color: props.mode==='dark'?'white':'black'
  }
  // const [btntext,setbtntext]=useState('Enable Dark mode')
  // const togglebtn=()=>{
  //   if(mystyle.color=='black'){
  //   setmystyle(
  //    {
  //   color:'white',
  //    backgroundColor:'black',
  //    border:'1px solid white'
  //    })
  //    setbtntext('Enable Light Mode')
  //   }
  //   else{
  //     setmystyle(
  //       {
  //      color:'black',
  //       backgroundColor:'white'
  //       })
  //       setbtntext('Enable Dark Mode')
  //   }
  // }
  return (
    <div className='container' >
      <h1 className='my-5' >About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample"  >
  <div className="accordion-item"  >
    <h2 className="accordion-header"  >
      <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne"  className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" style={mystyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
{/* <button tyle="button" onClick={togglebtn} className='btn btn-primary my-3'>{btntext}</button> */}
    </div>
  )
}
