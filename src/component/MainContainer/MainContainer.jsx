import React, { useState, useEffect } from "react";
import {
  addTodo,
  toggleTodoComplete,
  deleteTodo,
} from "../../Feactures/Mainitem.slice/Mainitem";
import { useDispatch, useSelector } from "react-redux";
import Weather from "../Weather/Weather";
import Login from "../Login/Login";
import { logout } from "../../Feactures/Authentication/AuthSlice";
import { useNavigate } from "react-router-dom";

const TaskApp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showWeather, setShowWeather] = useState(false);

  const [todo, setTodo] = useState("");
  const mainItem = useSelector((state) => state.mainItem.Mainitem);

  const [isActive, setIsActive] = useState([]);

  useEffect(() => {
    console.log("Todo state changed:", todo);
  }, [todo]);

  const handeLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const incompleteTasks = mainItem.filter((item) => !item.completed);
  const completedTasks = mainItem.filter((item) => item.completed);

  const [activeComponent, setActiveComponent] = useState("todos");
  const isAuthenticate = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticate) {
    return <Login />;
  }

  const importantTasks = incompleteTasks.filter((item) =>
    isActive.includes(item.id)
  );

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "todo":
        return <TodoItem />;
      case "important":
        return <ImportantItem />;
      case "notifications":
        return <TodoItem />;
      default:
        return <TodoItem />;
    }
  };

  const toggleFavorite = (itemId) => {
    setIsActive((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };
  const ImportantItem = () => {
    return (
      <div className="p-6 mt-[10%]">
        {/* Task List */}
        <div className="mb-6">
          {importantTasks.map((item, index) => (
            <div
              className="flex justify-between items-center py-2 border-b"
              key={index}
            >
              <div className="flex items-center">
                <span className={` text-lg`}>{item.text}</span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className={`${
                    isActive.includes(item.id)
                      ? "text-yellow-500"
                      : "text-black"
                  } mr-10`}
                >
                  <svg
                    className={`"h-5 w-5 mr-2"`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={"currentColor"}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.618l-4.472 2.354a1 1 0 01-1.448-1.118l1.329-5.56-4.065-3.759a1 1 0 011.069-1.692l5.707-.5 2.363-5.174a1 1 0 011.896 0l2.363 5.174 5.707.5a1 1 0 011.069 1.692l-4.065 3.759 1.329 5.56a1 1 0 01-1.448 1.118L10 15.618z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Completed Tasks */}
      </div>
    );
  };
  const TodoItem = () => {
    const [todo, setTodo] = useState("");

    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setTodo(newValue);
      console.log(todo);
    };
    const add = (e) => {
      e.preventDefault();
      if (!todo.trim()) return;
      const outdoorKeywords = [
        "outside",
        "outdoor",
        "park",
        "walk",
        "run",
        "hiking",
        "bike",
      ];
      const isOutdoorActivity = outdoorKeywords.some((keyword) =>
        todo.toLowerCase().includes(keyword)
      );
      if (isOutdoorActivity) {
        setShowWeather(true);
      }
      dispatch(addTodo(todo));
      setTodo("");
    };
    return (
      <div className="max-w-4xls mx-auto bg-white rounded-lg shadow-md mt-[20%]">
        <div className="p-6">
          <h1 className="text-[15px] text-gray-300 font-semibold mb-4">
            To Do
          </h1>

          {/* Add Task */}
          <form
            className="flex flex-col justify-center items-center mb-4 bg-gray-100 p-4"
            onSubmit={add}
          >
            <div className="mt-1">
              <input
                value={todo}
                onChange={handleInputChange}
                type="text"
                className="w-full px-20 py-2  rounded-md focus:outline-none bg-gray-100 text-2xl font-semibold"
                placeholder="Add A Task"
              />
            </div>

            <div className="flex items-center justify-between mt-20 w-full">
              <div className="flex ml-1 mb-1">
                <span class="material-symbols-outlined">notifications</span>
                <span class="material-symbols-outlined">folder_open</span>
                <span class="material-symbols-outlined">undo</span>
              </div>
              <button
                className="ml-4 text-green-700 bg-gray-200 py-2 px-6 rounded-sm text-nowrap text-[10px]  mb-1 mr-1.5 cursor-pointer"
                type="submit"
              >
                ADD TASK
              </button>
            </div>
          </form>

          {/* Task List */}
          <div className="mb-6">
            {incompleteTasks.map((item, index) => (
              <div>
                <div
                  className="flex justify-between items-center py-2 border-b"
                  key={index}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => {
                        dispatch(toggleTodoComplete(item.id));
                      }}
                      className="mr-2"
                    />
                    <span className={` text-lg`}>{item.text}</span>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className={`${
                        isActive.includes(item.id)
                          ? "text-yellow-500"
                          : "text-black"
                      } mr-10
                    `}
                    >
                      <span class="material-symbols-outlined">star</span>
                    </button>
                    <button
                      onClick={() => dispatch(deleteTodo(item.id))}
                      className={"                        mr-10"}
                    >
                      <span class="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                {showWeather && <Weather city="London" />}
              </div>
            ))}
          </div>

          {/* Completed Tasks */}
          <div>
            <h2 className="text-lg font-medium mb-2">Completed</h2>
            {completedTasks.map((item, index) => (
              <>
                <div
                  className="flex justify-between items-center py-2 border-b"
                  key={index}
                >
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" checked />
                    <span className="line-through text-gray-500 text-lg">
                      {item.text}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button onClick={() => {}} className="text-gray-400">
                      ☆
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sm:grid sm:grid-cols-12  min-h-screen bg-gray-50 p-6 ">
      <div className=" sm:w-64 p-4 space-y-6 sm:col-span-5 col-span-12 w-full mb-8">
        {/* Profile Section */}
        <div className="flex items-center flex-col justify-center">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg" // Use any image link
            alt="User Profile"
            className="w-40 h-40 rounded-full object-cover"
          />
          <div className="text-2xl font-semibold">Hey, ABCD</div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4 bg-white rounded-lg shadow-md p-6">
          <button
            className="flex items-center space-x-2 text-gray-700 hover:text-green-500"
            onClick={() => setActiveComponent("todo")}
          >
            <span class="material-symbols-outlined">assignment_add</span>
            <span>All Tasks</span>
          </button>

          <button
            className="flex items-center space-x-2 text-gray-700 hover:text-green-500"
            onClick={() => setActiveComponent("calendar")}
          >
            <span class="material-symbols-outlined">calendar_month</span>
            <span>Today</span>
          </button>

          <button
            className="flex items-center space-x-2 text-gray-700 hover:text-green-500"
            onClick={() => setActiveComponent("important")}
          >
            <span class="material-symbols-outlined">star</span>
            <span>Important</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-700 hover:text-green-500">
            <span class="material-symbols-outlined">map</span>
            <span>Planned</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-700 hover:text-green-500">
            <span class="material-symbols-outlined">person</span>
            <span>Assigned to me</span>
          </button>
        </div>
        <div className="space-y-4 bg-white rounded-lg shadow-md p-6">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-green-500">
            <span class="material-symbols-outlined">add</span>
            <span>Add list</span>
          </button>
        </div>
        <div className="space-y-4 bg-white rounded-lg shadow-md p-6">
          <button
            className="flex items-center space-x-2 text-gray-700 hover:text-green-500"
            onClick={handeLogout}
          >
            <span class="material-symbols-outlined">add</span>
            <span>Logout</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-6 space-y-4 bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
          <div className="text-xl font-semibold">Today Tasks</div>
          <div className="text-2xl font-bold text-gray-700">0</div>
          <span class="material-symbols-outlined">info</span>

          {/* Pie chart */}
        </div>
      </div>

      <div className="w-full mx-auto h-full sm:col-span-7 col-span-12">
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default TaskApp;
