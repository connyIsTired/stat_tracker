import React from "react";
import PlayerList from "./playerList.js";
import AddPlayerForm from "./addPlayerForm";
import "./App.css";

export default function App() {
    return (
        <div>
            <div>
                <PlayerList />
            </div>
            <div>
                <AddPlayerForm />
            </div>
        </div>
    );
}