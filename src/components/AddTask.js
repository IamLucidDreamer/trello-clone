import React, { useState, useEffect } from "react";

const AddTask = ({
  edit,
  category,
  closeModal,
  addNewTask,
  listData,
  indexData,
  indexTask,
  task,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (edit) {
      setTitle(task?.title);
      setDescription(task?.description);
    }
  }, []);

  return (
    <div className="fixed bg-gray-700 bg-opacity-50 min-h-screen flex items-center justify-center top-0 bottom-0 left-0 right-0">
      <div className="bg-white p-4 rounded-lg w-1/3">
        <div className="flex items-center justify-between">
          <h1 className="">{edit ? "Edit Task" : "Add New Task"}</h1>
          <button
            style={{ rotate: "45deg", fontSize: "30px" }}
            onClick={() => closeModal(false)}
          >
            +
          </button>
        </div>
        <div className="my-4">
          <input
            className="w-full border-2 border-gray-300 p-2 rounded-lg"
            placeholder="Enter the Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2"
            placeholder="Enter the Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            if (edit) {
              const editedTask = listData;
              console.log(editedTask, "Editef Task initla");
              console.log(editedTask[indexData].cards[indexTask], "editedTask");
              editedTask[indexData].cards[indexTask].title = title;
              editedTask[indexData].cards[indexTask].description = description;
              addNewTask(editedTask);
              closeModal(false);
            } else {
              if (title.length === 0 || description.length === 0) {
                window.alert("Please enter the title and description");
                return;
              }
              const taskData = {
                id: Math.random(),
                title: title,
                description: description,
              };
              const categoryCopy = category;
              categoryCopy.cards.push(taskData);
              const newData = [
                ...listData.slice(0, indexData),
                categoryCopy,
                ...listData.slice(indexData + 1),
              ];

              addNewTask(newData);
              closeModal(false);
            }
          }}
          className="font-bold inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0 text-white transition duration-300"
        >
          {edit ? "EDIT" : "ADD"}
        </button>
      </div>
    </div>
  );
};

export default AddTask;
