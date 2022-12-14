import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [listData, setListData] = useState([
    {
      id: "PLANNED",
      title: "Planned Tasks",
      cards: [],
    },
    {
      id: "WIP",
      title: "Work In Progress",
      cards: [
        {
          id: "Wip1",
          title: "Clean House",
          description:
            "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses",
        },
      ],
    },
    {
      id: "BLOCKED",
      title: "Blocked",
      cards: [],
    },
    {
      id: "COMPLETED",
      title: "Completed",
      cards: [
        {
          id: "Completed1",
          title: "Practice Meditation",
          label: "15 mins",
          description: "Use Headspace app",
        },
        {
          id: "Completed2",
          title: "Maintain Daily Journal",
          label: "15 mins",
          description: "Use Spreadsheet for now",
        },
      ],
    },
    {
      id: "REPEAT",
      title: "Repeat",
      cards: [
        {
          id: "Repeat1",
          title: "Morning Jog",
          label: "30 mins",
          description: "Track using fitbit",
        },
      ],
    },
    {
      id: "ARCHIVED",
      title: "Archived",
      cards: [
        {
          id: "Archived1",
          title: "Go Trekking",
          label: "300 mins",
          description: "Completed 10km on cycle",
        },
      ],
    },
  ]);

  console.log(listData , "Inital List data app ");

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <div className="flex p-5 pt-20 gap-8">
        {listData.map((list, index) => (
          <List
            key={Math.random()}
            category={list}
            index={index}
            listData={listData}
            setListData={setListData}
          />
        ))}
        <div>
          <button className="flex items-center justify-center text-center bg-primary w-12 h-12 font-bold rounded-full text-4xl shadow shadow-primary">
            <h1 className="pb-2 text-secondary">+</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
