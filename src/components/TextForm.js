import React, { useState } from "react";


console.log("In text")

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("UpperCase Clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upercase",'success')
  };

  const handleLowerClick = () => {
    // console.log("UpperCase Clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase",'success')
  };
  const clearClick = () => {
    // console.log("UpperCase Clicked")
    // let newText = text.toLowerCase();
    setText("");
    props.showAlert("Cleared",'success')
  };
  const copyClick = () => {
    var text=document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to Clipboard",'success')

  };
  const spacesEx = () => {
   let newText = text.split(/[ ]+/)
   setText(newText.join(" "))
   props.showAlert("Extra space Removed",'success')

  };
  const handleOnChange = (event) => {
    // console.log("UpperCase Clicked")
    setText(event.target.value);
  };

  return (
    <>
      
      <div className="mb-4 container" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h3>{props.heading}</h3>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}  style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'#042743'
      }}></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary my-2 mx-1"
          onClick={handleLowerClick}
        >
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={clearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={copyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={spacesEx}>
          Remove ExtraSpaces
        </button>
      </div>
      <div className="container my-3 " style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary </h2>
        <p>
          {text.split(" ").length} Words , {text.length} Characters
        </p>
        <p>Will take {text.split(" ").length * 0.08} minutes to read </p>
        <h3>Preview</h3>
        <p>{text.length === 0 ?"Enter Your text in above box to preview":text }</p>
      </div>
    </>
  );
}
