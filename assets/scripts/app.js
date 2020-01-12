


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

    let html = ""
    data.results.forEach(async (item) => {
        
        const response = await fetch(`https://api.abalin.net/namedays?&month=${item.month}&day=${item.day}`);
        const result = await response.json();

        html += `<p>${item.name}</p>
                 <p>${item.month}</p>
                 <p>${item.day}</p>
                 <p>${result.data[0].namedays.fr}</p>`;

        nameInput.innerHTML = html;

        console.log(result);
    
    });

   


   //console.log(userInput);
//    console.log(userInputTwo);

});