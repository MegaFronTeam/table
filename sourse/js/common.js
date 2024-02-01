"use strict";

function eventHandler() {
	// var googleApiKey = "AIzaSyDnNAhrE6qbZPUGCkw_8yA5_jM2TQQ5x3s";
	// var spreadsheetId = "1u4Y1e6PALSTQLmcsYjbP4a95afVLuXIq";

	// fetch(
	// 	`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A1:E5?key=${googleApiKey}`
	// )
	// 	.then(response => response.json())
	// 	.then(data => console.log(data));

	var googleApiKey = "AIzaSyDnNAhrE6qbZPUGCkw_8yA5_jM2TQQ5x3s";

	// ID вашей Google таблицы
	var spreadsheetId = "1u4Y1e6PALSTQLmcsYjbP4a95afVLuXIq";

	// Функция для получения данных из Google таблицы
	function getDataFromGoogleSheet() {
		fetch(
			`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A1:E5?key=${googleApiKey}`
		)
			.then(response => response.json())
			// .then(data => {
			//     var html = '';
			//     data.values.forEach(row => {
			//         html += '<p>' + row.join(', ') + '</p>';
			//     });
			//     document.getElementById('data').innerHTML = html;
			// })
			.then(data => console.log(data))
			.catch(error => console.error("Ошибка:", error));
	}

	// Вызываем функцию
	getDataFromGoogleSheet();
}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}
