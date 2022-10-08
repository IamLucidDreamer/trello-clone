import React from "react";

const ListElement = ({task}) => {

    const onDragStart = (e, taskData) => {
        console.log(taskData , "data");
        e.dataTransfer.setData("taskData", JSON.stringify(taskData));
    }

  return (
    <div
      draggable
      key={task.id}
      onDragStart={(e) => onDragStart(e, task)}
      onDragEnd={(e) => console.log(e)}
      className="my-3.5 bg-gray-100 shadow-primary shadow-sm p-2 rounded"
    >
      <p className="text-secondary">
        task details will come here on this component.
      </p>
    </div>
  );
};

export default ListElement;
