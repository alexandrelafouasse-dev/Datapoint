var ctx2 = document.getElementById('pieChart').getContext('2d');
var pieChart1 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Hommes", "Femmes"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: ['rgba(250, 219, 143, 0.5)', 'rgba(103, 189, 232, 0.7)'],
            borderColor: ['rgba(250, 219, 143)', 'rgba(103, 189, 232)'],
            data: [84, 16]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'bottom'
      }
    }
});
