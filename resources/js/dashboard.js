import Chart from 'chart.js';

window.Chart = Chart;

var mychart = $('#cashFlowChart');

mychart.height = 300;

new Chart(mychart, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Saídas',
                backgroundColor: '#dd4b39',
                borderColor: '#bc3e2f',
                borderWidth: 1,
                data: [
                    Math.floor(Math.random(0, 200) * -100),
                    Math.floor(Math.random(0, 200) * -100),
                    Math.floor(Math.random(0, 200) * -100),
                    Math.floor(Math.random(0, 200) * -100),
                    Math.floor(Math.random(0, 200) * -100),
                    Math.floor(Math.random(0, 200) * -100),
                    Math.floor(Math.random(0, 200) * -100),
                ]
            }, {
                label: 'Entradas',
                backgroundColor: '#00a65a',
                borderColor: '#3d8d4b',
                borderWidth: 1,
                data: [
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                ]
            }, {
                label: 'Saldo',
                backgroundColor: '#27c0ef',
                borderColor: '#1ea3cc',
                borderWidth: 1,
                data: [
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                    Math.floor(Math.random(0, 200) * 100),
                ]
            }
        ]
    }
});
