/**
 * created by maning
 */
angular.module('homEco').directive('chartjsBarHomeTotalAccount', function(){
    // var data1 = {
    //     labels : ["January","February","March","April","May","June","July"],
    //     datasets : [
    //         {
    //             fillColor : "rgba(220,220,220,0.5)",
    //             strokeColor : "rgba(220,220,220,1)",
    //             data : [65,59,90,81,56,55,40]
    //         },
    //         {
    //             fillColor : "rgba(151,187,205,0.5)",
    //             strokeColor : "rgba(151,187,205,1)",
    //             data : [28,48,40,19,96,27,100]
    //         }
    //     ]
    // }
    // //Get the context of the canvas element we want to select
    // var ctx1 = document.getElementById("myChart1").getContext("2d");
    // var myNewChart = new Chart(ctx1).Bar(data1,null);
    //
    // var data2 = [
    //     {
    //         value: 30,
    //         color:"#F38630"
    //     },
    //     {
    //         value : 50,
    //         color : "#E0E4CC"
    //     },
    //     {
    //         value : 100,
    //         color : "#69D2E7"
    //     }
    // ]
    // //Get the context of the canvas element we want to select
    // var ctx2 = document.getElementById("myChart2").getContext("2d");
    // var myNewChart2 = new Chart(ctx2).Pie(data2,null);

    return {
        restrict: 'A',
        link: function (scope, element, attributes) {

            var data = {
                labels: ["冷清秋", "小二", "李四", "杨文辉"],
                datasets: [
                    {
                        label: "办结",
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1,
                        data: [65, 59, 80, 81],
                    },
                    {
                        label: "未办结",
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(255,99,132,1)',
                            'rgba(255,99,132,1)',
                            'rgba(255,99,132,1)'
                        ],
                        borderWidth: 1,
                        data: [24, 36, 57, 88],
                    }
                ]
            };

            var ctx = element[0].getContext("2d");
            new Chart(ctx, {
                type: "horizontalBar",
                data: data,
                options: {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });

        }
    }
});