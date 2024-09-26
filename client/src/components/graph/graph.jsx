import { useContext, useState } from "react";

import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"
import apiRequest from "../../lib/apiRequest";

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function getQuality(review,number) {
    let count = 0;
    for (let i = 0; i < review.length; i++){
        if(review[i].quality === number){
            count += 1
        }
    }
    return count 
}

function Graph({reviews}) {
    let one = getQuality(reviews, 1)
    let two = getQuality(reviews, 2)
    let three = getQuality(reviews, 3)
    let four = getQuality(reviews, 4)
    let five = getQuality(reviews, 5)
    const data = {
        labels: ["Awesome 5", "Great 4", "Good 3", "Ok 2", "Awful 1"],
        datasets: [{
          label: 'Quality',
          data: [five, four, three, two, one],
          backgroundColor: [
            'rgba(255, 205, 86, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(255, 205, 86, 0.2)',
          ],
          borderColor: [
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
          ],
          borderWidth: 2
        }]
    };

    

    return <Bar options={{indexAxis:'y'}} data={data}/>
}

export default Graph;