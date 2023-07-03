const inputBox = document.getElementById('texthere')
const listContainer = document.getElementById('list-container')

function addTask(){
    if (inputBox.value === ''){
        alert('Write SOmethings!')
    }else{
        let newElement = document.createElement('li')
        newElement.innerHTML = inputBox.value
        listContainer.appendChild(newElement)
        let del = document.createElement('span')
        del.innerHTML = '\u00d7'
        newElement.appendChild(del)
    }
    inputBox.value = ''
}
listContainer.addEventListener('click',function(event){
    if (event.target.tagName === 'span'){
        e.target.parentELement.remove()
    }
})