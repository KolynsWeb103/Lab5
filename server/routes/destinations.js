import express from 'express'
import destinationsController from '../controllers/destinations.js'

const router = express.Router()

router.get('/', destinationsController.getDestinations)
router.get('/:id', destinationsController.getDestination)
router.post('/', destinationsController.createDestination)
router.delete('/:id', destinationsController.deleteDestination)
router.patch('/:id', destinationsController.updateDestination)

export default router