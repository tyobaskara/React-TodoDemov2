import React from 'react';
import {Link} from 'react-router';

export default class About extends React.Components{
    render: function(){
        return(
            <div>
                <Link to={'/'}>Home</Link>
                <h2>All About Me</h2>
            </div>
        );
    }
};

export default About;