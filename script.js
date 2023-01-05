let button = document.getElementsByTagName('button')[0];

    let input = document.getElementsByTagName('input')[0];
    let text = document.getElementsByTagName('input')[1];



    button.addEventListener('click', () => {
        let radius = input.value;

        let volume = (4 / 3) * 3.141592653589793 * radius ** 3;
        volume = volume.toFixed(4);
        text.value = volume;
        console.log(volume)
    })