import { get, set } from './frameworks/czark.js'
import Axios from './frameworks/Axios.js'
import api from './utils/Endpoints.js'

const principal = async () => {
    loading(true)

    const genres = await getGenres()
    showGenresOnScreen()

    const topMusics = await getTopMusics()
    saveTopMusicsToSession()
    showTopMusicsOnScreen()

    loading(false)
    //End of Principal

    async function getGenres() {
        return false;
        return await Axios
            .get(api.genres)
            .then(res => res.data)
            .catch(console.warn)
    }

    async function getTopMusics() {
        return await Axios
            .get(api.trend)
            .then(res => res.data)
            .catch(console.warn)
    }

    function showGenresOnScreen() {
        const genresList = get.Id('genres-list')

        if (genresList) {
            for (const item of genres.items) {
                const genre = createGenre(item.genre)

                genresList.insertAdjacentHTML('beforeend', genre)
            }
        }

        function createGenre(item) {
            return (
                `<div class="slide genre-option">
                    <img src='${item.cover_artwork_uri}'/>
                </div>`
            )
        }
    }

    function showTopMusicsOnScreen() {
        const topMusicsList = get.Id('top-music-list')

        let index = 0

        if (topMusicsList) {
            for (const item of topMusics) {
                const music = createMusicTag(item.track, index++)

                topMusicsList.insertAdjacentHTML('beforeend', music)
            }
        }

        function createMusicTag(item, i) {
            return (
                `<div class="card music" onclick="selectTrack(${i})">
                    <div class="thumb">
                        <img class='music-thumb' src="${item.cover_artwork_uri}" />
                    </div>

                    <div class="info">
                        <p class="title">${item.title}</p>
                        <p class='legend'>${item.display_artist}</p>
                    </div>
                </div>`
            )
        }
    }

    function saveTopMusicsToSession() {
        set.Session('PlaylistOnScreen', topMusics)
    }
}

    ; (principal)()