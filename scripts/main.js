const questionBtns = document.querySelectorAll('.question');

questionBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const question = event.target.textContent;
        const answer = event.target.nextElementSibling;
        if (answer.style.display === "none") {
            //question.style.color = 'hsl(237, 12%, 33%)';
            answer.style.display = "block";
        } else {
            answer.style.display = "none";
        }
    })
})