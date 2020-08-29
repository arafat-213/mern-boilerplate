const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		await mongoose.connect('MONGO_URI', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		})
		console.log('database connected')
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

module.exports = connectDB
