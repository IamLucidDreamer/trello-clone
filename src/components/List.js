import React from "react";
import ListElement from "./ListElement";

const List = ({ category, index, listData, setListData }) => {
  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, index) => {
    let taskData = e.dataTransfer.getData("taskData");
    console.log(taskData, "Object data");
    console.log(index, "data onDrop");
    taskData = JSON.parse(taskData);
    taskData.id = Math.random();
    const categoryCopy = category
    categoryCopy.cards.push(taskData)
    console.log(categoryCopy ,"categoryCopy");
    console.log(...listData.splice(0, index), "initial Data splice");
    const newData = [
      ...listData.splice(0, index),
        categoryCopy,
      ...listData.splice(index + 1),
    ];
    console.log(newData, "newData");
    setListData(newData);
  };

  return (
    <div
      draggable
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, index)}
      className="rounded shadow-primary shadow-md bg-alternate w-76 border-2 border-primary"
    >
      <h1 className="py-2 text-center text-lg text-white bg-secondary">
        {category.title}
      </h1>
      <div className="p-4 border-t-2 border-gray-600">
        {category.cards.map((task) => (
          <ListElement task={task} />
        ))}
        <div className="mt-6">
          <textarea
            className="bg-gray-600 border-2 rounded p-2 border-primary placeholder-gray-200 outline-0 text-gray-200 w-full"
            placeholder="Add New Task"
          />
          <button className="text-center bg-primary w-full rounded py-2 font-bold">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
