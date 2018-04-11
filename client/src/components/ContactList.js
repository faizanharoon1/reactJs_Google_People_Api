import React, { Component } from "react";


class ContactList extends Component {
  constructor(props) {
    super(props);
  }
  deleteContact(personId) {
  
    this.props.delete(personId);
  }
  render() {
    const { connections } = this.props;

    if (connections) {
      return (
        <div className="ContactList">
       <h4> Contacts List </h4>

          <div className="row">
            <div className="col-lg-12 col-centered">
              <table id="connectionsw" className="table table-hover table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {connections.length > 0
                    ? connections.map(({ firstname,lastname,gender,birthday,personId }, key) => {
                      
                        return (
                          <tr key={key}>
                            <th scope="row">{key}</th>
                            <td>{firstname}</td>
                            <td >{lastname}</td>
                            <td >{gender}</td>
                            <td >{birthday}</td>
                            <td > <button className="btn btn-sm btn-danger" onClick={(e) => {
                        this.deleteContact({personId});    
                    }}>Delete</button> </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else return <div />;
  }
}

export default ContactList;
