const foto = document.getElementById('foto')
const reset = document.getElementById('reset')
const yumruk = new Audio('yumruk.mp3')
const resetSes = new Audio('reset.mp3')

let i = 0;

foto.addEventListener('click',function(){

    i=i+1;
    const foto2 = "2.png"
    const foto3 = "3.png"
    const foto4 = "4.png"
    const foto5 = "5.png"
    const foto6 = "6.png"
    const foto7 = "7.png"
    const foto8 = "8.png"
    

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

    
    yumruk.play();
})

reset.addEventListener('click',function(){

 const anafoto = "1.png"
 foto.style.backgroundImage = `url('${anafoto}')`;
 i=0;
 resetSes.currentTime = 0;
 resetSes.play();


})




