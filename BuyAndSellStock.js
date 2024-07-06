//prices = [7,6,4,3,1];
//prices = [2, 4, 1];
prices=[7,1,5,3,6,4]

//Approach 1

// function calculateProfit(prices) {
//   if (prices.length > 0) {
//     let profit = 0;
//     for (let i = 0; i < prices.length - 1; i++) {
//       for (j = i + 1; j < prices.length; j++) {
//         if (prices[j] > prices[i] && prices[j] - prices[i] > profit) {
//           profit = prices[j] - prices[i];
//         }
//       }
//     }
//     console.log(max);
//   }
// }

//Approach2 =>Not working 

// function calculateProfit(prices) {
//   if (prices.length > 0) {
//     let max = 0;
//     let desc_prices = [...prices];
//     desc_prices.sort(function (a, b) {
//       return b - a;
//     });
//     console.log(desc_prices, prices);
//     if (JSON.stringify(desc_prices) === JSON.stringify(prices)) {
//       console.log(max);
//     } else {
//       let aesc = [...prices];
//       aesc.sort(function (a, b) {
//         return a - b;
//       });
//       let i = 0;
//       let j = prices.length - 1;
//       console.log(aesc, prices);
//       while (i !== j) {
//         console.log(i, j);
//         console.log("indices", aesc[i], aesc[j]);
//         if (prices.indexOf(aesc[i]) < prices.indexOf(aesc[j])) {
//           max = aesc[j] - aesc[i];
//           console.log(max);
//           return;
//         } else {
//           j--;
//         }
//       }
//     }
//   }
// }

//Approach 3 => Greedy Algorithm

// function calculateProfit(prices){
//     let min=prices[0]
//     let profit=0
//     for(let j=1;j<prices.length;j++){
//         if(prices[j]<min){
//             min=prices[j]
//         }
//         if(prices[j]-min<0){
//             profit=0
//         }
//         if(prices[j]-min>profit){
//             profit=prices[j]-min
//         }

//     }
//     console.log(profit)
// }

//Approach4=> Greedy Algorithm


function calculateProfit(prices){
    let min=prices[0]
    let profit=0
    for(let j=1;j<prices.length;j++){
        if(prices[j]<min){
            min=prices[j]
        }
        profit=Math.max(profit,prices[j]-min)

    }
    console.log(profit)
}

calculateProfit(prices);
