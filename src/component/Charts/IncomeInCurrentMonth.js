import React from 'react'
import {Line} from 'react-chartjs-2'

const IncomeInCurrentMonth = () => {
    const data = {
        labels:['1-july','8-July','16-july','24-july','31-july'],
        datasets:[
            {
                label:'patients 2019',
                data:[60000,20000,40000,100000,80000],
                fill:false,
                backgroundColor: 'rgb(255,99,132)',
                borderColor:'3063c8df5',
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
            <Line className="bg-white shadow-xl rounded-xl" data={data} options={options} />
    )
}

export default IncomeInCurrentMonth
