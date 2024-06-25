let btn1=document.querySelector(".btn1")
let ga=document.querySelector(".ga");
let btn2=document.querySelector(".btn2");
let phd=document.querySelector("#ph");
let btn3=document.querySelector(".btn3");
let con=document.querySelector("#con")
let intro=document.querySelector(".intro");
let btn5=document.querySelector(".btn5");
let pat=document.querySelector("#pat");
let btn4=document.querySelector(".btn4");
let pro=document.querySelector(".pro");
let ext=document.querySelector(".ext");
let res=document.querySelector("#Res");
let btns=document.querySelectorAll("#btn");

for(let x=0;x<btns.length;x++){
    btns[x].addEventListener('click',function(){
        for(let y=0;y<btns.length;y++){
            if(y==x){
                btns[y].classList.add('active');
            }
            else{
                btns[y].classList.remove('active');
            }
        }
    })
}
btn1.addEventListener('click',function(){
    ga.classList.toggle('active');
    ph.classList.remove('active');
    con.classList.remove('active');
    intro.classList.add('active');
    // res.classList.add('active');
    btn1.classList.toggle('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
})
btn2.addEventListener('click',function(){
    ph.classList.toggle('active');
    ga.classList.remove('active');
    con.classList.remove('active');
    intro.classList.add('active');
    // res.classList.add('active');
    btn1.classList.remove('active');
    btn2.classList.toggle('active');
    btn3.classList.remove('active');
})
btn3.addEventListener('click',function(){
    ph.classList.remove('active');
    ga.classList.remove('active');
    con.classList.toggle('active');
    intro.classList.add('active');
    // res.classList.add('active');
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.toggle('active');
})
btn4.addEventListener('click',function(){
    pro.classList.toggle('active');
    pat.classList.remove('active');
    ext.classList.add('active');
    // res.classList.add('active');
    btn4.classList.toggle('active');
    btn5.classList.remove('active');
})
btn5.addEventListener('click',function(){
    pat.classList.toggle('active');
    pro.classList.remove('active');
    ext.classList.add('active');
    // res.classList.add('active');
    btn4.classList.remove('active');
    btn5.classList.toggle('active');
})

let btn6=document.querySelector('.btn6'); 
let my=document.querySelector('.my');
let btn7=document.querySelector('.btn7');
let my1=document.querySelector('.my1');
let btn8=document.querySelector('.btn8');
let my2=document.querySelector('.my2');
let btn9=document.querySelector('.btn9');
let my3=document.querySelector('.my3');
let btn10=document.querySelector('.btn10');
let my4=document.querySelector('.my4');
let btn11=document.querySelector('.btn11');
let my5=document.querySelector('.my5');
let btn12=document.querySelector('.btn12');
let my6=document.querySelector('.my6');
let ion=document.querySelector('.ion');
btn6.addEventListener('click',function(){
    btn6.classList.toggle('active');
    my1.classList.remove('active');
    my.classList.toggle('active');
    my2.classList.remove('active');
    my3.classList.remove('active');
    my4.classList.remove('active');
    my5.classList.remove('active');
    my6.classList.remove('active');
    btn7.classList.remove('active');
    btn8.classList.remove('active');
    btn9.classList.remove('active');
    btn10.classList.remove('active');
    btn11.classList.remove('active');
    btn12.classList.remove('active');
    ion.classList.add('active');
})
btn7.addEventListener('click',function(){
    btn6.classList.remove('active');
    my.classList.remove('active');
    my1.classList.toggle('active');
    my2.classList.remove('active');
    my3.classList.remove('active');
    my4.classList.remove('active');
    my5.classList.remove('active');
    my6.classList.remove('active');
    btn7.classList.toggle('active');
    btn8.classList.remove('active');
    btn9.classList.remove('active');
    btn10.classList.remove('active');
    btn11.classList.remove('active');
    btn12.classList.remove('active');
    ion.classList.add('active');
})

btn8.addEventListener('click',function(){
    my2.classList.toggle('active');
    btn6.classList.remove('active');
    my.classList.remove('active');
    my1.classList.remove('active');
    my3.classList.remove('active');
    my4.classList.remove('active');
    my5.classList.remove('active');
    my6.classList.remove('active');
    btn7.classList.remove('active');
    btn8.classList.toggle('active');
    btn9.classList.remove('active');
    btn10.classList.remove('active');
    btn11.classList.remove('active');
    btn12.classList.remove('active');
    ion.classList.add('active');
})

btn9.addEventListener('click',function(){
    my2.classList.remove('active');
    btn6.classList.remove('active');
    my.classList.remove('active');
    my1.classList.remove('active');
    my3.classList.toggle('active');
    my4.classList.remove('active');
    my5.classList.remove('active');
    my6.classList.remove('active');
    btn7.classList.remove('active');
    btn8.classList.remove('active');
    btn9.classList.toggle('active');
    btn10.classList.remove('active');
    btn11.classList.remove('active');
    btn12.classList.remove('active');
    ion.classList.add('active');
})

btn10.addEventListener('click',function(){
    my2.classList.remove('active');
    btn6.classList.remove('active');
    my.classList.remove('active');
    my1.classList.remove('active');
    my3.classList.remove('active');
    my4.classList.toggle('active');
    my5.classList.remove('active');
    my6.classList.remove('active');
    btn7.classList.remove('active');
    btn8.classList.remove('active');
    btn9.classList.remove('active');
    btn10.classList.toggle('active');
    btn11.classList.remove('active');
    btn12.classList.remove('active');
    ion.classList.add('active');
})

btn11.addEventListener('click',function(){
    my2.classList.remove('active');
    btn6.classList.remove('active');
    my.classList.remove('active');
    my1.classList.remove('active');
    my3.classList.remove('active');
    my4.classList.remove('active');
    my5.classList.toggle('active');
    my6.classList.remove('active');
    btn7.classList.remove('active');
    btn8.classList.remove('active');
    btn9.classList.remove('active');
    btn10.classList.remove('active');
    btn11.classList.toggle('active');
    btn12.classList.remove('active');
    ion.classList.add('active');
})

btn12.addEventListener('click',function(){
    my2.classList.remove('active');
    btn6.classList.remove('active');
    my.classList.remove('active');
    my1.classList.remove('active');
    my3.classList.remove('active');
    my4.classList.remove('active');
    my5.classList.remove('active');
    my6.classList.toggle('active');
    btn7.classList.remove('active');
    btn8.classList.remove('active');
    btn9.classList.remove('active');
    btn10.classList.remove('active');
    btn11.classList.remove('active');
    btn12.classList.toggle('active');
    ion.classList.add('active');
})

let i=document.querySelector('.i');
let nv=document.querySelector('.nv');
let e=document.querySelector('#e');
let xp=document.querySelector('.xp');
let q=document.querySelector("#q");
let ual=document.querySelector('.ual');
i.addEventListener('click',function(){
    xp.classList.remove('active');
    nv.classList.toggle('active');
    ual.classList.remove('active');
})

e.addEventListener('click',function(){
    xp.classList.toggle('active');
    nv.classList.remove('active');
    ual.classList.remove('active');
})

q.addEventListener('click',function(){
    xp.classList.remove('active');
    nv.classList.remove('active');
    ual.classList.toggle('active');
})