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
    $('#btn_1').val().append(btn_1_Val);
    // $('#btn_1').append($(this)).val(btn_1_Val);
    // $('#btn_2').append($(this)).val(btn_2_Val);
    // $('#btn_3').append($(this)).val(btn_3_Val);
    // $('#btn_4').append($(this)).val(btn_4_Val);
};

// ===========================================================================
// GAME
// ===========================================================================

$(document).ready(function() {

    gameStart();

    $('.input').click('control', function () {
        if (total < target) {
            total += $(this).val();
            if (total = target) {
                win();
            }
            else if (total > target) {
                lose();
            }
        }
    });
});