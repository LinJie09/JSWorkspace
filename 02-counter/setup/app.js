
window.onload = () => {
    let count = 0
    const inc = document.getElementById('inc')
    const reset = document.getElementById('reset')
    const dec = document.getElementById('dec')
    const value = document.getElementById('value')

    inc.onclick = function () {
        count++
        if (count > 0) {
            value.style.color = 'green'
        }
        document.querySelector('#value').textContent = count
    }
    dec.onclick = function () {
        count--
        if (count < 0) {
            value.style.color = 'red'
        }
        document.querySelector('#value').textContent = count
    }
    reset.onclick = function () {
        count = 0
        document.querySelector('#value').textContent = count
        value.style.color = '#222'
    }
}