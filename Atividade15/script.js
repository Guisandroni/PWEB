function validarDados() {

    if (document.forms.formulario1.elements[0].value == "" || document.forms.formulario1.elements[0].value.length < 10) {
        alert("Preencha campo NOME corretamente! Mínimo de 10 caracteres.");
        document.forms.formulario1.elements[0].focus();
        return false;
    };

    if (document.forms.formulario1.elements[1].value == "" || document.forms.formulario1.elements[1].value.indexOf('@') == -1 || document.forms.formulario1.elements[1].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario1.elements[1].focus();
        return false;
    }

    if (document.forms.formulario1.elements[2].value == "" || document.forms.formulario1.elements[2].value.length < 20) {
        alert("É necessario preencher o campo COMENTÁRIO com mais de 20 caracteres!");
        document.forms.formulario1.elements[2].focus();
        return false;
    }

    if (document.getElementById("nao").checked)
        alert("Que bom que você voltou a visitar esta página!");
    else if (document.getElementById("sim").checked)
        alert("Volte sempre a esta página!");
    else {
        alert("Escolha uma opção no campo PESQUISA!");
        return false;
    }

    return true;
}