var ctx = document.getElementById("genderChart").getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
    datasets: [{
        data: [100,
        		0,],
        backgroundColor: [
              "rgba(133, 255, 255, 1)",
              "rgba(255, 107, 255, 1)",
            ],

    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Male',
        'Female',
    ]
	},

    // Configuration options go here
    options: {}
});
var genderChart = new Chart(ctx, {
});
