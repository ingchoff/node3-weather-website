console.log('Client side js file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((res) =>{
    res.json().then((data) => {
        console.log(data)
    })
})

// fetch(`http://api.weatherstack.com/current?\
// access_key=d14f1aaee5a9680eb1062ec02e9c2b60&query=13,100`).then((res) => {
//     res.json().then((data) => {
//         if (data.error){
//             return console.log(data.error.info)
//         }
//         const dataCurrent = data.current
//         const result = `${dataCurrent.weather_descriptions[0]}. It's currently ${dataCurrent.temperature} degress out. It feels like ${dataCurrent.feelslike} degress out.`
//         console.log(result)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
        res.json().then((data) => {
            if (data.error){
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})