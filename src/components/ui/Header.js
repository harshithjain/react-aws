import React, { useState, useEffect } from 'react';
import axios from 'axios';
// https://bqgn8o5c4d.execute-api.us-east-1.amazonaws.com/Development/images

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuLinksData : []
        }
    }
    //const [menuLinksData, setMenuLinksData] = useState([]);

    // const loadMenuLinksData = async() => {
    //     //Query API Gateway
    //     const response = await axios.get(`https://bqgn8o5c4d.execute-api.us-east-1.amazonaws.com/Development/menu`);
    //     setMenuLinksData(response.data);
    // }

    componentWillMount() {
        fetch(`https://bqgn8o5c4d.execute-api.us-east-1.amazonaws.com/Development/menu`)
        .then(response => response.json())
        .then(menuLinks => this.setState({menuLinksData: menuLinks}))

        /* axios.get(`https://bqgn8o5c4d.execute-api.us-east-1.amazonaws.com/Development/menu`)
        .then(response => this.setState({menuLinksData: response.data})) */
    }
    
    // useEffect(() => {
    //     loadMenuLinksData();
    // }, [])
    render(){
        const {menuLinksData} = this.state;
        return (
            <header id="intro">
                <article className="fullheight">
                <div className="hgroup">
                    <h1>Landon Hotel</h1>
                    <h2>West London</h2>
                    <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
                </div>
                </article>
    
                <nav id="nav">
                <div className="navbar">
                    <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                    <ul>
                        {
                            menuLinksData.map((link) => 
                                <li key={link.text}><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                            )
                        }
                    </ul>
                </div>
                </nav>
            </header>
        );
    }
}

export default Header;