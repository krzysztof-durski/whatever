import express from 'express'

const app = express()
const PORT = 3000

app.listen(PORT, () => {
  console.log(`👋 Started server on port ${PORT}`)
})

app.get('/', (request, response) => {
    response.send('Welcome to my Whatever! You can go to: /about , /contact or /uchoose/...')
  })

app.get('/about', (request, response) => {
    response.send('There is nothing about me!')
  } 
)

app.get('/contact', (request, response) => {
    response.send('You can always try to contact me!')
  }
)

app.post('/contact', (request, response) => {
    response.send("Your message has been sent! We'll probably never answer you!")
  }
)

app.get('/uchoose/:id', (request, response) => {
    const whateverId = request.params.id
  
    response.send(`You chose the cookie with the ID of ${whateverId}`)
  })