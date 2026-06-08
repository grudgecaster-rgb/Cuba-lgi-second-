function renderOpenSequence() {
    const wrapper = document.getElementById('envelope-wrapper');
    const letter = document.getElementById('letter-card');

    wrapper.classList.add('open');

    setTimeout(() => {
        letter.classList.remove('hidden');
        letter.classList.add('slide-up');
        startPeonyRain();
    }, 800);
}

function startPeonyRain() {
    const bg = document.getElementById('heart-bg');
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.classList.add('peony-petal');
        
        // Cukup guna kelopak atau kilauan kecil sebab background dah penuh bunga
        petal.innerText = ['🌸', '✨', '💕'][Math.floor(Math.random() * 3)];
        
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 3 + 4) + 's'; 
        
        bg.appendChild(petal);

        setTimeout(() => petal.remove(), 6000);
    }, 400); 
}
