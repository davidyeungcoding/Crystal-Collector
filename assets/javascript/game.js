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
var stats =
    '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>';

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
    gameStart();
    document.querySelector('#message').innerHTML = "You've Won!";
};

var lose = function () {
    losses++;
    gameStart();
    document.querySelector('#message').innerHTML = "You Lose";
};

var addText = function () {
    document.querySelector('#target').innerHTML = target;
    document.querySelector('#score').innerHTML = stats;
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

    $('.input').click('control', function () {
        console.log(total);
        console.log(typeof total);
        console.log("==============================");
        // total += parseInt($(this).attr('value'));
        total = total + $(this).attr('value');
        console.log(parseInt(total));
        console.log($(this).val);
        console.log(typeof $(this).val);
        if (total < target) {
            // total += $(this).val();
            if (total = target) {
                win();
            }
            else if (total > target) {
                lose();
            }
        }
    });
    console.log(btn_1_Val);
    console.log(btn_2_Val);
    console.log(btn_3_Val);
    console.log(btn_4_Val);
    console.log("==============================");
    console.log(typeof btn_1_Val);
    console.log("==============================");
    console.log($('#btn_1').attr('value'));
    console.log($('#btn_2').attr('value'));
    console.log($('#btn_3').attr('value'));
    console.log($('#btn_4').attr('value'));
    console.log("==============================");
    console.log(typeof $('#btn_1').attr('value'));
});