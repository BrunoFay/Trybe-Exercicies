import React, { Component } from 'react'
import { connect } from 'react-redux'
import {infos} from '../actions'

export class Search extends Component {
  constructor() {
    super()
    this.state = { digiValue: '' }
  }
  handleClick = (e) => {
    const { digiValue } = this.state
    e.preventDefault()
   return digiValue
  }
  render() {
    const {digimonState}=this.props
    return (
      <div>
        <input onChange={({ target }) => this.setState({ digiValue: target.value, })}></input>
        <button type='submit' onClick={(e)=>digimonState(this.handleClick(e))}>pesquisar</button>
      </div>
    )
  }
}



const mapDispatchToProps =(dispatch)=> ({
  digimonState:(state)=>dispatch(infos(state))
})

export default connect( mapDispatchToProps)(Search)
