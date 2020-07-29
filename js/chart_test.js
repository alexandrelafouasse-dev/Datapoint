var url = 'data:application/json;charset=utf-8,%7B%0A%20%20%22datasets%22%20%3A%20%5B%7B%0A%20%20%20%20%22poste%22%20%3A%20%7B%0A%20%20%20%20%20%20%22labels%22%20%3A%20%5B%22ASSOCIATE%22%2C%20%22LEADER%22%2C%20%22PARTNER%22%5D%2C%0A%20%20%20%20%20%20%22percent_m%22%20%3A%20%5B72%2C%2075%2C%2094%5D%2C%0A%20%20%20%20%20%20%22percent_f%22%20%3A%20%5B28%2C%2025%2C%206%5D%2C%0A%20%20%20%20%20%20%22age%22%20%3A%20%5B36%2C%2042%2C%2047%5D%2C%0A%20%20%20%20%20%20%22effectif%22%20%3A%20%5B714%2C%2060%2C%2017%5D%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%22metier%22%20%3A%20%7B%0A%20%20%20%20%20%20%22labels%22%20%3A%20%5B%22CHANGE%22%2C%20%22CONSEIL%22%20%2C%20%22CP%22%2C%20%22DEV%22%2C%20%22INFRA%22%2C%20%22MOA%22%2C%20%22QL%22%5D%2C%0A%20%20%20%20%20%20%22percent_m%22%20%3A%20%5B64%2C%2067%2C%2079%2C%2086%2C%2098%2C%2078%2C%2084%5D%2C%0A%20%20%20%20%20%20%22percent_f%22%20%3A%20%5B36%2C%2033%2C%2021%2C%2014%2C%202%2C%2022%2C%2016%5D%2C%0A%20%20%20%20%20%20%22age%22%20%3A%20%5B30%2C%2033%2C%2038%2C%2032%2C%2041%2C%2037%2C%2042%5D%2C%0A%20%20%20%20%20%20%22effectif%22%20%3A%20%5B22%2C%20131%2C%2077%2C%20232%2C%20154%2C%2061%2C%2053%5D%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%22comm_metier%22%20%3A%20%7B%0A%20%20%20%20%20%20%22labels%22%20%3A%20%5B%22Banque%20Finance%20Assurance%22%2C%20%22Industrie%20Distribution%20Energie%22%2C%20%22MultiM%E9tiers%22%2C%20%22Secteur%20Public%22%2C%20%20%22Service%20M%E9dia%20Telecom%22%5D%2C%0A%20%20%20%20%20%20%22percent_m%22%20%3A%20%5B75%2C%2072%2C%2072%2C%2062%2C%2077%5D%2C%0A%20%20%20%20%20%20%22percent_f%22%20%3A%20%5B25%2C%2028%2C%2028%2C%2038%2C%2023%5D%2C%0A%20%20%20%20%20%20%22age%22%20%3A%20%5B40%2C%2035%2C%2033%2C%2036%2C%2036%5D%2C%0A%20%20%20%20%20%20%22effectif%22%20%3A%20%5B279%2C%20109%2C%20209%2C%2029%2C%2043%5D%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%22comm_service%22%20%3A%7B%0A%20%20%20%20%20%20%22labels%22%20%3A%20%5B%22Accompagnement%22%2C%20%22AgileLean%22%2C%20%22Architecture%22%2C%20%22BiBigData%22%2C%20%22CloudOperation%26System%22%2C%20%22DigitalExperience%22%2C%20%22ExpertiseMetier%22%2C%20%22GenieLogiciel%22%2C%20%22Howard%22%2C%20%22ManagementInnovation%22%2C%20%22ProcessusRiskCompliance%22%2C%20%22Qualification%26Testing%22%2C%20%22S%E9curit%E9%22%2C%20%22Solutions%22%2C%20%22StratIT%26ArchiEntreprise%22%5D%2C%0A%20%20%20%20%20%20%22percent_m%22%20%3A%20%5B37%2C%2075%2C%2094%2C%2080%2C%2094%2C%2043%2C%2058%2C%2086%2C%2055%2C%2071%2C%2067%2C%2063%2C%20100%2C%2064%5D%2C%0A%20%20%20%20%20%20%22percent_f%22%20%3A%20%5B63%2C%2025%2C%206%2C%2020%2C%206%2C%2057%2C%2042%2C%2014%2C%2045%2C%2029%2C%20%2033%2C%2037%2C%200%2C%2036%5D%2C%0A%20%20%20%20%20%20%22age%22%20%3A%20%5B32%2C%2038%2C%2044%2C%2035%2C%2041%2C%2030%2C%2036%2C%2034%2C%2028%2C%2031%2C%2034%2C%2042%2C%2034%2C%2028%2C%2036%5D%2C%0A%20%20%20%20%20%20%22effectif%22%20%3A%20%5B27%2C%2020%2C%2016%2C%2010%2C%20143%2C%2014%2C%20105%2C%20188%2C%2011%2C%207%2C%2018%2C%2057%2C%205%2C%2055%2C%2022%5D%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%22dev%22%20%3A%20%7B%0A%20%20%20%20%20%20%22parity%22%20%3A%20%5B60%2C%2040%5D%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%22all%22%20%3A%20%7B%0A%20%20%20%20%20%20%22parity%22%3A%20%5B73%2C%2027%5D%0A%20%20%20%20%7D%0A%0A%20%20%7D%5D%0A%7D%0A';

