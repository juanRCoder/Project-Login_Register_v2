$(document).ready(() => {
    const btnRegister = $('.buttonRegister');
    const btnLogin = $('.buttonLogin');
    const modal = $('.modal');
    const skipLogin = $('.blank_ > a')
    const skipRegister = $('.blank_lo > a');

    //Modal Register
    btnRegister.add(skipRegister).on('click', () =>{
        modal.css('display', 'flex');
        $('.modalFormsLo').hide();
        $('.modalFormsRe').show();
    });
    //Modal Login
    btnLogin.add(skipLogin).on('click', () =>{
        modal.css('display', 'flex');
        $('.modalFormsRe').hide();
        $('.modalFormsLo').show();
    })
    //Button Exit-Modal
    $('.modalExit').click(() => modal.hide());
    //Cerrar cuando se presiona un click fuera del formulario
    modal.click((event) => {
        if (event.target === modal[0]) modal.hide();
    })
});