const buttonwidth = 80;
const buttonheight = 50;


const maxwidth = window.innerWidth - buttonwidth;
const maxheight = window.innerHeight - buttonheight;
window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('no');
    const button1 = document.getElementById('yes');
    const notop = document.getElementById('not');

    button.addEventListener('mouseover',()=>{
        button.style.left = Math.floor(Math.random()*(maxwidth + 1)) + 'px';
        notop.style.opacity = 0.9;
    })
    button.addEventListener('mouseover',()=>{
        button.style.top = Math.floor(Math.random()*(maxheight + 1)) + 'px';
    })
    button1.addEventListener('mouseover',()=>{
        notop.style.opacity = 0;
    })
})

