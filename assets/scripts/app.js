

const buttonEl = document.querySelector("#button");
const userInputEl = document.querySelector("#userInput");
const userInputCountry = document.querySelector("#userInputCountry");

buttonEl.addEventListener('click', async function() {

    const userInput = userInputEl.value;
    const country = userInputCountry.value;


    const response = await fetch(`https://api.abalin.net/getdate?name=${userInput}&country=${country}`)
    const data = await response.json()
    console.log(data)


    const nameInput = document.querySelector("#nameInput");

    let html = "";


    data.results.forEach(async (item) => {
        
  
        html += `<h2>${item.name}</h2>
                <h3 style = "background-color: red; width: 50%; text-align: center;">${item.month}</h3>
                <h3 style="background-color: white; color: black; width: 50%; text-align: center;">${item.day}</h3>`;

        nameInput.innerHTML = html;

        console.log(result);
    
    });

});

// Getting the dat  e
const userInputMonth = document.querySelector("#userInputMonth");
const dateButton = document.querySelector("#dateButton")

dateButton.addEventListener('click', async function() {
    const dateValue = userInputMonth.value;
    const country = userInputCountry.value;

    const responseDate = await fetch(`https://api.abalin.net/namedays?country=${country}&month=${dateValue}&day=15`);
    const result = await responseDate.json();

    console.log(result);

    const nameInput = document.querySelector('#nameInput');
    const resultNames = result.data[0].namedays[country];

    nameInput.innerHTML = `<p>${resultNames}</p>`;
});
