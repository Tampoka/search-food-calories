function search(query, cb) {
    return fetch(`/api/food?q=${query}`, {
        accept: 'application/json',
    })
        .then(checkStatus)
        .then(parseJson)
        .then(cb)
        .catch((error) => console.log(error.message))
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        const error = new Error(`HTTP Error ${response.statusText}`)
        error.status = response.statusText
        error.response = response
        console.log(error)
        throw error
    }
}

function parseJson(response) {
    return response.json()
}

const Client = {search}
export default Client