


const buttonEl = document.querySelector("#button");
const userInputEl = document.querySelector("#userInput")
// const userInputCountry = document.querySelector("#userInputCountry")
 
buttonEl.addEventListener('click', async function() {

    const userInput = userInputEl.value;
   // const userInputTwo = userInputCountry.value;


    const response = await fetch(`https://api.abalin.net/getdate?name=${userInput}&country=se`);
    const data = await response.json()
    console.log(data);

    const date = await fetch(`https://api.abalin.net/namedays?&month=7&day=15`);
    const result = await date.json();
    console.log(result);

    const nameInput = document.querySelector("#nameInput");
    const dataResults = data.results;

    let html = ""
    dataResults.forEach((item) => {
        html += `<p>${item.name}</p>
                 <p>${item.month}</p>
                 <p>${item.day}</p>`;
    });

    nameInput.innerHTML = html;


   console.log(userInput);
//    console.log(userInputTwo);

});