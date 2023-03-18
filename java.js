

function alerta() {
    let cep = document.getElementById("cep").value

    fetch("https://api.postmon.com.br/v1/cep/" + cep)
        .then(function (n1) {
            return (
                n1.json()
            )
        }).then(
            function tela(json) {
                html(json)
            }
        )


}
function html(json) {
    let html = `
    rua:${json.logradouro}
                <br>
                cidade:${json.cidade}
                <br>
                bairro:${json.bairro}
                <br>
                estado:${json.estado}
                <br>   `
    document.getElementById("tela").innerHTML = html
}


function verificar() {
    let codigo = document.getElementById("codigo").value

    fetch("https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=" + codigo)
        .then(function (n1) {
            return (
                n1.json()
            )
        }).then(
            function tela(json) {
                html2(json)
            }
        )


}
function html2(json) {
    let html = `
    codigo:${json.codigo}
    <br>
    serviço:${json.serviço}
    <br>
    host:${json.host}
    <br>
    tempo:${json.time}
    <br>
    eventos:${json.codigo} 
    `
    document.getElementById("tela2").innerHTML = html
}

/*
 codigo:${codigo}
                <br>
                serviço:${serviço}
                <br>
                host:${host}
                <br>
                tempo:${time}
                <br>
                eventos:${codigo} */