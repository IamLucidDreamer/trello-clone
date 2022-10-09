import React from "react";
import ListElement from "./ListElement";

const List = ({ category, index, listData, setListData }) => {
  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, index) => {
    let taskData = e.dataTransfer.getData("taskData");
    taskData = JSON.parse(taskData);
    taskData.id = Math.random();
    const categoryCopy = category;
    categoryCopy.cards.push(taskData);
    const newData = [
      ...listData.slice(0, index),
      categoryCopy,
      ...listData.slice(index + 1),
    ];
    newData[taskData.startCategory].cards = newData[
      taskData.startCategory
    ].cards.filter((val) => val.title !== taskData.title);

    setListData(newData);
  };

  return (
    <div
      draggable
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, index)}
      style={{ minWidth: "300px" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1
            className="m-1 px-2.5 py-1 text-sm font-bold text-gray-800 rounded"
            style={{
              backgroundColor:
                "#" + (((1 << 24) * Math.random()) | 0).toString(16) + "50",
            }}
          >
            {category.title}
          </h1>
          <h1 className="mx-1 text-sm font-bold text-gray-800">
            {category.cards.length}
          </h1>
        </div>
        <div>
          <button className="text-gray-800 text-2xl">+</button>
        </div>
      </div>
      <div className="">
        {category.cards.map((task) => (
          <ListElement key={Math.random()} task={task} categoryIndex={index} />
        ))}
        <div className="mt-auto">
          <button className=" text-gray-800 text-2xl flex items-center">+ <span className="text-sm mt-1 ml-1">New</span></button>
        </div>
      </div>
    </div>
  );
};

export default List;
