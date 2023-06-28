import { getRandomPersonDB } from "repositories/random.repository"

export async function getRandomPerson(req, res){
    try{
const person = await getRandomPersonDB()
return res.status(200).send(person)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}