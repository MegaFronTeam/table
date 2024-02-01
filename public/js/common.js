"use strict";

function eventHandler() {
	let data = [];
	Papa.parse("table.csv", {
		download: true,
		complete: function (results) {
			data = results.data;
			console.log(data);

			let html = "";
			for (let i = 1; i < data.length; i++) {
				const element = data[i];
				html += `
				<div class="card-item">
					<div class="card-item__panel">
						<table>
							<tr>
								<td> <strong>${element[1].split(":")[1]}<br>${element[3].split(":")[1]} лет</strong></td>
								<td>${element[2].split(":")[1]}</td>
							</tr>
							<tr>
								<td>Рубрика:</td>
								<td>${element[4]}</td>
							</tr>
						</table>
					</div>
				</div>
				`;
			}
			document.querySelector("#cards").innerHTML = html;
		},
	});
}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}
