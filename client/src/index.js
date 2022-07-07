import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Lol from "./App";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Lol />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
