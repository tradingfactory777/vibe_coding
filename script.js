document.addEventListener('DOMContentLoaded', () => {
    const countDisplay = document.getElementById('count');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const resetBtn = document.getElementById('resetBtn');

    let count = 0;

    increaseBtn.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
    });

    decreaseBtn.addEventListener('click', () => {
        count--;
        countDisplay.textContent = count;
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        countDisplay.textContent = count;
    });
});
