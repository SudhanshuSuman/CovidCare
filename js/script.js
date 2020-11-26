var array = [];

$('button').on('click', function() {
    // var array = [];
    $("input:checked").each(function() {
        if($(this).val() != "") {
            array.push($(this).val());
        }
    });
    $('p').text(array);
    console.log(array)
    array.forEach(element => {
        console.log(element)
    });
});


var q = ["gender", "c-sympt", "m-sympt", "s-sympt", "other-prob"]
function checkedchkr (name, obj) {
    console.log(name, $(obj).attr('type'))
    if ($(obj).attr('type') == 'radio' ) {
        if ( $("input[name=" + name + "]").filter(function() { return this.prop == 'checked'; }) ) {
            $("input[name=" + name + "][type='checkbox']").prop('checked', false);
        }
    } else {
        if ( $("input[name=" + name + "]").filter(function() { return this.prop == 'checked'; }) ) {
            $("input[name=" + name + "][type='radio']").prop('checked', false);
        }
    }
}
$("input[name=" + q[0] + "]").on('change', function () { checkedchkr(q[0], $(this)); });
$("input[name=" + q[1] + "]").on('change', function () { checkedchkr(q[1], $(this)); });
$("input[name=" + q[2] + "]").on('change', function () { checkedchkr(q[2], $(this)); });
$("input[name=" + q[3] + "]").on('change', function () { checkedchkr(q[3], $(this)); });
$("input[name=" + q[4] + "]").on('change', function () { checkedchkr(q[4], $(this)); });


// for Covid-19:
var csympt = ["Fever", "Dry Cough", "Fatigue"];
var msympt = ["Loss of taste or smell", "Nasal Congestion", "Conjunctivitis", "Sore Throat", "Headache", "Muscle or joint pain", "Nausea/Vomiting", "Diarrhea", "Dizziness"];
var ssympt = ["Shortness of breath", "Loss of appetite", "Persistent pain in the chest", "High body temperature", "Strokes", "Nerve Damage"];
var otherprob = ["Asthama", "Diabeties", "Blood Pressure", "Heart Disease", "Kidney Disorder", "Lung Disease", "Hypertension"];

