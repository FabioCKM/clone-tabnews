import { useState } from "react";

function Home(){
    const [texto, textoClick] = useState("Larissa clique em mim");

    function tratarTexto(){
        setTexto("67");
        setTexto.current.style.color = "red";
    }
    return(
        <h1 onClick={setTexto}>{texto}</h1>
    ); 

}
export default Home;
