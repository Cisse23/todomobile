import { useState } from "react";

export const [task, setTask] = useState({
    id: "",
    name: "",
    type: "", //task, homework, lesson, activity
    status: "", //not started, started, done...
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    deadLine: "",
    location: "",
    course: "",
    teacher: "",
    classroom: "",
});