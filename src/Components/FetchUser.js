import React, { Component } from 'react';
import FetchUsersAction from '../actions/FetchUsersAction';
import { connect } from 'react-redux';

class FetchUser extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(FetchUsersAction());
    }
    render() {
        const { loading, items, error } = this.props;
        console.log("data1",items);
    // if (loading) return <span>loading...</span>;
    // if (error) return <span>error!</span>;
        return (
            <div>
        <ul>
            {
            items && items.data && items.data.map((v,k) => (
                <li key={k.id}>{v.name}</li>
            ))}
            </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { fetchapireducer } = state;
    return {
      loading: fetchapireducer.loading,
      items: fetchapireducer.data,
      error: fetchapireducer.error
    };
  };

//   const mapStateToProps = (state) => ({
//       items: state.fetchapireducer.data
//   })

  export default connect(mapStateToProps)(FetchUser) 