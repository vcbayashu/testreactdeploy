import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TaskManagement = () => {
  const [tasks, settasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newtaskDescription, setnewtaskDescription] = useState("");
  const [newtaskdueDate, setnewtaskdueDate] = useState();
  const createTask = () => {
    if (newTaskTitle === "") return toast.warning("Please provide task title");
    else if (newtaskDescription === "")
      return toast.warning("Please enter task description");
    else if (!newtaskdueDate) return toast.warning("Please provide due date");

    const newTask = {
      taskname: newTaskTitle,
      taskdescription: newtaskDescription,
      taskduedate: newtaskdueDate,
      taskstatus: "TO_DO",
    };
    const oldTasks = [...tasks];
    oldTasks.push(newTask);
    settasks(oldTasks);
    toast.success("Task created successfully");
    setNewTaskTitle("");
    setnewtaskDescription("");
  };
  const handlechangestatus = (index, status) => {
    let oldTasks = [...tasks]; //get all array
    if (status === "TO_DO") {
      oldTasks[index].taskstatus = "ON_GOING"; // then find the object/task which is clicked and update its taskstatus field
    } else if (status === "ON_GOING") {
      oldTasks[index].taskstatus = "COMPLETED"; // then find the object/task which is clicked and update its taskstatus field
    } else if (status === "COMPLETED") {
      oldTasks[index].taskstatus = "TO_DO"; // then find the object/task which is clicked and update its taskstatus field
    }
    settasks(oldTasks);
  };
  const handledeletettask = (index) => {
    let oldTasks = [...tasks];
    let updatedTask = oldTasks.filter((v, i) => i !== index);
    settasks(updatedTask);
  };

  const getButtonName = (status) => {
    if (status === "TO_DO") return "START TASK";
    else if (status === "ON_GOING") return "COMPLETE TASK";
    else if (status === "COMPLETED") return "RESTART";
  };
  const getColor = (status) => {
    if (status === "TO_DO") return "red";
    else if (status === "ON_GOING") return "blue";
    else if (status === "COMPLETED") return "green";
  };

  return (
    <>
      <ToastContainer />
      <div style={{ backgroundColor: "skyblue", height: "100vh" }}>
        <br />
        <h1>Task Management Dashboard</h1>
        <>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Task Name</label>
              <input
                type="text"
                required
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Task name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Task Description</label>
              <textarea
                required
                value={newtaskDescription}
                onChange={(e) => setnewtaskDescription(e.target.value)}
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Task Description"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Task Due Date</label>
              <input
                required
                type="date"
                value={newtaskdueDate}
                onChange={(e) => setnewtaskdueDate(e.target.value)}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Task due date"
              />
            </div>

            <button
              onClick={() => createTask()}
              type="button"
              class="btn btn-primary mt-2 p-2"
            >
              Create Task
            </button>
          </form>
        </>
        {tasks.map((v, i) => {
          return (
            <>
              <div
                class="card mt-2"
                style={{
                  backgroundColor: getColor(v.taskstatus),
                  color: "white",
                }}
              >
                <div class="card-body">
                  <h5 class="card-title">{v.taskname}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    DUE: {v.taskduedate}
                  </h6>
                  <p class="card-text"> {v.taskdescription} </p>
                  <button
                    class="btn btn-primary me-2"
                    onClick={() => handlechangestatus(i, v.taskstatus)}
                  >
                    {getButtonName(v.taskstatus)}
                  </button>
                  <button
                    class="btn btn-secondary"
                    onClick={() => handledeletettask(i)}
                  >
                    Delete Task
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default TaskManagement;
