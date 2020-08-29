const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = 5000 || process.env.PORT
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

app.use(bodyParser.json())
app.get('/api/customers', (req, res) => {
	const customers = [
		{ id: 0, firstName: 'This data is', lastName: 'fetched from server' },
		{ id: 1, firstName: 'Jon', lastName: 'Snow' },
		{ id: 2, firstName: 'Tyrion', lastName: 'Lannister' },
		{ id: 3, firstName: 'Dany', lastName: 'Targaryen' }
	]
	res.json(customers)
})

app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`)
})
