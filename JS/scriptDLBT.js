let buttonDL = document.getElementById('buttonDL');

buttonDL.onclick = function () {
    buttonDL.classList.add('active');
    active = true

    setTimeout(function () {
        buttonDL.classList.add('success');
    }, 3500);

    setTimeout(function () {
        buttonDL.classList.remove('active');
        buttonDL.classList.remove('success');
    }, 5000);
}

