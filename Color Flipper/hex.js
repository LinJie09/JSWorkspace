
window.onload = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



    const btn = document.getElementById('btn')

    btn.addEventListener('click', function () {
        let randomWord = '#'
        for (let i = 0; i < 6; i++) {
            randomWord += hex[click()]
        }

        document.body.style.backgroundColor = randomWord
        document.querySelector(".color").textContent = randomWord

    })

    function click() {
        return Math.floor(Math.random() * hex.length)
    }
}




