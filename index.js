const backdrop = document.querySelector('.backdrop');
const selectPlanButton = document.querySelectorAll('.plan .button')
const modal = document.querySelector('.modal');
console.log(backdrop);
console.log(selectPlanButton);
// backdrop.style.display = 'block';

for (let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}
backdrop.addEventListener("click", closeModal);

modalNoButton.addEventListener("click", closeModal);

function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";
}