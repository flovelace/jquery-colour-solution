function random() {
    $('body').css('background', randomcolour());
}

function randomcolour() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

$('button').click(random);