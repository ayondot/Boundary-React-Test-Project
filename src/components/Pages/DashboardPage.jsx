import React from 'react';
import { connect } from 'react-redux';

class DashboardPage extends React.Component {
    render() {
        return (
            <div>
                I'm the dashboard!
            </div>
        );
    }
}

export default connect()(DashboardPage);