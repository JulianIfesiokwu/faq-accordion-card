const questionBtns = document.querySelectorAll('.question');

questionBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const question = event.target.textContent;
        const answer = event.target.nextElementSibling;
        if (answer.style.display === "none") {
            answer.style.display = "block";
        } else {
            answer.style.display = "none";
        }
    })
})