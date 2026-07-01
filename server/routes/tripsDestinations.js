import express from 'express'
import tripsDestinationsController from '../controllers/tripsDestinations.js'

const router = express.Router()

router.get('/', tripsDestinationsController.getTripsDestinations)
router.get('/trips/:destination_id', tripsDestinationsController.getAllTrips)
router.get('/destinations/:trip_id', tripsDestinationsController.getAllDestinations)
router.post('/', tripsDestinationsController.createTripDestination)

export default router