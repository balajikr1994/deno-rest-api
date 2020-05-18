interface IMovies {
    id: string,
    movieName: string,
    studio_id: number
}


let movies: Array<IMovies> = [{
    id: '1',
    movieName: 'Avengers End Game',
    studio_id: 2
}, {
    id: '2',
    movieName: 'Avengers Infinity War',
    studio_id: 2
}, {
    id: '3',
    movieName: 'Thor - Rangarok',
    studio_id: 2
}]


export const getMovies = ({ response }: { response: any }) => {
    response.body = movies
}

export const getMovie = ({ params, response }: { params: { id: string }; response: any }) => {
    const movie: IMovies | undefined = searchMovieByID(params.id)
    if (movie) {
        response.status = 200
        response.body = movie
    } else {
        response.status = 404
        response.body = { message: "Movies Not Found" }
    }
}

/* return the movie if found and undefined if not */
const searchMovieByID = (id: string): (IMovies | undefined) => movies.filter(movie => movie.id.toString() === id)[0]


export const addMovie = async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body();
    const movieName: IMovies = body.value
    movies.push(movieName)
    response.body = { message: 'Movie Added Successfully' }
    response.status = 200
}

export const updateMovie = async ({ params, request, response }: { params: { id: string }; request: any; response: any }) => {
    let movie: IMovies | undefined = searchMovieByID(params.id)
    if (movie) {
        const body = await request.body()

        const updateInfos: { movieName?: string; studio_id?: number } = body.value
        movie = { ...movie, ...updateInfos }
        movies = [...movies.filter(movie => movie.id !== params.id), movie]
        response.status = 200
        response.body = { message: "Movies details Updated Successfully!" }
    } else {
        response.status = 404
        response.body = { message: "Movie Not found" }
    }
}

export const deleteMovie = ({ params, response }: { params: { id: string }; response: any }) => {
    movies = movies.filter(movie => movie.id !== params.id)
    response.body = { message: "Movie deleted successfully" }
    response.status = 200
}

