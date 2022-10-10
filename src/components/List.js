import React, { useState } from "react";
import AddTask from "./AddTask";
import ListElement from "./ListElement";

const List = ({
  category,
  index,
  listData,
  setListData,
  setAddCategroy,
  addNewlistitem,
}) => {
  const [addTask, setAddTask] = useState(false);

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
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, index)}
      style={{ minWidth: "300px" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1
            className="m-1 px-2.5 py-1 text-sm font-bold text-gray-800 rounded"
            style={{
              backgroundColor: category.bgcolor,
            }}
          >
            {category.title}
          </h1>
          <h1 className="mx-1 text-sm font-bold text-gray-800">
            {category.cards.length}
          </h1>
        </div>
        <div>
          <button
            className="text-gray-800 text-2xl"
            onClick={() => {
              setAddCategroy(true);
              addNewlistitem(index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="">
        {category.cards.map((task , indexTask) => (
          <ListElement
            key={task?.id}
            task={task}
            categoryIndex={index}
            listData={listData}
            setListData={setListData}
            indexTask={indexTask}
          />
        ))}
        <div className="mt-auto" onClick={() => {}}>
          <button
            className=" text-gray-800 text-2xl flex items-center"
            onClick={() => {
              setAddTask(true);
            }}
          >
            + <span className="text-sm mt-1 ml-1">New</span>
          </button>
        </div>
      </div>
      {addTask && (
        <AddTask
          edit={false}
          category={category}
          closeModal={setAddTask}
          addNewTask={setListData}
          listData={listData}
          indexData={index}
        />
      )}
    </div>
  );
};

export default List;
