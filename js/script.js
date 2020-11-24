$('button').on('click', function() {
    var array = [];
    $("input:checked").each(function() {
        array.push($(this).val());
    });
    $('p').text(array);
    console.log(array)
    array.forEach(element => {
        console.log(element)
    });
});