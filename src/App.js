import React, { Component } from 'react';

class App extends Component {
  constructor() {
  super()
  this.state = {
    guests: [],
    recentGuestName:"",
    recentGuestLast: "",
  }
}
actGuestName(event){
  this.setState({
    recentGuestName: event.target.value
  })
}
actGuestLast(event){
  this.setState({
    recentGuestLast: event.target.value
  })
}
handleSubmit = (e) =>{
  var taskId = this.state.guests.length + 1
  this.setState({
    guests: this.state.guests.concat({id: taskId, name: this.state.recentGuestName, last: this.state.recentGuestLast}),
    recentGuestName:"",
    recentGuestLast:"",
  })
  e.preventDefault();
}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
             <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" value={this.state.recentGuestName} onChange={this.actGuestName.bind(this)} className="form-control" name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                                <input type="text" value={this.state.newGuestLast} onChange={this.actGuestLast.bind(this)} className="form-control" name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.guests.map((guest, index) => <tr> <td>{guest.name}</td> <td>{guest.last}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
