


const buttonEl = document.querySelector("#button");
const userInputEl = document.querySelector("#userInput")

buttonEl.addEventListener('click', async function() {

    const userInput = userInputEl.value;
    const response = await fetch(`https://api.abalin.net/getdate?name=${userInput}&country=se`);
    const data = await response.json()
    console.log(data);

    


   console.log(userInput);

});