function hideButton(element){
    
    const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
    const paddingTop = parseFloat(window.getComputedStyle(element).paddingTop);
    const paddingBottom = parseFloat(window.getComputedStyle(element).paddingBottom);

    const elementHeight = element.clientHeight - paddingTop - paddingBottom;
    const lines = Math.round(elementHeight / lineHeight);

    if (lines > 2) {
        const divPai = element.closest('#info-container'); 

        const button = document.createElement('button');
        button.id = 'expand-button';
        button.classList.add('absolute', 'top-1/2', 'right-[36px]');

        const img = document.createElement('img');
        img.src = 'assets/arrow-icon.svg';
        img.alt = 'Ícone de seta';

        button.appendChild(img);
        divPai.appendChild(button);

        button.addEventListener('click', () => {
            const respectiveDiv = button.parentElement;
            respectiveDiv.classList.toggle('h-fit');
            respectiveDiv.classList.toggle('h-[140px]');
            
            if(respectiveDiv.classList.contains('h-fit')){
                img.src = 'assets/arrow-icon-2.svg';
            }
            else
                img.src = 'assets/arrow-icon.svg';
        });
    }
}

const infoTexts = document.querySelectorAll('.info-text');
infoTexts.forEach(hideButton);