import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import Schema from './database/schema/schema.js'

const app = express()
const port = 4000

app.use('/graphql', graphqlHTTP({ schema: Schema, graphiql: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
