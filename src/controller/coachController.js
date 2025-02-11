//post -> criar um treinador
// get -> visualizar todos os treinadores
// get -> visualizar um treinador por id
//patch ->
//delete ->


//const {name, age, team } = request.body
//const age = request.body.age
//const name = request.body.name
//const team = request.body.team

const CoachModel = require('../models/coachModel')
const createCoach = async (request, response) => {
   try {
      const { name, team, region, age, gender } = request.body

      const newCoach = new CoachModel({
        name, team, region, age, gender
      })

       const savedCoach = await newCoach.save()

       response.status(201).json(savedCoach)
    } catch (error) {
      console.error(error)
      response.status(500).json({ message: error.message })
    }
}

const findAllCoaches = async (request, response) => {
    try {
        const allCoaches = await CoachModel.find()
        response.status(200).json(allCoaches)
    } catch(error){
        console.error(error)
        response.status(500).json({ message: error.message })
    }
}

const findCoachById = async (request, response) => {
   try {
    const findCoach = await CoachModel.findById(request.params.id)
    response.status(200).json(findCoach)
   } catch (error) {
     console.error(error)
     response.status(500).json({ message: error.message })
   }
}

const updateCoach = async (request, response) => {
    try {
        const {name, age, region,team, gender } = request.body
        const updatedCoach = await CoachModel
        findByIdAndUpdate(requeste.params.id, {
            name, age, region, team, gender
        })
        response.status(200).json(updatedCoach)
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
 }

 const deleteCoach = async (request, response) => {
    try {
        const { id } = request.params
        await CoachModel.findByIdAndDelete(id)
        const message = `O treinador com o ${id} foi deletado com sucesso!`
        response.status(200).json({ message })
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: error.message })
    }
}



  
  

module.exports = {
  createCoach,
  findAllCoaches,
  updateCoach,
  deleteCoach,
  findCoachById
}