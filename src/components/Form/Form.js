import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    postTrick = event => {
        event.preventDefault()
        const newTrick = {
            id: Date.now(),
            ...this.state
        }
        this.props.newTrick(newTrick)
    }

    render() {
        return (
            <form>
                <select
                    name='stance'
                    onChange= {event => this.handleChange(event)}
                >
                    <option value=''>Choose your Stance</option>
                    <option value='regular'>Regular</option>
                    <option value='switch'>Switch</option>
                </select>

                <input
                    type='text'
                    name='name'
                    placeholder='Name of Trick'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />

                <select
                    name='obstacle'
                    //'Flatground', 'Ledge', 'Rail', 'Stairs', and 'Pool'
                    onChange= {event => this.handleChange(event)}
                >
                    <option value=''>Choose your Obstacle</option>
                    <option value='flatground'>Flatground</option>
                    <option value='ledge'>Ledge</option>
                    <option value='rail'>Rail</option>
                    <option value='stairs'>Stairs</option>
                    <option value='pool'>Pool</option>
                </select>

                <input
                    type='text'
                    name='tutorial'
                    placeholder='Link to Tutorial'
                    value={this.state.tutorial}
                    onChange={event => this.handleChange(event)}
                />

                <button onClick={event => this.postTrick(event)}>Send it!</button>

            </form>
        )
    }
}

export default Form