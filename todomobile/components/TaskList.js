import { useState } from "react";

export default function TaskList(){
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "SQLite ja Firebase",
            type: "Lesson",
            status: "started",
            description: "",
            date: "18.4.2023",
            startTime: "11.00",
            endTime: "12.30",
            deadLine: "",
            location: "",
            course: "Mobiiliohjelmointi",
            teacher: "Hinkula",
            classroom: "Teams",
        },
        {
            id: 2,
            name: "Testit",
            type: "Homework",
            status: "started",
            description: "Oman koodin testaaminen",
            startTime: "",
            date: "",
            endTime: "",
            deadLine: "23.4.2023",
            location: "",
            course: "Ohjelmistoprojekti II",
            teacher: "Teemu",
            classroom: "",
        }
    ]);
}