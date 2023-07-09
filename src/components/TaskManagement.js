import { useState } from "react";

const TaskManagement = () => {
  const [tasks, settasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newtaskDescription, setnewtaskDescription] = useState("");
  const [newtaskdueDate, setnewtaskdueDate] = useState(new Date());
  const createTask = () => {
    const newTask = {
      taskname: newTaskTitle,
      taskdescription: newtaskDescription,
      taskduedate: newtaskdueDate,
      taskstatus: "TO_DO",
    };
    const oldTasks = [...tasks];
    oldTasks.push(newTask);
    settasks(oldTasks);
  };
  const handlestarttask = (index) => {
    let oldTasks = [...tasks];
    oldTasks[index].taskstatus = "ON_GOING";
    settasks(oldTasks);
  };
  const handledeletettask = (index) => {
    let oldTasks = [...tasks];
    let updatedTask = oldTasks.filter((v, i) => i !== index);
    settasks(updatedTask);
  };

  return (
    <>
      <div style={{ backgroundColor: "skyblue", height: "100vh" }}>
        <br />
        <h1>Task Management Dashboard</h1>
        <div>
          <label>Task Title</label>
          <input
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            type="text"
            placeholder="Enter Task Title"
          />
        </div>
        <div>
          <label>Task Description</label>
          <textarea
            value={newtaskDescription}
            onChange={(e) => setnewtaskDescription(e.target.value)}
            type="text"
            placeholder="Enter Task Description"
          />
        </div>
        <div>
          <label>Due Date</label>
          <input
            value={newtaskdueDate}
            onChange={(e) => setnewtaskdueDate(e.target.value)}
            type="date"
          />
        </div>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          className="m-2 p-2"
          type="button"
          onClick={() => createTask()}
        >
          Create Task
        </button>
        {tasks.map((v, i) => {
          return (
            <div
              key={i}
              className="m-2 p-2"
              style={
                v.taskstatus === "ON_GOING"
                  ? { backgroundColor: "blue", color: "white" }
                  : { backgroundColor: "red", color: "white" }
              }
            >
              <p>
                Task Name : <span className="task"> {v.taskname} </span>
              </p>
              <p>
                Task Description :
                <span className="task"> {v.taskdescription} </span>
              </p>
              <p>
                Task Due Date : <span className="task"> {v.taskduedate} </span>
              </p>
              <p>
                Task Status : <span className="task"> {v.taskstatus} </span>
              </p>
              <button
                style={{ backgroundColor: "lightgreen" }}
                className="m-2 p-2"
                type="button"
                onClick={() => handlestarttask(i)}
              >
                Start Task
              </button>
              <button
                style={{ backgroundColor: "black", color: "white" }}
                className="m-2 p-2"
                type="button"
                onClick={() => handledeletettask(i)}
              >
                Delete Task
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TaskManagement;
