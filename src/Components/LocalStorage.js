import React from 'react';
import Button from './Common/Button'

const LocalStorage = () => {

    const setItem = () => {
        localStorage.setItem("Author", "Item Set")
    }
    const getItem = () => {
        console.log(localStorage.getItem("Author"));
    }

    const removeItem = () => {
        setTimeout(() => {
            localStorage.removeItem("Author")
        }, 1000);
    }

    return (
        <div>
            <Button
                type={"button"}
                label={"Set-Item"}
                className={"btn btn-success"}
                onClick={setItem}
            />

            <Button
                type={"button"}
                label={"Get-Item"}
                className={"btn btn-success"}
                onClick={getItem}
            />

            <Button
                type={"button"}
                label={"Remove-Item"}
                className={"btn btn-success"}
                onClick={removeItem}
            />
        </div>
    )
}

export default LocalStorage;