import React from 'react';
import {Link} from 'react-router';
import {Helmet} from "react-helmet";

class About extends React.Component{
    render(){
        return(
            <div>
                <Helmet>
                    <title>About</title>
                </Helmet>
                <Link to={'/'}>Home</Link>
                <h2>All About Me</h2>
            </div>
        );
    }
};

export default About;