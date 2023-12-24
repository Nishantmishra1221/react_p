import React , {useState} from "react";



export default function Textform(props) {

const handleUpclick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase()
     setText(newText) 
     props.showAlert("converted to upper case", "Success" );
}
const handleLowerclick = () =>{
    console.log("Lower was clicked" + text);
    let newText = text.toLowerCase()
     setText(newText) 
     props.showAlert("converted to Lower case", "Success" );
}
const handleclearclick = () =>{
    console.log("clear was clicked" + text);
    let newText = ""
     setText(newText) 
}

const handleOnChange = (event) =>{
   
    setText(event.target.value)
    console.log("onchange")

}
    
const [text, setText] = useState(''); 

  return ( 
    <>
       <div className="container" >
       <div className="mb-3">
        <h1 className="Container" >Enter Text To analyze -</h1>
         
        <textarea
          className="form-control" value={text}
          id="exampleFormControlTextarea1"
          rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mb-3  mx-2 " onClick={handleUpclick}>Convert to Upper Case</button>
      <button className="btn btn-primary mb-3 mx-2 " onClick={handleLowerclick}>Convert to Upper Case</button>
      <button className="btn btn-primary mb-3 mx-2 " onClick={handleclearclick}>Clear</button>
      </div>

      <div className="container"  style={{color: props.mode ==='dark'?'white':'black'}}>
       
        <h1>Your summery status </h1>
         <p style={{color: props.mode ==='dark'?'white':'black'}}>{text.split(" ").length - 1} Words and  {text.length} Character </p>
         <p style={{color: props.mode ==='dark'?'white':'black'}}>{text.split(" ").length * 0.008}</p>
         <p style={{color: props.mode ==='dark'?'white':'black'}}>{text.length>0?text:"Enter something to prview your code "}</p>
  
      </div>
      </>
  );
}



// hooks is new in react 
// text ko update function use kar ke karana padhega 