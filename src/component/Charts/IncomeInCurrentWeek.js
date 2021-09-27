import React from 'react'
import {Line} from 'react-chartjs-2'

const IncomeInCurrentWeek = () => {
    const data = {
        labels:['25 july','26 July','27 july','28 july','29 july','30 july','31 July'],
        datasets:[
            {
                label:'Income in current week',
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
            <Line   className="bg-white rounded-xl shadow-xl" data={data} options={options} />
    )
}

export default IncomeInCurrentWeek
