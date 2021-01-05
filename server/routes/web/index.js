module.exports = app => {
    const router = require('express').Router()
    // const Object = require('mongodb').ObjectId;
    

    router.get('/musics/list', async (req, res) => {
        req.Model = require(`../../models/Music`)
        const music = await req.Model.find()
        res.send(music)
    })

    // router.get('/Music/search', async (req, res) => {
    //     let {name, title} = req.query
    //     name = new Object(name)
    //     title = new Object(title)
    //     req.Model = require(`../../models/Music`)
    //     const music = await req.Model.find({title: title} || {name: name})
    //     res.send(music)
    // })

    router.get('/ads/list', async (req, res) => {
        req.Model = require(`../../models/Ad`)
        const ad = await req.Model.find()
        res.send(ad)
    })

    app.use('/web/api', router)
}    