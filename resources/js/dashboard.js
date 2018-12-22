import Chart from 'chart.js';

window.Chart = Chart;

var mychart = document.getElementById("barChart").getContext("2d");

mychart.height = 300;

new Chart(mychart, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: '#dd4b39',
            borderColor: '#dd4b39',
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
            label: 'Dataset 2',
            backgroundColor: '#00c0ef',
            borderColor: '#00c0ef',
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
        }]
    }
});
