const botao = document.querySelector(".transacao__button")


botao.addEventListener("click", function(event){
    event.preventDefault()
    
    //selecionou a tabela
    const tabela = document.querySelector(".extrato__table")

    //cria linha 
    const linha = document.createElement("tr")


    
    //Aqui cria a coluna
    const colunaNome = document.createElement("td")
    const colunaValor = document.createElement("td")   
    const colunaData = document.createElement("td")
   
    const inputName= document.getElementById("transacaoInputName")
    
    //Aqui pega o input 
    const colunaNomeTexto= document.createTextNode(document.getElementById("transacaoInputName").value)
    colunaNome.appendChild(colunaNomeTexto)
    const colunaValorTexto= document.createTextNode(document.getElementById("transacaoInputMoney").value)
    colunaValor.appendChild(colunaValorTexto)
    const colunaDataTexto = document.createTextNode(document.getElementById("transacaoInputDate").value)
    colunaData.appendChild(colunaDataTexto)


    //Aqui cria 
    linha.appendChild(colunaNome)
    linha.appendChild(colunaValor)
    linha.appendChild(colunaData)
   
   
    tabela.appendChild(linha)




})


