import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import _ from 'lodash';


const FetchUser = (props) => {

    const userData = useSelector(state => state.fetchApiReducer.items.data)


    const { useState } = React;

    const [columns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'UserName', field: 'username', initialEditValue: '' },
        { title: 'Email', field: 'email', initialEditValue: '' },
        { title: 'Phone', field: 'phone', initialEditValue: '' },
        { title: 'Website', field: 'website', initialEditValue: '' },
        { title: 'City', field: 'address.city', initialEditValue: '' },
    ]);
    const [data] = useState();

    return (
        <div>
            {/* <ul>
                {
                    items && items.data && items.data.map((v, k) => (
                        <li key={k.id}>{v.name}</li>
                    ))}
            </ul> */}
            <MaterialTable
                title="User Info"
                columns={columns}
                data={userData}
                editable={{
                    // onRowAdd: newData =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             setData([...data,newData]);
                    //             resolve();
                    //         }, 1000)
                    // }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                // setData([...dataUpdate]);
                                console.log("newdata", newData)
                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                // setData([...dataDelete]);
                                resolve()
                            }, 1000)
                        }),
                }}
            />
        </div>
    )
}

export default FetchUser 