$(document).ready(function () {

    $('[name="role"]').change(function () {

        let e = $(this);

        let role = e.val();

        if (role == 'client') {
            $('[name="client_id"]').parents('.form-group').removeClass('hidden');
        } else {
            $('[name="client_id"]').val("").change();
            $('[name="client_id"]').parents('.form-group').addClass('hidden');
        }

    });

});