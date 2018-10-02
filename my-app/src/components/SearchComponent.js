import React from 'react'
import { fetchMatchDataById } from '../functions/getMatchInfo'

function submitMatchId (searchComponent) {
    const matchId = document.getElementById('matchId').value
    if (matchId) {
        searchComponent.setState({result: 'LOADING...'})
        let c = searchComponent.state
        fetchMatchDataById(matchId, searchComponent)
    } else {
        alert('Please insert a match ID.')
    }
}

export default class SearchComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            result: null
        }
    }
    render() {
        return (
            <div id='mainSearch'>
                <input id='matchId' className='form-control' type='text' name='matchId' placeholder='Enter match ID' />
                <button id='submitId' className='btn' onClick={ () => submitMatchId(this) }>Submit</button>
                {this.state.result}
            </div>
        )
    }
}