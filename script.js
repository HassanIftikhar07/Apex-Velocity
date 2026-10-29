// Filter Logic for Supercar Cards
const filterBtns = document.querySelectorAll('.filter-btn');
const carCards = document.querySelectorAll('.car-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        carCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Speed Converter Function
function convertSpeed() {
    const val = parseFloat(document.getElementById('speedInput').value);
    const unit = document.getElementById('unitSelect').value;
    const resultBox = document.getElementById('calcResult');

    if (isNaN(val)) {
        resultBox.innerText = "Please enter a valid number!";
        return;
    }

    if (unit === 'mphToKmh') {
        const converted = (val * 1.60934).toFixed(2);
        resultBox.innerText = `${val} MPH = ${converted} KM/H`;
    } else {
        const converted = (val / 1.60934).toFixed(2);
        resultBox.innerText = `${val} KM/H = ${converted} MPH`;
    }
}