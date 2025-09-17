const input = document.querySelector ('#itemList') //cria constante [input = nome da constante]
const Button = document.querySelector ('#ButtonAdd')
const itemList = document.querySelector ('#ListOff')

Button.addEventListener('click',()=>{ // Se o botão clicar
    const itemText = input.value.trim(); //Trim remove espaços em branco !
    if(itemText){ // Verifica se você digitou ou se tem algo dentro do input
        const listItem = document.createElement('li'); //Cria um novo item [lista]
        listItem.innerHTML= // Ele lista o item e adciona o botão
        ` 
        ${itemText} 
        <button class="deleteButton">Excluir</button>
        ` //item text= insere um texto
          // button class= cria uma classe para o botão 'excluir'
        itemList.appendChild(listItem) //Ele adciona um novo item dentro da lista
        input.value = '';  //Ele muda o valor para algo [nada]
        
        const deleteButton = listItem.querySelector ('.deleteButton')

        deleteButton.addEventListener('click',()=>{ // Add Event = ele verifica um evento que ocorreu
        listItem.remove() 
        })
    } else {
        alert ('Por favor adcione um item na caixa de texto !')
    }
    
})