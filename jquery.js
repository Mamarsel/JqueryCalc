$(document).ready(function () {
    var elems = $('<div class="block_calculator"></div>')
        .append('<center>')
        .append('<div class="button clear_input" style="width: 130px;">C</div> <div class=" clear"></div>')
        .append('<div class="button input_number">7</div><div class="button input_number">8</div><div class="button input_number">9</div>')
        .append('<div class="button action">+</div>')
        .append('<div class="button input_number">5</div><div class="button input_number">6</div><div class="button input_number">4</div>')
        .append('<div class="button action">-</div>')
        .append('<div class="button input_number">1</div> <div class="button input_number">2</div><div class="button input_number">3</div>')
        .append('<div class="button action">*</div>')
        .append('<div class="button input_number">.</div> <div class="button input_number">0</div>')
        .append('<div class="button get_result">=</div><div class="button action">/</div> <div class="button action">^</div> <div class="button action">%</div><div class="button action" >sqrt</div>');
    $('body').append(elems);
    $('center').append('<input type="text" class="value">');

    $('input').keydown(function () {
        $(this).val($(this).val().replace(/\D/, '')); //если в инпут нет цифр, то меняем его на ""
    });
    $('.input_number').click(function () {
        var number = $(this).text();
        var value = $('input').val() + number;
        $('input').val(value);
    });
    $('.clear_input').click(function () {
        $('input').val('');
    });
    var first_number;
    $('.action').click(function () {
        first_number = parseFloat($('input').val());
        type_action = $(this).text();
        if (type_action == 'sqrt') {
            var result = Math.sqrt(first_number);
            $('input').val(result);
        }
        else {
            $('input').val('');
        }
    });
    $('.get_result').click(function () {
        var second_number = parseFloat($('input').val());

        if (type_action == '-') {
            var result = first_number - second_number;
        }
        if (type_action == '+') {
            var result = first_number + second_number;
        }
        if (type_action == '*') {
            var result = first_number * second_number;
        }
        if (type_action == '/') {
            var result = first_number / second_number;
        }
        if (type_action == '^') {
            var result = Math.pow(first_number, second_number);
        }
        if (type_action == '%') {
            var result = first_number % second_number;
        }
        result = result.toFixed(3);
        $('input').val(result);
    });
});
