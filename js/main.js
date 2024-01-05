import '../css/nav.css'
import '../css/main.css'
import '../css/video-section.css'
import '../css/cards.css'
import '../css/members.css'
import '../css/form.css'
import '../css/get.css'
import '../css/footer.css'
// import javascriptLogo from '../assets/img/javascript.svg'
// import viteLogo from '../assets/img/vite.svg'
// import { setupCounter } from '../js/counter.js'

window.addEventListener( 'load', () => {
    const form = document.getElementById('form')
    const email = document.getElementById('email')
    
    form.addEventListener( 'submit', (e) =>{
        e.preventDefault()  
        
        const datos = {}
        datos['email'] = email.value
        console.log(datos)

        fieldValidate()
    })

    const fieldValidate = () => {
        const emailValor = email.value.trim();

        if(emailValor === ''){
            failValidate(email, 'Campo vacio')
        }else if(!validaEmail(emailValor)){
            failValidate(email, 'El email no es valido')
        }else{
            okValidate(email, '¡El email se ha enviado!')
            setTimeout(() => {
                location.reload()
            }, 3000)
        }
    } 

    const okValidate = (input, msje) =>{
        const formControl = input.parentElement
        formControl.className = 'input-ok'
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje
    }

    const failValidate = (input, msje) =>{
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje
        formControl.className = 'input-fail'
    }

    const validaEmail = (email) =>{
        return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
})