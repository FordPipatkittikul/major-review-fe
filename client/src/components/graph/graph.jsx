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

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function getQuality(reviews,number) {
    let count = 0;
    for (let i = 0; i < reviews.length; i++){
        if(reviews[i].quality === number){
            count += 1
        }
    }
    return count 
}

export function getAvgQuality(reviews){
    let totalQuality = 0
    for (let i = 0; i < reviews.length; i++){
        totalQuality = totalQuality + reviews[i].quality
    }
    return totalQuality/reviews.length
}

export function getAvgDifficulty(reviews){
    let totalDifficulty = 0
    for (let i = 0; i < reviews.length; i++){
        totalDifficulty = totalDifficulty + reviews[i].difficulty
    }
    return totalDifficulty/reviews.length
}

export function Graph({reviews}) {
    let one = getQuality(reviews, 1)
    let two = getQuality(reviews, 2)
    let three = getQuality(reviews, 3)
    let four = getQuality(reviews, 4)
    let five = getQuality(reviews, 5)
    const data = {
        labels: ["Awesome 5", "Great 4", "Good 3", "Ok 2", "Awful 1"],
        datasets: [{
          label: 'Rating distribution',
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

