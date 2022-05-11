//Script por Adriel

var botaoModal= document.getElementById("botaoModal")
var txtModal= document.getElementById("txtModal")

var Usuário= document.getElementById("Usuário")
var Senha= document.getElementById("Senha")

function autenticar(event){
  event.preventDefault()


if(Usuário.value == "admim" && Senha.value == "123"){
  txtModal.className = "text-success"
  txtModal.innerText = "Usuário Logado com Sucesso!"
  Usuário.value = ""
  Senha.value = ""
}
else {
  txtModal.className = "text-danger"
  txtModal.innerText = "Usuário ou Senha incorretos!"
  Usuário.value = ""
  Senha.value = ""
}

botaoModal.click()


}