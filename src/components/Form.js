import React, { useState } from 'react'

export default function Form(props) {

// convert to upper case
  const handleupclick=()=>{
    console.log('button was clicked');
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper Case","success");
  }

  const handleOnchange=(event)=>{
    console.log('On change');
    setText(event.target.value);
  }
   // convert to lower case

  const handlelowerclick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case","success");
  }
  // clear text
  const handleclearclick=()=>{
    let newtext="";
    setText(newtext);
    props.showAlert("Clear text","success");
  }
  // copy text 
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    // alternative method
    // let text=document.getElementById('mybox');
    // text.select();
    // navigator.clipboard.writeText(text.value);// Used to copy text
    // document.getSelection().removeAllRanges(); // to remove section (Means copy text but not showing that text is copied)
    props.showAlert("Copied to clipboard","success");
    
  }
  // remove extra spaces
  const handleremove=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Remove Extra spaces","success");
    
  }
  // I had added the speak functionality in the TextUtilities app and function is:
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Speak function is enabled","success");
}
    const [text,setText]=useState('');
    // text="hello text here";//Wrong way to change the state
    // setText("Put here your text"); //Right way to change the state
  return (
    <>
    <div className='container'>
        <h1 className='mb-4'>{props.heading}</h1>
      <form>
        <div className="mb-3">
 <textarea className='form-control' value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='light'?'white':'#555759', color: props.mode==='dark'?'white':'black'}} id="mybox" cols="" rows="8"></textarea>
 </div>
  <button disabled={text.length===0}  type='button' className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>
  <button disabled={text.length===0}  type="button" onClick={handleremove} className="btn btn-primary mx-2 my-2">Remove Extra Space</button>
  <button disabled={text.length===0} type='button' className="btn btn-primary mx-2" onClick={handlelowerclick}>Convert to Lowercase</button>
  <button disabled={text.length===0} type='button' className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
  <button disabled={text.length===0} type="button" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  <button disabled={text.length===0} type="button" onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy text</button>

</form>
    </div>
    <div className="container my-5">
      <h1>Your Text summery</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>

      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>

    </div>
    </>
  )
}
