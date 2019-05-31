import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Tabs from "../common/Tabs";
import ProfilePage from "../Pages/ProfilePage";

class DashboardPage extends React.Component {
    constructor(props) {
  	super(props);

  // 	this.state = {
  // 		user: {
  // 			username: this.props.user.username,
  // 			firstName: this.props.user.firstName,
  // 			lastName: this.props.user.lastName
  // 		},
  // 		editEnabled: false
  // 	}
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState){
  // 	if(nextProps.user !== prevState.user){
  // 	  return { user: nextProps.user};
  //    }
  //    else return null;
  //  }

  //  componentDidUpdate(prevProps, prevState) {
  //    if(prevProps.user!==this.props.user){
  // 		this.setState({user: this.props.user});
  //    }
   }

  render() {
    const { firstName, lastName, username } = this.props.user;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Dashboard</h2>
        <a href="#" style={logOutStyle} className="text-secondary">
          Log out
        </a>
        <Tabs>
          <div label="My Profile">
            <ProfilePage user={this.props.user} />
          </div>
          <div label="My Purchases">
            After 'while, <em>Crocodile</em>!
          </div>
          <div label="Store">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
        </Tabs>
      </div>
    );
  }
}

const logOutStyle = {
  float: "right",
  position: "relative",
  top: "10px",
  textDecoration: "none"
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(DashboardPage);
