// 九九乘法表

window.onload = () => {
    //write your code here
    const table = document.getElementById('form')
    for (let i = 1; i <= 9; i++) {
        const tr = document.createElement('tr')
        table.appendChild(tr)
        for (let j = 1; j <= 9; j++) {
            const td = document.createElement('td')
            mult = (i + '*' + j + '=' + i * j).toString()
            td.innerHTML = mult
            tr.appendChild(td)
        }
    }
    
    
    
}







