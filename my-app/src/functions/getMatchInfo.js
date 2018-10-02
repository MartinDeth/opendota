import axios from 'axios'

export function fetchMatchDataById (matchId, searchComponent) {
    const url = `https://api.opendota.com/api/matches/${matchId}`
    axios.get(url)
    .then((response) => {
        // data successfully received
        searchComponent.setState({result: JSON.stringify(response.data)})
    })
    .catch((error) => {
        // an error occurred
        console.log(error)
    })
}