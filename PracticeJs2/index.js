// 九九乘法表

let i ,j,mult
let f1 = document.getElementById('form')
let tr = document.createElement('t1')
let td = document.createElement('d1')
for ( i =1;i<=9;i++)
{
    for( j=1;j<=9;j++)
    {
        mult = (i+'*'+j+'='+i*j)
    }
}
const hThree = document.createElement('h3')
const text = document.createTextNode('Ha man')
hThree.appendChild(text)
const app = document.getElementById('app')
app.appendChild(hThree)



/*function Mult ()
{   
        for (let i =1;i<=9;i++)
    {
            for(let j=1;j<=9;j++)
            {
                console.log(i+'*'+j+'='+i*j)
            }
    }
}
Mult()*/





