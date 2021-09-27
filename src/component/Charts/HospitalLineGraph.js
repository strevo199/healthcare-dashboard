import React from 'react'
import {Line} from 'react-chartjs-2'

const HospitalLineGraph = () => {
    const data = {
        labels:['2020-1','2020-2','2020-3','2020-4','2020-5','2020-6','2020-7','2020-8','2020-9','2020-10','2020-11','2020-12'],
        datasets:[
            {
                label:'patients 2019',
                data:[14,190,130,150,200,240,120,100,310,240,214,200],
                fill:false,
                backgroundColor: 'rgb(255,99,132)',
                borderColor:'rgba(255,99,132,0.2)',
            },
            {
            label: 'patients 2021',
            data: [50, 100, 150,70, 250, 300,200,301,204,120,68],
            fill: true,
            backgroundColor: '#e2de117c',
            borderColor: '#e2df11',
            },
        ]
    }

    const options = {
        scales: {
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left',
            //   id: 'y-axis-1',
            },
           
          ],
        },
       
      };
    return (
            <Line className="bg-white shadow-xl rounded-xl " data={data} options={options} />
    )
}

export default HospitalLineGraph
