$(document).ready(() => {

    // ENVIAR FORMULARIO
    $('.formRegister').submit((event) => {
        event.preventDefault();
        const name = $('#name').val();
        const gmail = $('#gmail').val();
        const password = $('#password').val();

        const formData = { name, gmail, password };

        $.ajax({
            type: 'POST',
            url: '/form/register',
            data: JSON.stringify(formData),
            contentType: 'application/json'
        })
        .done(() => {
            console.log("Registro Exitoso");
        })
        .fail((e) => {
            alert("ERROR DE ENVIO");
            console.log('Error: ', e.responseText);
        });
    });

    // ENVIAR LOGIN
    $('.formLo').submit((event) => {
        event.preventDefault();
        const name = $('#names').val();
        const password = $('#passwords').val();

        const formData = { name, password };

        $.ajax({
            type: 'POST',
            url: '/form/login',
            data: JSON.stringify(formData),
            contentType: 'application/json'
        })
        .done(() => {
            alert("LOGIN EXITOSO");
            console.log("Login Exitoso");
        })
        .fail((e) => {
            alert("ERROR DE ENVIO");
            console.log('Error: ', e.responseJSON.mensaje);
        });
    });

    if (window.location.pathname === '/form/sesion') {
        $('.options_container').hide();
        $('.options_container_login').css('display', 'flex');
    }

    $('#logoutButton').click(() => window.location.href = '/form');
});
