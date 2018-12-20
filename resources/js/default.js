$(document).ready(function () {

    $('.btn-delete').click(function () {
        return confirm('Deseja realmente fazer isso?');
    });

    $('[name="cnpj"]').inputmask('99.999.999/9999-99', {"placeholder": ""});

    $('[name="phone"]').inputmask('(99) 9999-99999', {"placeholder": ""});

    $('[name="cep"]').inputmask('99999-999', {"placeholder": ""});

    $('[name="discount"], [name="price"]').maskMoney({
        allowNegative: true,
        thousands: '.',
        decimal: ',',
        affixesStay: false
    });

});

function numberToReal(n) {

    let c, d, t, s, i, j;

    c = isNaN(c = Math.abs(c)) ? 2 : c;
    d = d == undefined ? "," : d;
    t = t == undefined ? "." : t;
    s = n < 0 ? "-" : "";
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
    j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");

}