function calculate_order() {

    let subtotal = 0;
    let quantity_products = 0;
    let discount = $('[name="discount"]').val().replace('.', '').replace(',', '.');

    if (!discount) {
        discount = 0;
    }

    $('[name="product_id[]"').each(function () {

        let e = $(this);

        let price = e.parents('tr').find('[name="product_id[]"] > option:selected').attr('data-price');

        let quantity = parseInt(e.parents('tr').find('[name="quantity[]"]').val());

        if (price > 0) {

            subtotal += (price * quantity);

            quantity_products += quantity;

            e.parents('tr').find('.product-price').text('R$ ' + numberToReal(price * quantity));

        } else {

            e.parents('tr').find('.product-price').text('-');

        }

    });

    $('.order-total-product').text(quantity_products);
    $('.order-subtotal').text('R$ ' + numberToReal(subtotal.toFixed(2)));
    $('.order-discount').text('R$ ' + numberToReal(discount));

    if (subtotal >= discount) {

        $('.order-total').text('R$ ' + numberToReal(subtotal - discount));

    } else {

        $('[name="discount"]').val(0);

        calculate_order();

        alert('Desconto inválido!');

    }

}

function event_calcule_order() {

    $('[name="product_id[]"], [name="quantity[]"], [name="discount"]').unbind('change').change(function () {
        calculate_order();
    });

    event_remove_product();

}

function event_remove_product() {

    $('.btn-remove').unbind('click').click(function () {

        if (confirm('Deseja realmente fazer isso?')) {
            $(this).parents('tr').remove();
            calculate_order();
        }

    });

}

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


$(document).ready(function () {

    event_calcule_order();

    $('.btn-product-add').click(function () {

        $('input[type="submit"], .btn-product-add').attr('disabled', true);

        $.ajax({
            url: base_url + 'product/all',
            type: 'GET',
            dataType: 'json'
        }).done(function (data) {

            let html = '';
            html += '<tr>';
            html += '<td>';
            html += '<div class="media">';
            html += '<div class="media-body">';

            html += '<select class="form-control" name="product_id[]">';
            $.each(data, function (key, value) {
                html += '<option data-price="' + value.price + '" value="' + value.id + '">' + value.title + '</option>';
            });
            html += '</select>';

            html += '</div>';
            html += '</div>';
            html += '</td>';
            html += '<td>';

            html += '<select class="form-control" name="quantity[]">';
            for (let x = 1; x <= 100; x++) {
                html += '<option>' + x + '</option>';
            }
            html += '</select>';

            html += '</td>';
            html += '<td>';
            html += '<div class="price-wrap">';
            $.each(data, function (key, value) {
                html += '<var class="price product-price">R$ ' + numberToReal(value.price) + '</var>';
                return false;
            });
            html += '</div>';
            html += '</td>';
            html += '<td class="text-right">';
            html += '<a class="btn btn-danger btn-round btn-remove btn-sm"><i class="fa fa-remove"/> Remover</a>';
            html += '</td>';
            html += '</tr>';

            $('tbody').append(html);

            calculate_order();
            event_calcule_order();

        }).always(function () {

            $('input[type="submit"], .btn-product-add').attr('disabled', false);

        });

    });

    $('[data-trigger-click="true"]').trigger('click');

    $('#form-order-create').submit(function () {

        let form = $('#form-order-create');

        let action = form.attr('data-action');

        form.find('input[type="submit"]').attr('disabled', true);

        $('.alert-danger, .alert-success').addClass('hide');

        $.ajax({
            url: action,
            type: 'POST',
            dataType: 'json',
            data: form.serialize()
        }).done(function () {

            if (form.find('[name="_method"]').val() == 'PUT') {

                $('.alert-success').text('Updated.').removeClass('hide');

            } else {

                $('[name="client_id"], [name="discount"]').val('');
                $('[name="paid"]').val(0).change();
                $('.card tbody tr').remove();

                $('.alert-success').text('Created.').removeClass('hide');

                $('.btn-product-add').trigger('click');

            }

        }).fail(function (data) {

            $('.alert-danger ul li').remove();

            $.each(data.responseJSON.errors, function (key, value) {
                $('.alert-danger ul').append('<li>' + value + '</li>')
            });

            $('.alert-danger').removeClass('hide');

        }).always(function () {

            form.find('input[type="submit"]').attr('disabled', false);

        });

        return false;

    });


});
