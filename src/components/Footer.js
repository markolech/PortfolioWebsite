import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/MarkOlech" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/markolech" className="icon fa-github"><span className="label">Github</span></a></li>
                        {/* <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li> */}
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Mark Olech</li><li>Built with <a href="https://www.gatsbyjs.org/">GATSBY</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
