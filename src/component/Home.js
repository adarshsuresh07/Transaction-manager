import React, { Component } from 'react'
import '../component/Home.css'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="give">
                    <h1>You will give</h1>
                    <h1>{200}</h1>
                </div>
                <div className="get">
                    <h1>You will get</h1>
                    <h1>{323}</h1>
                </div>
            </div>
        )
    }
}
export default Home