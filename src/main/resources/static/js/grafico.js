document.addEventListener("DOMContentLoaded", function() {
    fetch("/sig/api/estatisticas/grafico")
        .then(response => response.json())
        .then(data => {
            const capituloData = data; // Dados obtidos da API

            const labels = Object.keys(capituloData); // Rótulos dos capítulos
            const contagens = Object.values(capituloData); // Contagens das pessoas em cada capítulo
            const backgroundColors = generateRandomColors(labels.length); // Gerar cores aleatórias para cada barra

            const ctx = document.getElementById("grafico").getContext("2d");
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: labels.map(label => `Capítulo ${label}`), // Atualizando os rótulos dos capítulos
                    datasets: [{
                        label: "Quantidades de usuários em cada capítulo",
                        data: contagens,
                        backgroundColor: backgroundColors,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: "Capítulos"
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: "Quantidade de Usuários"
                            },
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error("Erro ao obter dados do gráfico:", error);
        });
});

function generateRandomColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        const color = `rgba(${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}, 0.6)`;
        colors.push(color);
    }
    return colors;
}

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
