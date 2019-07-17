import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="https://www.linkedin.com/in/mark-olech-pmp-30430463/" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I'm Mark O  lech</strong>, a Full Stack Developer<br /></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
