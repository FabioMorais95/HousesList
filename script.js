function addHouse(){
    let rua = document.querySelector('input[name="rua"]').value
    let numero = document.querySelector('input[name="numero"]').value
    let area = document.querySelector('input[name="area"]').value

    let novaLista = document.createElement("li")
    novaLista.innerText = `Rua:${rua}\n Nº:${numero}\n${area}m²\n`

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "remover(this)")
    document.getElementById("lista").appendChild(novaLista)
    novaLista.appendChild(removeButton)
}
function remover(button){
    let removerLi = button.parentNode
    document.getElementById("lista").removeChild(removerLi)
}