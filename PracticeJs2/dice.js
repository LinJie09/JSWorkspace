console.log('HELLO')



function func(){
    const dice = document.getElementById('dices').value
    const count = document.getElementById('count').value
    const times = document.getElementById('times').value
    const result = document.getElementById('result')
    result.innerHTML="";
    const resultElement = document.createElement('resultElement')

    for(let i=0;i<times;i++){
        let total = 0
        for(let j=0;j<dice;j++){
            const p = document.createElement('p')
            total+=(Math.floor(Math.random()*count) + 1)
            console.log(total)
            p.innerHTML=total
            result.appendChild(p)
        }
        
    }

    
}




