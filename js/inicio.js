function entrarjanela() {
  const janela = document.createElement("div");
  janela.className = "elementos";
  janela.innerHTML =
    "<strong> Teste</strong><br><br><button onclick='this.parentElement.remove()'>Fechar</buttoun>";
}
//============================================================/


//==================Header=======================================/
window.addEventListener('scroll',()=>{
  const headerLevel = header.scrollHeight;
  if(window.scrollY>headerLevel){
   
    header.classList.add('fixar')
  }
  else{
     
    header.classList.remove('fixar')
    header.style.transition ='.5s'
  }
  if(window.scrollY <= 2560){
     header.classList.add('fixar')
  }
 
  else{
    navbarListMobile.classList.remove('activar')
    iconbars.classList.add('fa-bars')
 header.classList.remove('fixar')
  }
})
//============================================================/

//============================================================/
// Troca de ícone eye
const iconSenha = document.querySelector(".btnsenha");
const iconOlho = iconSenha.querySelector("i");

// Mais tarde irei corrir
iconSenha.addEventListener("click", () => {
  if (iconOlho.classList.contains("fa-eye-slash")) {
    iconOlho.classList.remove("fa-eye-slash");
    iconOlho.classList.add("fa-eye");
  } else {
    iconOlho.classList.add("fa-eye-slash");
    iconOlho.classList.remove("fa-eye");
  }
});
//============================================================/
// Manipulação do botão do menu e navbarListMobile

const menu = document.querySelector(".menu");
const iconbars = menu.querySelector("i");
const navbarListMobile = document.getElementById("navbarListMobile");
menu.addEventListener("click", () => {
  navbarListMobile.style.transition = ".8s";
  navbarListMobile.classList.toggle("activar");
  if (iconbars.classList.contains("fa-bars")) {
    iconbars.classList.remove("fa-bars");
    iconbars.classList.add("fa-x");
  } else {
    iconbars.classList.add("fa-bars");
    iconbars.classList.remove("fa-x");
  }
});

const itemMobile = document.querySelectorAll(".itemMobile");
itemMobile.forEach((itemMobiles) => {
  itemMobiles.addEventListener("click", () => {
    navbarListMobile.classList.remove("activar");
    iconbars.classList.add("fa-bars");
  });
});

//============================================================/

//============================================================/
// Manipulação de login
const header = document.querySelector(".header");
const sombra = document.querySelector(".sombra");
const btnHeader = document
  .querySelector(".btnHeader")
  .addEventListener("click", () => {
    sombra.style.display = "flex";
    header.style.transform = "translateY(-300px)";
    header.style.transition = ".5s";
    navbarListMobile.classList.remove("activar");
  });
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const btnCriarConta = document
  .querySelectorAll(".btnCriarConta")
  .forEach((criarConta) => {
    criarConta.addEventListener("click", () => {
      form1.classList.toggle("form1");
      form2.classList.toggle("form2");
      form1.style.transition = ".3s";
      form2.style.transition = ".3s";
    });
  });
  const loader = document.querySelector('.loader')
  const boxForm = document.querySelector('.boxForm')
  const buttoncriar = document.getElementById('buttoncriar')
  const buttonEntrar = document.getElementById('buttonEntrar')
  buttoncriar.addEventListener('click',(event)=>{
    event.preventDefault()
    loader.style.display = 'flex'
    boxForm.style.display = 'none'
    setTimeout(()=>{
       header.style.transform = "translateY(0)";
      loader.style.display = 'none'
      sombra.style.display = 'none'
       boxForm.style.display = 'flex '
    },6000)
  })

buttonEntrar.addEventListener('click',(event)=>{
  event.preventDefault()
    loader.style.display = 'flex'
    boxForm.style.display = 'none'
    setTimeout(()=>{
      loader.style.display = 'none'
       header.style.transform = "translateY(0)";
        sombra.style.display = 'none'
        boxForm.style.display = 'flex '
    },6000)
  })

//============================================================/
//============================================================/
// Pegar ano actual

const anoActual = new Date();
const data = anoActual.getFullYear();
const ano = document.querySelector(".ano");
ano.textContent = data;
//============================================================/
