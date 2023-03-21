const dino = $('#dino');
const worm = $('#worm');

function jump() {
    dino.addClass('jump');

    setTimeout(function () {
        dino.removeClass('jump');
    }, 1000);
}

let wormLeftPosition;
let dinoTopPosition;

setInterval(function () {
    wormLeftPosition = worm.offset().left;
    dinoTopPosition = dino.offset().top;

    if (wormLeftPosition < 20 && dinoTopPosition > 130) {
        alert('წააგე!');
        return;
    }

}, 10);

setInterval(function () {
    dino.addClass('rotate');
    worm.addClass('rotate');

    setTimeout(function () {
        dino.removeClass('rotate');
        worm.removeClass('rotate');
    }, 250);
}, 500);



