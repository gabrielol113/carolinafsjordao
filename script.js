document.addEventListener('DOMContentLoaded', function () {
    const startDate = new Date('2025-02-14T00:00:00'); // Data de início do relacionamento
    const today = new Date(); // Usa a data atual real
    //const today = new Date('2024-06-25T00:00:00'); // Simulação do dia 25 de junho para teste

    const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    const anniversaryDate = new Date(today.getFullYear(), 5, 12); // 12 de junho (Dia dos Namorados)
    const birthdayDate = new Date(today.getFullYear(), 5, 25); // 25 de junho (Aniversário)

    const messageElement = document.getElementById('love-message');
    const counterElement = document.getElementById('counter');

    // Verifica se é 12 de junho (Dia dos Namorados)
    if (today.toDateString() === anniversaryDate.toDateString()) {
        messageElement.textContent = '💖 Feliz Dia dos Namorados! 💖';
    }
    // Verifica se é 25 de junho (Aniversário)
    else if (today.toDateString() === birthdayDate.toDateString()) {
        const birthYear = 2008;
        const birthMonth = 5; // Junho (mês 5, pois janeiro é 0)
        const birthDay = 25; // 25 de junho

        const currentBirthday = new Date(today.getFullYear(), birthMonth, birthDay);

        let age = today.getFullYear() - birthYear;
        if (today < currentBirthday) {
            age--;
        }

        messageElement.textContent = `🎂 Feliz Aniversário! Hoje você está fazendo ${age} anos! 🎂`;
    } else {
        messageElement.textContent = 'Eu amo você, feliz por cada segundo juntos!';
    }

    function updateCounter() {
        const now = new Date();
        const elapsed = now - startDate;

        const totalDays = Math.floor(elapsed / (1000 * 60 * 60 * 24));

        const years = Math.floor(totalDays / 365);
        const remainingDays = totalDays % 365;
        const hours = Math.floor((elapsed % (3600 * 24 * 1000)) / (3600 * 1000));
        const minutes = Math.floor((elapsed % (3600 * 1000)) / (60 * 1000));
        const seconds = Math.floor((elapsed % (60 * 1000)) / 1000);

        counterElement.textContent = `${years} ano${years !== 1 ? 's' : ''}, ${remainingDays} dia${remainingDays !== 1 ? 's' : ''}, ${hours} horas, ${minutes} minutos e ${seconds} segundos juntos 💕`;
    }

    setInterval(updateCounter, 1000);
    updateCounter(); // Para exibir imediatamente

    // Efeito de corações ao clicar no botão "Eu te amo"
    document.getElementById('love-button').addEventListener('click', function () {
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.height = 100 + '%';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = 0;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }
    });

    // Modo Claro/Escuro
    document.getElementById('theme-button').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

    // Música de fundo - agora com uma faixa mais calma e relaxante
    document.getElementById('music-button').addEventListener('click', function () {
        const song = document.getElementById('loveSong');
        if (song.paused) {
            song.src = "Juno - Sabrina Carpenter.mp3"; 
            song.play();
        } else {
            song.pause();
        }
    });
});
