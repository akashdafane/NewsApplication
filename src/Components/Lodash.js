import React from 'react';
import _ from 'lodash';

const Lodash = () => {
    const Array = [1,2,3,4]
    const reverse = _.reverse(Array)

    function getRandomInteger(){
        return Math.round(Math.random() * 100);
    }

    var Result = _.times(5, getRandomInteger);
    // Original array  
var array = _.map([5, 18]); 
   
// Use of _.map() method 
let mapped_array = _.map(array, function square(n) { 
  return n * n; 
}) 
  
// Printing the output  
console.log(mapped_array); 

    return(
        <div>
            <h1>{Array}</h1> 
          <h1>{reverse}</h1> 

          <label>
                {Result}
          </label><br></br>
          <label>
              map function using lodash
              {mapped_array}
          </label>
        </div>
    )
}

export default Lodash;