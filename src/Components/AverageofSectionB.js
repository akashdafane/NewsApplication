import React from "react";
import { average } from "../DemoApiData.js/Util";
import students from "./ApiData";


const AverageofSectionB = () => {

    var sum = 0;
    const arrB = students.filter((student) => (student.section == "B") && 
    (sum = sum + average(student.subjects)));
    // console.log("arrA", arrA);
    var s = sum / arrB.length

    return(
        <div>

            <h1>Average of SectionB is: {s}</h1>
        </div>
    )
}

export default AverageofSectionB;