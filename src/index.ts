import express, { json, Request, Response } from "express"
import httpStatus from "http-status"
import router from "routes/index.routes"

const app = express()

app.use(json())
app.use(router)


const port: number = parseInt(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log(`Server ir up and running on port ${port}`)
})