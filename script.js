const foto = document.getElementById('foto')
const reset = document.getElementById('reset')
const yumruk = new Audio('yumruk.mp3')
const resetSes = new Audio('reset.mp3')
const sopa = document.getElementById('sopa')
const sesfoto = document.getElementById('sesfoto')


let kontol = 0;
let i = 0;
let s = 0;






foto.addEventListener('click',function(){
    if(sesfoto.src.includes("ses.png"))
    yumruk.play();
   
    i=i+1;
    const foto2 = "2.png"
    const foto3 = "3.png"
    const foto4 = "4.png"
    const foto5 = "5.png"
    const foto6 = "6.png"
    const foto7 = "7.png"
    const foto8 = "8.png"
    sopa.style.display = "flex";
    setTimeout(() => {
    sopa.style.display = "none";
    }, 1000);

    if(i>=5 && i<10){
        foto.style.backgroundImage = `url('${foto2}')`;
    }
    if(i>=10 && i<15){
        foto.style.backgroundImage = `url('${foto3}')`;
    }
    if(i>=15 && i<20){
        foto.style.backgroundImage = `url('${foto4}')`;
    }
    if(i>=20 && i<25){
        foto.style.backgroundImage = `url('${foto5}')`;
    }
        if(i>=25 && i<30){
        foto.style.backgroundImage = `url('${foto6}')`;
    }
        if(i>=30 && i<35){
        foto.style.backgroundImage = `url('${foto7}')`;
    }
        if(i>=35){
        foto.style.backgroundImage = `url('${foto8}')`;
    }


    
})

reset.addEventListener('click',function(){

 const anafoto = "1.png"
 foto.style.backgroundImage = `url('${anafoto}')`;
 i=0;
 
 if(sesfoto.src.includes("ses.png")){
 resetSes.currentTime = 0;
 resetSes.play();
 }

})

sesfoto.addEventListener('click',function ses(){
    s=s+1;
    if(s%2==1){
     sesfoto.src = "seskapalı.png"
    
    }
    else{
        sesfoto.src = "ses.png"
      
    }

 

})










