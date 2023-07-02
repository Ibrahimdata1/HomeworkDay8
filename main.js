function clicktoAdd(){
    let result = document.getElementById('box-input-text').value
    let showResult = document.createElement('h2')
    showResult.innerHTML = result
    document.getElementById('list').appendChild(showResult)
}