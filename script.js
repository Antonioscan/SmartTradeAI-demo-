const CORRECT_PASSWORD = "AntonioTest2025";

function checkPassword() {
    const input = document.getElementById('password').value;
    if (input === CORRECT_PASSWORD) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        simulatePositions();
        simulateHypeWatch();
    } else {
        document.getElementById('login-error').textContent = 'Password errata';
    }
}

function disconnect() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('password').value = '';
}

function simulatePositions() {
    const positions = [
        { asset: 'DOGEUSDT', gain: '+28%', status: 'Attiva', type: 'Short' },
        { asset: 'PEPEUSDT', gain: '-18%', status: 'Attiva', type: 'Short' }
    ];
    const container = document.getElementById('positions');
    container.innerHTML = '';
    positions.forEach(p => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${p.asset}</strong> – ${p.type} – ${p.gain} – ${p.status}`;
        container.appendChild(div);
    });
}

function simulateHypeWatch() {
    const hype = [
        '🚀 SHIBA: Volume X10 da ieri',
        '📢 PEPE: Tweet da Elon Musk',
        '🔥 WIF: +420% in 48h'
    ];
    const ul = document.getElementById('hype-list');
    ul.innerHTML = '';
    hype.forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        ul.appendChild(li);
    });
}
