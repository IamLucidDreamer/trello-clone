import React, { useState } from "react";
import AddTask from "./AddTask";

const ListElement = ({
  task,
  categoryIndex,
  listData,
  setListData,
  indexTask,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const onDragStart = (e, taskData) => {
    e.dataTransfer.setData("taskData", JSON.stringify(taskData));
  };

  return (
    <>
      <div
        draggable
        onClick={() => setShowDetails(true)}
        onDragStart={(e) => {
          task.startCategory = categoryIndex;
          onDragStart(e, task);
        }}
        className="my-3.5 bg-gray-100 shadow-gray-400 shadow-sm p-2 rounded cursor-pointer"
      >
        <p className="text-secondary">{task.title}</p>
      </div>
      {showDetails && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-gray-100 p-8">
          <div className="flex items-center justify-between">
            <h1 className=""> Detail of Task</h1>
            <button
              className="text-2xl"
              style={{ rotate: "45deg" }}
              onClick={() => setShowDetails(false)}
            >
              +
            </button>
          </div>
          <h1 className="text-xl font-bold">{task?.title}</h1>
          <h1 className="text-lg ">{task?.description}</h1>
          <div className="fixed bottom-0 py-4 w-full bg-gray-300 right-0 left-0 flex items-center justify-around">
            <button
              className="w-5/12 py-2 bg-blue-400 rounded-md hover:bg-opacity-80"
              onClick={() => setShowEdit(true)}
            >
              Edit
            </button>
            <button
              className="w-5/12 py-2 bg-red-400 rounded-md hover:bg-opacity-80"
              onClick={() => {
                setShowDetails(false);
                const newData = { ...listData[categoryIndex] };
                newData.cards.splice(indexTask, 1);
                setListData([
                  ...listData.slice(0, categoryIndex),
                  newData,
                  ...listData.slice(categoryIndex + 1),
                ]);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
      {showEdit && (
        <AddTask
          edit={true}
          category={listData[categoryIndex]}
          closeModal={setShowEdit}
          addNewTask={setListData}
          listData={listData}
          indexData={categoryIndex}
          indexTask={indexTask}
          task={task}
        />
      )}
    </>
  );
};

export default ListElement;
