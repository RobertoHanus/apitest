import { useState } from 'react';

const InputTerm = (props) => {
    const [inputText, setInputText] = useState("Peter");

    const searchClick = () => {
        props.onInputSearchRequest(inputText);
    }

    return (
        <div>
            <input type={"text"} placeholder={"Ingrese usuario a buscar"} onChange={(e) => { setInputText(e.target.value); }}></input>
            <button onClick={searchClick}>Search</button>
        </div>
    );
}

export default InputTerm;

