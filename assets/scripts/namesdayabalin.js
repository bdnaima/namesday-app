/**
 * Names day Abalin
 */

 async function fetchDate(name, country) {

    const response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=${country}`)
    const data = await response.json()
    console.log(data)
    return data;
 }

 async function fetchName(country, month, day) {
    const responseDate = await fetch(`https://api.abalin.net/namedays?country=${country}&month=${month}&day=${day}`);
    const result = await responseDate.json();
    return result;
 }

