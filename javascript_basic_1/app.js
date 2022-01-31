const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.getElementById('color')

btn.addEventListener('click',function(){
    const randomNumber = click()
})

function click(){
    const result = Math.floor(Math.random()*colors.length)
}