import Axios from './frameworks/Axios.js'
import api from './utils/Endpoints.js'
import { get } from './frameworks/czark.js'

const principal = async () => {
    loading(true)

    const genres = await getGenres()
    const topMusics = await getTopMusics()
    
    showGenresOnScreen()
    showTopMusicsOnScreen()

    loading(false)
    //End of Principal

    async function getGenres() {
        return await Axios
            .get(api.genres)
            .then(res => res.data)
            .catch(console.warn)
    }

    async function getTopMusics() {
        return await Axios
            .get(api.search)
            .then(res => res.data)
            .catch(console.warn)
    }

    function showGenresOnScreen() {
        const genresList = get.Id('genres-list')
        
        for(const item of genres.items) {
            const genre = createGenre(item.genre)

            genresList.insertAdjacentHTML('beforeend', genre)
        }

        function createGenre(item) {
            return (
               `<div class="slide">
                    <img src='${item.cover_artwork_uri}'/>
                </div>`
            )
        }
    }

    function showTopMusicsOnScreen() {
        const topMusicsList = get.Id('top-music-list')

        for(const item of topMusics.items) {
            const music = createMusicTag(item.track)

            topMusicsList.insertAdjacentHTML('beforeend', music)
        }

        function createMusicTag(item) {
            return (
               `<div class="card music" onclick="selectTrack(this)" data-music-id='1' data-music-cover='${item.cover_artwork_uri}' data-music-url="${item.progressive_download_url}">
                    <div class="thumb">
                        <img class='search-thumb' src="${item.cover_artwork_uri}" />
                    </div>

                    <div class="info">
                        <p class="title">${item.title}</p>
                        <p class='legend'>${item.display_artist}</p>
                    </div>
                </div>`
            )
        }
    }
}

;(principal)()