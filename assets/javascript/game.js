// ===========================================================================
// VARIABLES
// ===========================================================================

var wins = 0;
var losses = 0;
var total = 0;
var target;
var btn_1_Val;
var btn_2_Val;
var btn_3_Val;
var btn_4_Val;


// ===========================================================================
// FUNCTIONS
// ===========================================================================

var gameStart = function () {
    target = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    total = 0;
    addText();
    btnValues();
    assignValues();
};

var win = function () {
    wins++;
    addText();
    gameStart();
    document.querySelector('#message').innerHTML = "You've Won!";
};

function stats() {
    return '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>';
};

var lose = function () {
    losses++;
    addText();
    gameStart();
    document.querySelector('#message').innerHTML = "You Lose";
};

var addText = function () {
    document.querySelector('#target').innerHTML = target;
    document.querySelector('#score').innerHTML = stats();
    document.querySelector('#user-total-int').innerHTML = total;
};

var btnValues = function () {
    btn_1_Val = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    btn_2_Val = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    btn_3_Val = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    btn_4_Val = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
};

var assignValues = function () {
    $('#btn_1').attr('value', btn_1_Val);
    $('#btn_2').attr('value', btn_2_Val);
    $('#btn_3').attr('value', btn_3_Val);
    $('#btn_4').attr('value', btn_4_Val);
};

// ===========================================================================
// GAME
// ===========================================================================

$(document).ready(function() {

    gameStart();

    $('.control').click(function () {
        total += parseInt($(this).attr('value'));
        addText();
        if (total <= target || total >= target) {
            if (total == target) {
                win();
                // console.log(wins);
            }
            else if (total > target) {
                lose();
                // console.log(losses);
            }
        }
    });
    // console.log(btn_1_Val);
    // console.log(btn_2_Val);
    // console.log(btn_3_Val);
    // console.log(btn_4_Val);
    // console.log("==============================");
    // console.log(typeof btn_1_Val);
    // console.log("==============================");
    // console.log($('#btn_1').attr('value'));
    // console.log($('#btn_2').attr('value'));
    // console.log($('#btn_3').attr('value'));
    // console.log($('#btn_4').attr('value'));
    // console.log("==============================");
    // console.log(typeof $('#btn_1').attr('value'));
});