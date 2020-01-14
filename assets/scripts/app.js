


const buttonEl = document.querySelector("#button");
const userInputEl = document.querySelector("#userInput")
const userInputCountry = document.querySelector("#userInputCountry")
 
buttonEl.addEventListener('click', async function() {

    const userInput = userInputEl.value;
    const country = userInputCountry.value
   // const userInputTwo = userInputCountry.value;


    const response = await fetch(`https://api.abalin.net/getdate?name=${userInput}&country=${country}`);
    const data = await response.json()
    console.log(data);


    const nameInput = document.querySelector("#nameInput");

    let html = "";
    data.results.forEach(async (item) => {
        
        const response = await fetch(`https://api.abalin.net/namedays?&month=${item.month}&day=${item.day}`);
        const result = await response.json();

        html += `<h1>${item.name}</h1>
                <h2>Month</h2>
                <h3>${item.month}</h3>
                <h2>Day</h2>
                <h3>${item.day}</h3>
                <h2>Other names around the world</h2>
                <p>${result.data[0].namedays}</p>`;

        nameInput.innerHTML = html;

        console.log(result);
    
    });

   


   //console.log(userInput);
//    console.log(userInputTwo);

});