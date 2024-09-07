import con from "./connection.js";

export async function inserirMusica(musica) {
    const comando = `
        insert into tb_musica (nm_musica, ds_artista, url_musica, dt_lancamento, qtd_visualizacoes, hr_duracao, bt_destaque, FKid_playlist)
        values (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [musica.nome, musica.artista, musica.url, musica.lancamento, musica.visualizacoes, musica.duracao, musica.destaque, musica.FKid_playlist])
    let info = resposta[0]

    return info.insertId;
}


export async function inserirPlaylist(nm_playlist) {
    const comando = `
        insert into tb_playlist (nm_playlist)
            values (?)
    `;

    let resposta = await con.query(comando, [nm_playlist])
    let info = resposta[0]

    return info.insertId;
}


export async function consultarMusicas() {
    const comando = `
        select id_musica            id,
                nm_musica           nome,
                ds_artista          artista,
                url_musica          url,
                dt_lancamento       lancamento,
                qtd_visualizacoes   visualizacoes,
                hr_duracao          duracao,
                bt_destaque         destaque,
                FKid_playlist       FKid_playlist
        from tb_musica
    `;

    let resposta = await con.query(comando)
    let registros = resposta[0]

    return registros;
}

export async function consultarPlaylist(playlistId) {
    const comando = `
        SELECT id_musica            id,
                nm_musica           nome,
                ds_artista          artista,
                url_musica          url,
                dt_lancamento       lancamento,
                qtd_visualizacoes   visualizacoes,
                hr_duracao          duracao,
                bt_destaque         destaque,
                FKid_playlist       FKid_playlist
        FROM tb_musica 
        INNER JOIN tb_playlist ON tb_playlist.id_playlist = ?
    `;

    let resposta = await con.query(comando, [playlistId])
    let registros = resposta[0]

    return registros;
}