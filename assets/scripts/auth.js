const authPage = document.querySelector('main#auth');

if(authPage) {
    //aqui estou escondendo os formulários de autenticação
    const hideAuthForms = () => {
        
        document.querySelectorAll('#auth form')
        .forEach( el => el.classList.add('hide'));

    }
    //aqui eu estou exibindo o formulário de autentição para o usuário
    const showAuthForm = id => {

        document.getElementById(id).classList.remove('hide');
    }

    const authHash = () => {
        hideAuthForms();

        // verificando se o email está gravando no sessionStorage
        if(sessionStorage.getItem('email')) {
            document.querySelectorAll('[name="email"]')
            .forEach(el => el.value = sessionStorage.getItem('email'))
        }
        //analise o hash na url da window. window.location.hash

        switch(window.location.hash) {
            case '#register':
                showAuthForm('register');
                break;
            case '#login' :
                showAuthForm('login')    
                break;
            case '#forget' :
                showAuthForm('forget')
                break;
            case '#reset' :
                showAuthForm('reset')
                break;
            default:
                showAuthForm('auth-email');        
        }
    }

    window.addEventListener('load', e => {
        authHash()
    })

    window.addEventListener('hashchange', e => {
        authHash()
    })

    const formAuthEmail = document.querySelector("#auth-email")

    formAuthEmail.addEventListener('submit', e => {

        e.preventDefault()
        const btnSubmit = e.target.querySelector('[type=submit]')

        btnSubmit.disabled = true;
        
        sessionStorage.setItem('email', formAuthEmail.email.value)
        location.hash = '#login'
        btnSubmit.disabled = false;

        console.log('emai');
    })
}