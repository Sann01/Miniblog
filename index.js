const getPosts = async ()=>{
    
    try{
        const response = await fetch("https://api-rest-post-diegocandido.herokuapp.com/postagens/");  
        const resp = await response.json();
        console.log(resp);
        for (let i = 0; i < 6; i++) {
            document.querySelector(`#title${i}`).innerHTML = resp[i].title;
            document.querySelector(`#image${i}`).src = `https://api-rest-post-diegocandido.herokuapp.com${resp[i].thumbImage}`;
            
        }
    }
    catch(error){
        console.log("OCORREU UM ERRO!",error);
    }
}
getPosts();


function buttonSaibaMais(){
            window.location.href = "./noticia.html"; 

            const verMaisButtons = document.querySelectorAll('#texto');
            verMaisButtons.forEach((button, i) => {
                button.addEventListener('click', () => {
                    document.querySelector(`#description${i}`).innerHTML = resp[i].description;
                });
            });
        }
function buttonVoltar(){
    window.location.href = "./index.html";
}