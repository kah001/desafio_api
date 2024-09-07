import musicaController from './controller/musicaController.js'

export default function adicionarRotas(servidor) {
    servidor.use(musicaController)
}