window.onload = function(){

  fetch(url)
  .then(function(response){
    return response.json()
  })
  .then(function(data){

Chart.defaults.global.title.fontFamily = 'Roboto';

function updateChart(chart, label, type, data, data1) {

  if(chart && chart !== null){
        chart.destroy();
    }

  if (type === "bar"){
    chart = new Chart(ctx, {
      type: "bar",
      data: {
          labels: label,

          datasets: [{
              backgroundColor: 'rgba(250, 219, 143, 0.7)',
              borderColor: 'rgba(250, 219, 143)',
              data: data
          }]
        },
        options: {
          legend: {
            display: false
          },
          responsive:true,
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      suggestedMax: "60"
                  }
              }]
          },
        }
    });
  }

  if (type === "radar"){
    chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'radar',

        // The data for our dataset
        data: {
            labels: label,

            datasets: [{
                label: "Hommes",
                backgroundColor: 'rgba(250, 219, 143, 0.7)',
                borderColor: 'rgba(250, 219, 143)',
                data: data,
            },
            {
                label: "Femmes",
                backgroundColor: 'rgba(103, 189, 232, 0.7)',
                borderColor: 'rgba(103, 189, 232)',
                data: data1,
            }]
        },

        options : {
          responsive:true,
          maintainAspectRatio: false,
          onClick : openPopup,
          scale: {
            gridLines : {
              lineWidth: 2,
              drawTicks: false
            },
            ticks: {
              display: false
            },
            pointLabels: {
              fontSize: 14
            }
          },
          title: {
            display: true,
            postion: 'top',
            text: "selon",
            fontSize: 25,
            fontColor: '#FFFFFF',
            padding: 25,
          },
          legend: {
            position: 'bottom'
          }
        }
    });
  }

  if (type === "bar2"){
    chart = new Chart(ctx, {
      type: "bar",
      data: {
          labels: label,

          datasets: [{
              backgroundColor: 'rgba(103, 189, 232, 0.7)',
              borderColor: 'rgba(103, 189, 232)',
              data: data
          }]
        },
        options: {
          legend: {
            display: false
          },
          responsive:true,
          maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  }
              }]
          },
        }
    });
  }

}

// Récupération du select
var selector1 = document.querySelector('#choice1');
var selector2 = document.querySelector('#choice2');
var value1 = 'null';
var value2 = 'null';

newLabel = [];
newData = [];
newType = 'null';

selector1.addEventListener('change', checkNewData);
selector2.addEventListener('change', checkNewData);


function checkNewData(){
  value1 = selector1.options[selector1.selectedIndex].value;
  value2 = selector2.options[selector2.selectedIndex].value;

  if (value1 === 'parite' && value2 === 'poste') {
    newLabel = data.datasets[0].poste.labels;
    newData = data.datasets[0].poste.percent_m;
    newData1 = data.datasets[0].poste.percent_f;
    updateChart(chart, newLabel, "radar", newData, newData1);
  }
  if (value1 === 'parite' && value2 === 'metier') {
    newLabel = data.datasets[0].metier.labels;
    newData = data.datasets[0].metier.percent_m;
    newData1 = data.datasets[0].metier.percent_f;
    updateChart(chart, newLabel, "radar", newData, newData1);
  }

  if (value1 === 'parite' && value2 === 'comm_metier') {
    newLabel = data.datasets[0].comm_metier.labels;
    newData = data.datasets[0].comm_metier.percent_m;
    newData1 = data.datasets[0].comm_metier.percent_f;
    updateChart(chart, newLabel, "radar", newData, newData1);
  }
  if (value1 === 'parite' && value2 === 'comm_service') {
    newLabel = data.datasets[0].comm_service.labels;
    newData = data.datasets[0].comm_service.percent_m;
    newData1 = data.datasets[0].comm_service.percent_f;
    updateChart(chart, newLabel, "radar", newData, newData1);
  }



  if (value1 === 'age' && value2 === 'comm_metier') {
    newLabel = data.datasets[0].comm_metier.labels;
    newData = data.datasets[0].comm_metier.age;
    updateChart(chart, newLabel, "bar", newData);
  }

  if (value1 === 'age' && value2 === 'metier') {
    newLabel = data.datasets[0].metier.labels;
    newData = data.datasets[0].metier.age;
    updateChart(chart, newLabel, "bar", newData);
  }

  if (value1 === 'age' && value2 === 'poste') {
    newLabel = data.datasets[0].poste.labels;
    newData = data.datasets[0].poste.age;
    updateChart(chart, newLabel, "bar", newData);
  }

  if (value1 === 'age' && value2 === 'comm_service') {
    newLabel = data.datasets[0].comm_service.labels;
    newData = data.datasets[0].comm_service.age;
    updateChart(chart, newLabel, "bar", newData);
  }


  if (value1 === 'effectif' && value2 === 'comm_metier'){
    newLabel = data.datasets[0].comm_metier.labels;
    newData = data.datasets[0].comm_metier.effectif;
    updateChart(chart, newLabel, "bar2", newData);
  }

  if (value1 === 'effectif' && value2 === 'metier'){
    newLabel = data.datasets[0].metier.labels;
    newData = data.datasets[0].metier.effectif;
    updateChart(chart, newLabel, "bar2", newData);
  }

  if (value1 === 'effectif' && value2 === 'poste'){
    newLabel = data.datasets[0].poste.labels;
    newData = data.datasets[0].poste.effectif;
    updateChart(chart, newLabel, "bar2", newData);
  }

  if (value1 === 'effectif' && value2 === 'comm_service'){
    newLabel = data.datasets[0].comm_service.labels;
    newData = data.datasets[0].comm_service.effectif;
    updateChart(chart, newLabel, "bar2", newData);
  }



}



//Chart Accueil
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["Change", "Conseil", "CP", "Dev", "Infra", "MOA", "QL"],

        datasets: [{
            label: "Hommes",
            backgroundColor: 'rgba(250, 219, 143, 0.5)',
            borderColor: 'rgba(250, 219, 143)',
            data: [31.82, 60.31, 68.83, 84.48, 94.81, 60.66, 62.26],
        },
        {
            label: "Femmes",
            backgroundColor: 'rgba(103, 189, 232, 0.7)',
            borderColor: 'rgba(103, 189, 232)',
            data: [68.18, 39.69, 31.17, 15.52, 5.19, 39.34, 37.74],
        }]
    },
    options : {
      onClick : openPopup,
      scale: {
        gridLines : {
          lineWidth: 2,
          drawTicks: false
        },
        ticks: {
          display: false
        },
        pointLabels: {
          fontSize: 14
        }
      },
      title: {
        display: true,
        postion: 'top',
        text: "selon",
        fontSize: 25,
        fontColor: '#FFFFFF',
        padding: 25,
      },
      legend: {
        position: 'bottom'
      }
    }
});


// widgets
var piectx = document.getElementById('widgets_parity_chart').getContext('2d');
var pieChart = new Chart(piectx, {
    type: 'pie',
    data: {
        labels: ["Hommes", "Femmes"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: ['rgba(250, 219, 143, 0.5)', 'rgba(103, 189, 232, 0.7)'],
            borderColor: ['rgba(250, 219, 143)', 'rgba(103, 189, 232)'],
            data: data.datasets[0].all.parity,
        }]
    },
    options: {
      legend:{
        position: 'bottom'
      }
    }
});

});
};
