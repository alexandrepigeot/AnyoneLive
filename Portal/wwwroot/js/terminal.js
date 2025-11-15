"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("terminalHub").build();

connection.on("ReceiveLine", function (line) {
	var p = document.createElement("p");
	document.getElementById("terminal-lines").appendChild(p);
	p.textContent = line;
});

connection.start().catch(function (err) {
	return console.error(err.toString());
});

var input = document.getElementById("input-text");

input.addEventListener("change", function (event) {
	var line = input.value;
	input.value = "";
	connection.invoke("SendLine", line).catch(function (err) {
		return console.error(err.toString());
	})
	event.preventDefault();
});