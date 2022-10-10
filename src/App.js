import React, { useState, useEffect } from "react";
import AddCategroy from "./components/AddCategroy";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [addCategroy, setAddCategroy] = useState(false);
  const [addIndex, setAddIndex] = useState(0);
  const [listData, setListData] = useState([]);

  const setInitialData = () => {
    setListData(JSON.parse(localStorage.getItem("listData")));
  };

  useEffect(() => {
    if (listData.length !== 0) {
      localStorage.setItem("listData", JSON.stringify(listData));
    }
  }, [listData]);

  useEffect(() => {
    if (localStorage.getItem("listData") === null) {
      localStorage.setItem("listData", JSON.stringify([]));
    }
    if (listData.length === 0) {
      setInitialData();
    }
  }, []);

  console.log(listData, "Inital List data app ");

  return (
    <div className="min-h-screen bg-gray-100 overflow-scroll">
      <Header />
      <div className="flex p-5 pt-20 gap-8">
        {listData.map((list, index) => (
          <List
            key={Math.random()}
            category={list}
            index={index}
            listData={listData}
            setListData={setListData}
            setAddCategroy={setAddCategroy}
            addNewlistitem={setAddIndex}
          />
        ))}
        <div className=" ">
          <button
            className="text-gray-800 text-2xl flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full pb-1"
            onClick={() => {
              setAddIndex(listData.length);
              setAddCategroy(true);
            }}
          >
            +
          </button>
        </div>
      </div>
      {addCategroy && (
        <AddCategroy
          closeModal={setAddCategroy}
          addNewCategory={setListData}
          listData={listData}
          index={addIndex}
        />
      )}
    </div>
  );
}

export default App;
