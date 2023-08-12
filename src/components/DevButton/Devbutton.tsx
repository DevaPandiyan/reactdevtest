import React from 'react';

interface ButtonProps{
    label:string;
}
const Devbutton =(props:ButtonProps)=>{
    return <button> {props.label}</button>
}
export default Devbutton; 