let message = document.getElementsByClassName('message');
let count = document.getElementById('count');
let counter = 11;
count.textContent = counter;

window.onload = () => {
    // console.log(counter);
    if (counter == 11) {
        setInterval(onload, 1000);
    } else if (counter == -2) {
        clearInterval(counter);
    }
    counter--;
    count.textContent = counter;
    removeDiv();
}

function removeDiv() {
    if (counter == -1) {
        console.log("remove");
        message[0].classList.toggle("invisible");
    }
}

// else if (counter == 1) {
        // console.log("remove");
        // 