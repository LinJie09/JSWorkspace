
window.onload = () => {
    const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

    const btn = document.getElementById('btn')

    btn.addEventListener('click', function () {
        const randomNumber = click()

        document.body.style.backgroundColor = colors[randomNumber]
        document.querySelector(".color").textContent = colors[randomNumber]

    })

    function click() {
        return Math.floor(Math.random() * colors.length)
    }
}