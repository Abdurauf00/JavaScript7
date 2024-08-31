//document.querySelector('') - делает подключение к указанному элементу
// innerHTML - отдает то что хранится внутри элемента


const body = document.body
const dsa = document.querySelector('.light__red')
const yel = document.querySelector('.light__yellow')
const gre = document.querySelector('.light__green')
const blu = document.querySelector('.light__blue')
const can = document.querySelector('.light__cancel')


 dsa.addEventListener('click',() => {
    if(dsa == dsa) {
     body.style.background = 'red'
     body.style.transition = 'background-color 0.5s'
    }
 }) 

 yel.addEventListener('click',() => {
    if(yel == yel) {
     body.style.background = 'yellow'
     body.style.transition = 'background-color 0.5s'
    }
 }) 

 gre.addEventListener('click',() => {
    if(gre == gre) {
     body.style.background = 'green'
     body.style.transition = 'background-color 0.5s'
    }
 }) 

 blu.addEventListener('click',() => {
    if(blu == blu) {
     body.style.background = 'blue'
     body.style.transition = 'background-color 0.5s'
    }
 })  

 can.addEventListener('click',() => {
    if(can == can) {
     body.style.background = 'white'
     body.style.transition = 'background-color 0.5s'
    }
 }) 


 const squ = document.querySelectorAll('.square');
 const bla = document.querySelectorAll('.black');
 const pur = document.querySelectorAll('.purple');
 const bro = document.querySelectorAll('.brown');
 const ora = document.querySelectorAll('.orange');
 const canc = document.querySelectorAll('.cancel');
 

 function axaxaxa(color) {
     squ.forEach(el => {
         el.style.background = color
         el.style.transition = 'background-color 0.5s'
     })
 }
 
 bla.forEach(el => {
     el.addEventListener('click', () => {
        axaxaxa('black')
     })
 })
 
 pur.forEach(el => {
     el.addEventListener('click', () => {
        axaxaxa('purple')
     })
 })
 
 bro.forEach(el => {
     el.addEventListener('click', () => {
        axaxaxa('brown')
     })
 })
 
 ora.forEach(el => {
     el.addEventListener('click', () => {
        axaxaxa('orange')
     })
 })
 
 canc.forEach(el => {
     el.addEventListener('click', () => {
        axaxaxa('white');
     })
 })