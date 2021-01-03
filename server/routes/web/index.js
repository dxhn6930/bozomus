module.exports = app => {
    const router = require('express').Router()
    const ObjectID = require('mongodb').ObjectId;
    

    router.get('/musics/list', async (req, res) => {
        req.Model = require(`../../models/Music`)
        const music = await req.Model.find()
        res.send(music)
    })

    // router.get('/Music/list', async (req, res) => {
    //     let {_id} = req.query
    //     _id = new ObjectID(_id)
    //     req.Model = require(`../../models/Music`)
    //     const music = await req.Model.findOne({_id: _id})
    //     res.send(music)
    // })

    router.get('/ads/list', async (req, res) => {
        req.Model = require(`../../models/Ad`)
        const ad = await req.Model.find()
        res.send(ad)
    })

    app.use('/web/api', router)
}    