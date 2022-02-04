
window.onload = () => {
    let count = 0
    const inc = document.getElementById('inc')
    const reset = document.getElementById('reset')
    const dec = document.getElementById('dec')

    inc.onclick = function () {
        count += 1
        document.querySelector('#value').textContent = count
        document.getElementById('value').style.color = 'green'
    }
    dec.onclick = function () {
        count -= 1
        document.querySelector('#value').textContent = count
        document.getElementById('value').style.color = 'red'
    }
    reset.onclick = function(){
        count = 0
        document.querySelector('#value').textContent = count
        document.getElementById('value').style.color = '#222'
    }
}