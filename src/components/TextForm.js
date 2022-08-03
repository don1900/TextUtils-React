import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        // console.log('Uppercase Was Clicked : ' + text);
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length===0){
            props.showAlert('Enter something to convert','warning')
        }else{
        props.showAlert('Converted to uppercase!','success')
    }
    }
    const handleLowClick = () => {
        // console.log('LoweCase Was Clicked : ' + text);
        let newText = text.toLowerCase();
        setText(newText);
        if(text.length===0){
            props.showAlert('Enter something to convert','warning')
        }else{
            props.showAlert('Converted to lowercase!','success')
    }}
    const handleReverseClick = () => {
        // console.log('ReverseClick Was Clicked : ' + text);
        let splitString = text.split('');
        let reversedString = splitString.reverse();
        let newText = reversedString.join('');
        setText(newText);
        if(text.length===0){
            props.showAlert('Enter something to reverse','warning')
        }else{
            props.showAlert('Reversed the text!','success')
    }}
    const handleOnChange = (event) => {
        // console.log('Handle On Change')
        setText(event.target.value)
    }
    return (
        <>
            <div className='container'>
                <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea id="myBox" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey',color: props.mode === 'light' ? 'black' : 'white'}} value={text} placeholder="Enter Text Here" onChange={handleOnChange} className="form-control" rows="8" ></textarea>
                </div>
                <button /*style={{color:props.mode==='light'?'white':'black'}}*/ className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button /*style={{color:props.mode==='light'?'white':'black'}}*/ className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
                <button /*style={{color:props.mode==='light'?'white':'black'}}*/ className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse The Text</button>
            </div>
            <div className="container my-3">
                <h1 style={{color:props.mode==='light'?'black':'white'}}>Your Text Summary</h1>
                <p style={{color:props.mode==='light'?'black':'white'}}>{text.length>0?text.trim().split(' ').length:0} words, {text.length} characters</p>
                <p style={{color:props.mode==='light'?'black':'white'}}>{text.length>0?0.008 * text.split(' ').length:0} Minutes Is Required For Reading This</p>
                <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview</h2>
                <p style={{color:props.mode==='light'?'black':'white'}}>{text.length>0?text : 'Your Text Will Be Previewed Here'}</p>
            </div>
        </>
    )
}
