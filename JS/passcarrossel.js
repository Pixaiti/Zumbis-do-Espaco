let count = 1;
document.getElementById('radio1').checked = true;

const radios = document.querySelectorAll('input[name="radio-btn"]');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        count = parseInt(radio.id.replace('radio', ''));
    });
});

function nextImage() {
    count++;
    if (count > 20) count = 1;

    document.getElementById('radio' + count).checked = true;
}

setInterval(nextImage, 3000);
