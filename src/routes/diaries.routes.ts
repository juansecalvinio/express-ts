import express from 'express'
import * as diaryServices from '../services/diaries.services'
import toNewDiaryEntry from '../utils/diaries.utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id))

  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  console.log(req.body)
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addEntry(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
