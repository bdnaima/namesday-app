

// Getting name by choice of country.

const buttonEl = document.querySelector("#button");
const userInputEl = document.querySelector("#userInput");
const userInputCountry = document.querySelector("#userInputCountry");
const errMsg = document.querySelector("#error")

buttonEl.addEventListener('click', async function() {

    const userInput = userInputEl.value;
    const country = userInputCountry.value;
    
    try {
        const data = await fetchDate(userInput, country);
        const nameInput = document.querySelector("#nameInput");
        let html = "";
        errMsg.innerText = "";

        data.results.forEach((item) => {
          
            html += `<h2 style = "text-align: center; background-color: orange; color: black; border-radius: 20px;">${item.name}</h2>
                    <h3 style = "background-color: brown; width: 50%; text-align: center;">${item.month}</h3>
                    <h3 style="background-color: white; color: black; width: 50%; text-align: center;">${item.day}</h3>
                    `;
            nameInput.innerHTML = html;
        });
    } catch (error) {
        errMsg.innerText = "Oops! Something went wrong!";
    }
});

// Getting name by choice of date.

const userInputMonth = document.querySelector("#userInputMonth");
const userInputDay = document.querySelector("#userInputDay")
const dateButton = document.querySelector("#dateButton")

dateButton.addEventListener('click', async function() {
    const country = userInputCountry.value;
    const dateValue = userInputMonth.value;
    const dayValue = userInputDay.value
    
    try {
        const result = await fetchName(country, dateValue, dayValue)
        const nameInput = document.querySelector('#nameInput');
        const resultNames = result.data[0].namedays[country];
        errMsg.innerText = "";

        nameInput.innerHTML = `<h2 style = "background-color: orange; color: black; border-radius: 20px;">${resultNames}<h2>`;
        
    } catch (error) {
        errMsg.innerText = "Oops! Something went wrong!";
    }
});