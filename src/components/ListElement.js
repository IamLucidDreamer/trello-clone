import React from "react";

const ListElement = ({task , categoryIndex}) => {

    console.log(categoryIndex);
    const onDragStart = (e, taskData) => {
        e.dataTransfer.setData("taskData", JSON.stringify(taskData));
    }

  return (
    <div
      draggable
      onDragStart={(e) => {task.startCategory = categoryIndex; onDragStart(e, task)}}
      className="my-3.5 bg-gray-100 shadow-gray-400 shadow-sm p-2 rounded"
    >
      <p className="text-secondary">
       { task.title}
      </p>
    </div>
  );
};

export default ListElement;
