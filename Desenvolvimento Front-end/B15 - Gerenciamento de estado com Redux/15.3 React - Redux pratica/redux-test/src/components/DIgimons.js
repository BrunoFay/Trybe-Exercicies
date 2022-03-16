import React, { Component } from 'react'
import { connect } from 'react-redux'


export class DIgimons extends Component {
  constructor() {
    super()
    this.state = {
      digimonState: []
    }
  }
  componentDidMount() {
    this.Setstate()
  }
  async Setstate() {
   
  }

  render() {

    const { digimonState } = this.state
    return (
      <div>
    
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DIgimons)
