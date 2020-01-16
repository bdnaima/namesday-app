


// Getting name
const buttonEl = document.querySelector("#button");
const userInputEl = document.querySelector("#userInput");
const userInputCountry = document.querySelector("#userInputCountry");

buttonEl.addEventListener('click', async function() {

    const userInput = userInputEl.value;
    const country = userInputCountry.value;

    const data = await fetchDate(userInput, country);

    const nameInput = document.querySelector("#nameInput");
    let html = "";

    
    data.results.forEach((item) => {
          
        html += `<h2 style = "text-align: center; color: black;">${item.name}</h2>
                <h3 style = "background-color: brown; width: 50%; text-align: center;">${item.month}</h3>
                <h3 style="background-color: white; color: black; width: 50%; text-align: center;">${item.day}</h3>
                `;
        nameInput.innerHTML = html;
    
    });

});

// Getting the date
const userInputMonth = document.querySelector("#userInputMonth");
const userInputDay = document.querySelector("#userInputDay")
const dateButton = document.querySelector("#dateButton")

dateButton.addEventListener('click', async function() {
    const country = userInputCountry.value;
    const dateValue = userInputMonth.value;
    const dayValue = userInputDay.value
    

    const result = await fetchName(country, dateValue, dayValue)

    console.log(result);

    const nameInput = document.querySelector('#nameInput');
    const resultNames = result.data[0].namedays[country];

    nameInput.innerHTML = `<h2>${resultNames}<h2>`;
});