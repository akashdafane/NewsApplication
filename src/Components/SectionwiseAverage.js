import React from "react";
// import { array } from "yup/lib/locale";
import { average } from "../DemoApiData.js/Util";
import students from "./ApiData";
import AverageofSectionB from './AverageofSectionB';
import AverageofSectionC from './AverageofSectionC';
// import { addition } from '../DemoApiData.js/Util'


// const addition = (subjects) => {
//   var sum = 0;
//   subjects.forEach((sub) => (sum = sum + sub.mark));
//   return sum
// }

const SectionA = () => {

 
  var sum = 0;
  

  const arrA = students.filter((student) => (student.section == "A") && 
  (sum = sum + average(student.subjects)));
  // console.log("arrA", arrA);
  var s = sum / arrA.length

 

  // arrA.forEach((students) => average(students.subjects))
  // console.log("arra",arrA)

  return (
    <div>
      {/* {arrA.map((k, v) => {
        console.log(k);
        return (
          <li key={v}>
            {k.name} - {addition(k.subjects )}subjects
          </li>
        );
      })} */}
{/* 
      {
        arrA.map((K) => 
        <div>
          {K.name}
        
        <ul>
          {K.subjects.map((sub)=>
          <li>
            {sub.mark}
          </li>
          )}
        </ul>
        </div>
        )
      } */}

{/* {arrA.map((k, v) => {
                    // console.log(k);
                    return (
                        <li key={v}>
                            {k.name} - 
                        </li>
                    );
                })} */}

                <h1>Average of SectionA is : {s}</h1>
                <AverageofSectionB />
                <AverageofSectionC />
    </div>
  );
};

export default SectionA;