import React from "react";
import { average } from "../DemoApiData.js/Util";
import students from "./ApiData";


const AverageofSectionC = () => {

    var sum = 0;
    const arrC = students.filter((student) => (student.section == "C") &&
        (sum = sum + average(student.subjects)));
    // console.log("arrA", arrA);
    var s = sum / arrC.length

    return (
        <div>

            <h1>Average of SectionC is: {s}</h1>
        </div>
    )
}

export default AverageofSectionC;