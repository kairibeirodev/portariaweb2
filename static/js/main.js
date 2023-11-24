//Toggle para modo escuro
const mainPage = document.querySelector('html')
const btnDarkMode = document.querySelector('#darkmode-toggle')

btnDarkMode.addEventListener('click',()=>{
    mainPage.classList.toggle('dark')
})