const ctx = document.getElementById('priceChart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({ length: 20 }, (_, i) => `T${i + 1}`),
        datasets: [{
            label: 'TON Price',
            data: Array.from({ length: 20 }, () => Math.random() * 100),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Price (TON)'
                },
                beginAtZero: true
            }
        }
    }
});

document.getElementById('buyButton').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    alert(`Bought ${amount} TON`);
});

document.getElementById('sellButton').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    alert(`Sold ${amount} TON`);
});