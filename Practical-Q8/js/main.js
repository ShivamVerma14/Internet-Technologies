$('#style').on('click', function () {
    link = $('head > link');

    if (link[0].disabled === true) {
        link.attr('disabled', false);
        $(this).html('Disable Styling');
    }
    else if (link[0].disabled === false) {
        link.attr('disabled', true);
        $(this).html('Enable Styling');
    }
});