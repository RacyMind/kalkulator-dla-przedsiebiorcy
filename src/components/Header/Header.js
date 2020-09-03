import React from "react";
import {Link} from "react-router-dom";


class Header extends React.Component {
    render() {
        if (this.props.isHome) {
            return (
                <header className="fullSize">
                    <div className="wrapper">
                        <h1>{this.props.name}</h1>
                    </div>
                </header>
            );
        } else {
            return (
                <header className="fullSize subpage">
                    <div className="wrapper">
                        <Link className="back" to={this.props.backUrl}><img
                            src={process.env.PUBLIC_URL + '/images/back.gif'} alt="Wstecz"/></Link>
                        <h1>{this.props.name}</h1>
                        <div style={{clear: 'both'}}></div>
                    </div>
                </header>
            );
        }
    }
}

Header.defaultProps = {
    backUrl: "/",
    isHome: false
};

export default Header