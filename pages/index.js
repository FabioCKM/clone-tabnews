function Home(){
    return <h1 id="btn">Larissa clique em mim</h1>
}
export default Home;

let botao = document.getElementById("btn");

botao.addEventListener("click",()=>{
    botao.innerText = "Boa Tarde";
});
