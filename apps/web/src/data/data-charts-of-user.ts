export const chartDataForUsers =[
    {
        "chartID":1,
        "chartType":"Stacked Bar Chart",
        "chartName":"Cards created monthly (Grouped By Label)",
        "chartImage":"https://chartio.com/assets/9bfb20/tutorials/charts/stacked-bar-charts/073137bf11f1c2226f68c3188128e28d66115622dcdecc9bc208a6d4117f53e8/stacked-bar-example-1.png",
        "chartDetails":{
            "chartMainName":"Monthly Created Card",
            "chartSubName":"Group by Label",
            "chartFilters":{
                "label":"",
                "status":"",
                "from":"",
                "to":""
            },
        },
        "apiUrl":'http://localhost:3000/api/reports/chart?'
    },
    {
        "chartID":2,
        "chartType":"Bar Chart",
        "chartName":"Tasks completed monthly",
        "chartImage":"https://chartio.com/assets/9bfb20/tutorials/charts/stacked-bar-charts/073137bf11f1c2226f68c3188128e28d66115622dcdecc9bc208a6d4117f53e8/stacked-bar-example-1.png",
        "chartDetails":{
            "chartMainName":"Tasks completed monthly",
            "chartSubName":"Group by Label",
            "chartFilters":{
                "label":"",
                "status":"",
                "from":"",
                "to":""
            },
        },
        "apiUrl":'http://localhost:3000/api/reports/chartMonthlyCompletedCards?'
    },
];
