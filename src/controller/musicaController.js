import * as db from '../repository/musicaRepository.js'

import { Router } from "express";
const endpoints = Router()



endpoints.get('/musica', async (req, resp) => {
    try {
        let registros = await db.consultarMusicas()
        resp.send(registros)
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/musica/:playlistId', async (req, resp) => {
    try {
        let playlistId = req.params.playlistId
        let registros = await db.consultarPlaylist(playlistId)

        resp.send (registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/playlist', async (req, resp) => {
    try {
        let nm_playlist = req.query.nm_playlist
        let id = await db.inserirPlaylist(nm_playlist)

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/musica', async (req, resp) => {
    try {
        let musica = req.body
        let id = await db.inserirMusica(musica)
    
        resp.send({
            novoId: id
        })
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints;