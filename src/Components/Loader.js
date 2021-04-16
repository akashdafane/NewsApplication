import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
    return(
        <div>
             <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            </div>
    )
}

export default Loader