let des = document.getElementById('des').getContext('2d')

let aviao = new Aviao
let aviao1  = new Avioes
let aviao2  = new Avioes

let t1 = new Text()
let t2 = new Text()

document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'a'){
        aviao.dir -= 40
    }else if(e.key === 'd'){
        aviao.dir += 40
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'a'){
        aviao.dir = 0
    }else if(e.key === 'd'){
        aviao.dir = 0
    }
})

function desenha(){

}
function atualiza(){

}
function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
}

setInterval(main,10)