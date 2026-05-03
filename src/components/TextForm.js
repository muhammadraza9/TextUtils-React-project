import React, {useState} from 'react'



export default function TextForm(props) {
               
         const handleUpClick = ()=>{
          //console.log("Uppercase was Clicked!" + text)
              let newText = text.toLocaleUpperCase();
              setText(newText)

             props.showAlert("Converte to UpperCase !" , "success");

         }

         const handleLoClick = ()=>{
          //console.log("Lowercase was Clicked!" + text)
              let newText = text.toLocaleLowerCase();
              setText(newText)

                          props.showAlert("Converte to LowerCase !" , "success");

         }

         const handleClearClick = ()=>{
          //console.log("Lowercase was Clicked!" + text)
              let newText = '';
              setText(newText)

                       props.showAlert("Text Cleared !" , "success");

         }
       
       
          const handleOnChange = (event)=>{
            //console.log("On Change");
            setText(event.target.value);
          }

  const [ text , setText] = useState('');

      // text = "new text";  wrong way to change the state
      // setText = "new text" correct way to change the state

  return (

    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#183125'}}>
       
          <h1>{props.heading}</h1>     
         <div className="mb-3">
            <label htmlFor="myBox" className="form-label"> </label>
             <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="10" ></textarea>
            </div>
            
            <button disabled = {text.length === 0}  className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert into UpperCase</button>
            <button disabled = {text.length === 0}  className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert into LowerCase</button>
            <button disabled = {text.length === 0}  className="btn btn-success mx-1 my-1" onClick={handleClearClick}> Clear Text</button>


    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#183125'}}>
        <h2>Your Text Summary</h2>
        <p>
        {text.trim().split(/\s+/).filter(Boolean).length} Words and {text.length} Characters
        </p>

       <p>{0.008 * text.split('').length}</p>
       <h2>Preview</h2>
       <p>{text.length > 0 ? text: "Nothing to Preview...."}</p>
</div>

    </>
  );
}
