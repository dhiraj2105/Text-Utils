import React, { useState } from "react";

export default function TextField(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };

    const handleUpperClick = () => {
        console.log("Upper converter clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success");
    };
    const handleLowerClick = () => {
        console.log("Lower converter clicked");
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase", "success");
    };
    const handleCopyText = () => {
        console.log("Copy Text Clicked");
        let copyText = document.getElementById('textbox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Copied", "success");
    }
    const handleExtraSpace = () => {
        console.log("Extra space remover clicked");
        let extraSpace = text.split(/[ ]+/);
        setText(extraSpace.join(" "));
        props.showAlert("Extra Space has been removed", "success");
    }
    const handleClearText = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    // const handleCapitalFirstletter = () =>{
    //     console.log("First letter capital button clicked");
    //     let oldText = document.getElementById('textbox');
    //     let newText = oldText.charAt(0).toUpperCase() + oldText.slice(1);
    //     console.log(newText);
    // }

    return (
        <>
            <div
                className="container"
                style={{ color: props.mode === "dark" ? "white" : "dark" }}
            >
                <h2 className="my-2">{props.heading}</h2>
                <div className="my-3">
                    <textarea
                        className="form-control"
                        style={{
                            backgroundColor: props.mode === "dark" ? "#364150" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                        }}
                        rows="8"
                        id="textbox"
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button
                    className="btn mybutton"
                    style={{
                        color: props.mode === "dark" ? "white" : "black",
                        backgroundColor: props.mode === "dark"?"#c75d70":"lightgreen"
                    }}
                    onClick={handleUpperClick}
                >
                    Convert to UpperCase
                </button>
                <button
                    className="btn mx-2 mybutton"
                    style={{
                        color: props.mode === "dark" ? "white" : "black",
                        backgroundColor: props.mode === "dark"?"#c75d70":"lightgreen"
                    }}
                    onClick={handleLowerClick}
                >
                    Convert to LowerCase
                </button>
                <button
                    className="btn mx-2 mybutton"
                    style={{
                        color: props.mode === "dark" ? "white" : "black",
                        backgroundColor: props.mode === "dark"?"#c75d70":"lightgreen"
                    }}
                    onClick={handleCopyText}
                >
                    Copy Text
                </button>
                <button
                    className="btn mx-2 mybutton"
                    style={{
                        color: props.mode === "dark" ? "white" : "black",
                        backgroundColor: props.mode === "dark"?"#c75d70":"lightgreen"
                    }}
                    onClick={handleExtraSpace}
                >
                    Remove extra spaces
                </button>
                <button
                    className="btn mx-2 mybutton"
                    style={{
                        color: props.mode === "dark" ? "white" : "black",
                        backgroundColor: props.mode === "dark"?"#c75d70":"lightgreen"
                    }}
                    onClick={handleClearText}
                >
                    Clear Text
                </button>
                {/* <button
                    className="btn my-2 mybutton"
                    style={{
                        color: props.mode === "dark" ? "white" : "black",
                        backgroundColor: props.mode === "dark"?"#c75d70":"lightgreen"   
                    }}
                    onClick={handleCapitalFirstletter}
                >
                    Capital first letters
                </button> */}
                
                
                <div className={`my-3 text-${props.mode==="dark"?"white":"black"}`}>
                    <h2>Your text summery</h2>
                    <p>{text.split(' ').length} words, {text.length} characters</p>
                    <h3>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}
