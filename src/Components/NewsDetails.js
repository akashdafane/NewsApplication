import React, { Component } from 'react'
import Axios from 'axios';
import MaterialTable from 'material-table';
// import { Link } from '@material-ui/core';
import PropsTypes from 'prop-types';

export default class NewsDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            author: "",
            content: "",
            title: "",
            flag: false,
            data: []

        }
    }

    showdetails = () => {

        Axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-11&sortBy=publishedAt&apiKey=79216be8087640bb916ec4d70a7e8d43')
            .then(res => {
                console.log(res.data.status);
                if (res.data.status === "ok") {
                    // console.log("in condition");
                    // toast.success(res.data.message);

                    console.log(res.data.articles);
                    this.setState({
                        data: res.data.articles,
                        flag: true
                    })

                }
                else {

                    alert("error")
                }
            })
    }

    logOut = () => {
        this.loginUser = JSON.parse(localStorage.getItem('newsdata'));
        localStorage.clear();
        PropsTypes.history.push("/login")
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary btn-block btn-md" id="button" onClick={this.showdetails} >Show Details</button>
                { this.state.flag && <MaterialTable
                    title=" News Search "
                    columns={[
                        { title: 'author', field: 'author' },
                        { title: 'content', field: 'content' },
                        { title: 'title', field: 'title' },
                    ]}
                    data={this.state.data}
                    options={{
                        search: true
                    }}
                />}

                <button type="button" className="btn btn-danger" onClick={this.logOut}>Loguot</button>

            </div>
        )
    }
}
