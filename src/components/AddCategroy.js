import React, { useState } from "react";

const AddCategroy = ({ closeModal, addNewCategory, listData, index }) => {
  const [title, setTitle] = useState("");
  return (
    <div className="fixed bg-gray-700 bg-opacity-50 min-h-screen flex items-center justify-center top-0 bottom-0 left-0 right-0">
      <div className="bg-white p-4 rounded-lg w-1/3">
        <div className="flex items-center justify-between">
          <h1 className="">Add New Category</h1>
          <button
            className="text-2xl"
            style={{ rotate: "45deg" }}
            onClick={() => closeModal(false)}
          >
            +
          </button>
        </div>
        <div className="my-4">
          <input
            className="w-full border-2 border-gray-300 p-2 rounded-lg"
            placeholder="Enter the Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            if (title.length === 0) {
              window.alert("Please enter the title.");
              return;
            }
            if (index === listData.length) {
              addNewCategory([
                ...listData,
                {
                  id: Math.random(),
                  title: title,
                  cards: [],
                  bgcolor:
                    "#" + (((1 << 24) * Math.random()) | 0).toString(16) + "50",
                },
              ]);
            } else {
              addNewCategory([
                ...listData.slice(0, index + 1),
                {
                  id: Math.random(),
                  title: title,
                  cards: [],
                  bgcolor:
                    "#" + (((1 << 24) * Math.random()) | 0).toString(16) + "50",
                },
                ...listData.slice(index + 1),
              ]);
            }
            closeModal(false);
          }}
          className="font-bold inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0 text-white transition duration-300"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddCategroy;
