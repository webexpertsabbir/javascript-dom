const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '3px solid green';
    section.style.margin = '10px';
    section.style.borderRadius = '10px';
    section.style.padding = '10px';
    section.style.backgroundColor = 'yellow';  
    section.style.color = 'red';  
    section.style.fontWeight = '900';  
}

// const placeBg = document.getElementById('bg');
// placeBg.style.backgroundColor = 'black';

const styleBg = document.getElementById('bg');
styleBg.classList.add('text-center');
styleBg.classList.add('footer-bg');
styleBg.style.color = '#fff';