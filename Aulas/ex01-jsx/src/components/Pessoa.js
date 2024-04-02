import React  from "react";

export default function Pessoa(props){
    return(
        <>
        <img src={props.foto} alt={props.nome}></img>
        <h2>Nome: {props.nome}</h2>
        <p>Idade: {props.idade} anos</p>
        <p>profissao: {props.profissao}</p>
        </>
    )
}