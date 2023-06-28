import { db } from "database/database.connection"

export async function getRandomPersonDB(){
    const result = await db.query(`SELECT * FROM PEOPLE LIMIT 1`)
    return result
}