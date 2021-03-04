import React, { Component } from 'react'
import Axios from 'axios';
export default class Demo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log("res",res)
            this.setState({data: res.data})
        })
    }
    render() {
        console.log("data",this.state.data)
        return (
            <div>
                {
                    this.state.data.map((items)=>(
                        <li key={items.id}>{items.name}</li>
                    ))
                }
                <h1>Demo.js</h1>
                {/* {this.state.data} */}
            </div>
        )
    }
}
