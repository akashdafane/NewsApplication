import students from "./ApiData";
import * as _ from "lodash";
import {average} from '../DemoApiData.js/Util'

export default function SectionB() {
  
    const arrB = students.filter((student) => student.section == "B" && student.subjects[0].name == "maths" && student.subjects[0].mark >= 80)

    arrB.forEach((student) => average(student.subjects) )
    return (
        <>
            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>

                <h4>Student list having average greater than 80</h4>
                {arrB.map((k, v) => {
                    // console.log(k);
                    return (
                        <li key={v}>
                            {k.name} - {average(k.subjects)}
                        </li>
                    );
                })}
            </div>
        </>
    );
}
