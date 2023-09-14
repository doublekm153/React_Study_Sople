import React from "react";

const Sutdents = [
    {id : 1, name : "Inje"},
    {id : 2, name : "Steve"},
    {id : 3, name : "Bill"},
    {id : 4, name : "Jeff"},
];

function AttendanceBook() {
    return (
        <ul>
            {Sutdents.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;