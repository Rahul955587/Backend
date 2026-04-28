const express = require('express');
const Job=require('../model/Jobs')
const router = express.Router();

//Create API for jb Posting
router.post('/', async (req, res) => {
    const job=new Jobs(req.body)
    const saveJob = await job.save();
    res.send(saveJob);
})

//List All Jobs
router.get('/', async (req, res) => {
    const job = await Job.find();
    res.send(job);
});

//update Jobs description
router.put('/:id', async (res, res) => {
    const job = await Job.findByIdAndUpdate(req.params.id);
    res.send({ msg: "Job Updated" });
})

router.delete("/:id", async (res, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  res.send({ msg: "Job deleted" });
});

module.exports = router;