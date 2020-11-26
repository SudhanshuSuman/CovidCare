// to make sure that only one of the checkbox/radio is selected:
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


// symptoms for Covid-19:
var csympt = ["Fever", "Dry Cough", "Fatigue"];
var msympt = ["Loss of taste or smell", "Nasal Congestion", "Conjunctivitis", "Sore Throat", "Headache", "Muscle or joint pain", "Nausea/Vomiting", "Diarrhea", "Dizziness"];
var ssympt = ["Shortness of breath", "Loss of appetite", "Persistent pain in the chest", "High body temperature", "Strokes", "Nerve Damage"];
var otherprob = ["Asthama", "Diabeties", "Blood Pressure", "Heart Disease", "Kidney Disorder", "Lung Disease", "Hypertension"];

// symptoms for other common illnesses:
var commoncold = ["Dry Cough", "Sore Throat", "Nasal Congestion", "Loss of taste or smell", "Headache", "Conjunctivitis"]
var diarrhea = ["Diarrhea", "Nausea/Vomiting"]
// var ...


var array = [];
var c19score = 0;
var commoncoldscore = 0;
var diarrheascore = 0;

// function to append array with the returned 'checked' values
// $('.next').on('click', 
function appndarr () {
    // var array = [];
    console.log("yaha pahucha h")
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


};

// to make prediction, once all the fields are filled
function getprediction() {
    appndarr();
    array.forEach(function (elem) {
        if (csympt.includes(elem)) {
            c19score += 20;
        } else if (msympt.includes(elem)) {
            c19score += 10;
        } else if (ssympt.includes(elem)) {
            c19score += 35;
        } else if (otherprob.includes(elem)) {
            c19score += 10;
        }
    })
    if (c19score >= 100) {
        c19score = 100;
    }

    array.forEach(function (elem) {
        if (commoncold.includes(elem)) {
            commoncoldscore += 25;
        }
    })
    array.forEach(function (elem) {
        if (diarrhea.includes(elem)) {
            diarrheascore += 25;
        }
    })

    // console.log("c19score: " + c19score)
    // console.log("commoncold: " + commoncoldscore)
    // console.log("diarrhea: " + diarrheascore)
    var message = "";
    var otherillness = [];
    // for covid-19:
    if(c19score < 35) {
        message = "It is unlikely that you have Covid-19 virus!!!";
    } else if(c19score < 60) {
        message = "You might have Covid-19 virus.";
    } else if(c19score < 80) {
        message = "It is likely that you have Covid-19 virus!";
    } else if(c19score <= 100) {
        message = "It is very likely that you have Covid-19 virus or some serious health condition. Immediately get consultation from a physician."
    }
    if(array.includes("met-corona")) {
        message += "<br>Since you had come in contact of a Covid-19 positive person, it is recommended that you get a test.<br>"
    }

    if(commoncoldscore >= 50) {
        otherillness.push('Common Cold');
    }
    if(diarrheascore >= 50) {
        otherillness.push('Diarrhea');
    }
    var othill = "";
    if(otherillness.length != 0) {
        othill += "Other than that, you might have: <br>"
    }
    otherillness.forEach(function (elem) { othill += elem+'<br>'; });
    // alert(message);
    document.querySelector('#q-body').innerHTML = '<p class=message>' + message + '<br>' + othill + '</p>';
}


// to load different queries(snips) using AJAX
document.addEventListener("DOMContentLoaded", function (event) {
    // showLoading("#q-body");
    $ajaxUtils.sendGetRequest(
      "../snips/0age.html",
      function (responseText) {
        document.querySelector("#q-body")
          .innerHTML = responseText;
      },
      false);
});

function one (event) {
    // showLoading("#q-body");
    appndarr()
    $ajaxUtils.sendGetRequest(
      "../snips/1gender.html",
      function (responseText) {
        document.querySelector("#q-body")
          .innerHTML = responseText;
      },
      false);
}

function two (event) {
    // showLoading("#q-body");
    appndarr()
    $ajaxUtils.sendGetRequest( "../snips/2csympt.html", function (responseText) {
        document.querySelector("#q-body").innerHTML = responseText; 
    }, false);
}
function three (event) {
    // showLoading("#q-body");
    appndarr()
    $ajaxUtils.sendGetRequest( "../snips/3msympt.html", function (responseText) {
        document.querySelector("#q-body").innerHTML = responseText; 
    }, false);
}
function four (event) {
    // showLoading("#q-body");
    appndarr()
    $ajaxUtils.sendGetRequest( "../snips/4ssympt.html", function (responseText) {
        document.querySelector("#q-body").innerHTML = responseText; 
    }, false);
}
function five (event) {
    // showLoading("#q-body");
    appndarr()
    $ajaxUtils.sendGetRequest( "../snips/5otherprob.html", function (responseText) {
        document.querySelector("#q-body").innerHTML = responseText; 
    }, false);
}
function six (event) {
    // showLoading("#q-body");
    appndarr()
    $ajaxUtils.sendGetRequest( "../snips/6metcorona.html", function (responseText) {
        document.querySelector("#q-body").innerHTML = responseText; 
    }, false);
}
