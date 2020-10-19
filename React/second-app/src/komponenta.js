import React, {useState} from 'react'

export var Titel=()=> {
    const [text, setText] = useState("Another random text");


    const changeit= () => {
        if(text== "Another random text"){
        setText("Hello there")
    }
    else {
        setText("Another random text")
    }
    }
return (
<React.Fragment>
<h1>{text}</h1>
<button onClick={changeit}>click here</button>
</React.Fragment>  
)
}


