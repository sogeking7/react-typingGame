const express = require('express')
const app = express()
const cors = require('cors')

port = 4000
app.use(cors());

app.get('/api/text', (req, res) => {
	res.json(
		{
			message: 'Hello from backend'
		}
	)
})
app.listen(port, ()=>{
	console.log(`Server is running on port ${port}`)
})