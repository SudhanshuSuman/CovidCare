var array = [];

$('button').on('click', function() {
    // var array = [];
    $("input:checked").each(function() {
        array.push($(this).val());
    });
    $('p').text(array);
    console.log(array)
    array.forEach(element => {
        console.log(element)
    });
});

$('input[class="predictor"]').on('change', function(){
    if ($(this).attr('type') == 'radio' ) {
        if ( $(this).prop('checked') ) {
            $('input[class="predictor"][type="checkbox"]').prop('checked', false);
        }
    }
    else {
        if ( $(this).prop('checked') ) {
            $('input[class="predictor"][type="radio"]').prop('checked', false);
        }
    }
});