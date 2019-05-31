import React from "react";
import { Link } from "react-router-dom";
import { eventUserUpdateAsync } from "../../store/user/actions";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        firstName: "",
        lastName: ""
      },
      editEnabled: false
    };

    this._handleEditEnabled = this._handleEditEnabled.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user !== prevState.user) {
      return { user: nextProps.user };
    } else return null;
  }

  //  componentDidUpdate(prevProps, prevState) {
  //    if(prevProps.user!==this.props.user){
  // 		this.setState({user: this.props.user});
  //    }
  //  }

  _handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    
    if (user.firstName && user.lastName && user.username && user.password) {
        dispatch(eventUserUpdateAsync(user));
    }   
}

  _handleEditEnabled(value) {
    return this.setState({ editEnabled: value });   
  }

  _handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
}


  render() {
    const { firstName, lastName, username } = this.state.user;
    const { registering } = this.props;
    const { user, submitted } = this.state;
    if (!this.state.editEnabled) {
      return (
        <div className="col-md-6 col-md-offset-3">
          <h4 className={"text-center"}>Profile</h4>
          <div className={"col-md-12 mt-1"}>
            <p>
              Name:{" "}
              <span className={"font-weight-light"}>
                {firstName + " " + lastName}
              </span>
            </p>
          </div>
          <div className={"col-md-12 mt-1"}>
            <p>
              Username:{" "}
              <span className={"font-weight-light"}>{username || "N/A"}</span>
            </p>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={()=>this._handleEditEnabled(true)}>Edit</button>
          </div>
        </div>
      );
    }
    return (
      <form name="form" onSubmit={this._handleSubmit}>
        <div
          className={
            "form-group" + (submitted && !user.firstName ? " has-error" : "")
          }
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={user.firstName}
            onChange={this._handleChange}
          />
          {submitted && !user.firstName && (
            <div className="help-block">First Name is required</div>
          )}
        </div>
        <div
          className={
            "form-group" + (submitted && !user.lastName ? " has-error" : "")
          }
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={user.lastName}
            onChange={this._handleChange}
          />
          {submitted && !user.lastName && (
            <div className="help-block">Last Name is required</div>
          )}
        </div>
        <div
          className={
            "form-group" + (submitted && !user.username ? " has-error" : "")
          }
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            onChange={this._handleChange}
          />
          {submitted && !user.username && (
            <div className="help-block">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
          {registering && (
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          )}
          <button className="btn btn-link" onClick={()=>this._handleEditEnabled(false)}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default ProfilePage;
