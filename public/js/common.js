"use strict";

function eventHandler() {
	//Взять этот код
	const cardsContainer = document.querySelector("#cards");
	const btnContainer = document.querySelector(".container__btns");
	btnContainer.addEventListener("click", e => {
		if (
			e.target.classList.contains("category-btn") &&
			!e.target.classList.contains("active")
		) {
			const category = e.target.dataset.catBtn;
			const categoryItems = document.querySelectorAll(
				`[data-cat="${category}"]`
			);
			document.querySelector(".category-btn.active").classList.remove("active");
			e.target.classList.add("active");
			const allCategoryItems = document.querySelectorAll(`[data-cat]`);
			if (category === "all") {
				allCategoryItems.forEach(item => {
					item.classList.remove("hidden");
				});
			} else {
				allCategoryItems.forEach(item => {
					item.classList.add("hidden");
				});
				categoryItems.forEach(item => {
					item.classList.remove("hidden");
				});
			}
		}
	});
	// /Взять этот код

	Papa.parse("table.csv", {
		download: true,
		complete: function (results) {
			const data = results.data.slice(1);
			const categories = [];
			const randomColor = [];

			btnContainer.insertAdjacentHTML(
				"beforeend",
				`<div class="category-btn active" data-cat-btn="all">Показать все</div>`
			);
			data.forEach(element => {
				const category = element[4].toLowerCase();
				if (!categories.includes(category)) {
					categories.push(category);
					var randomNum = Math.floor(Math.random() * 301);
					randomColor.push(randomNum);
					if (randomColor.length > 1) {
						randomColor.forEach(color => {
							if (color === randomNum) {
								randomNum = Math.floor(Math.random() * 301);
							}
						});
					}
					btnContainer.insertAdjacentHTML(
						"beforeend",
						`<div class="category-btn" style="--color-bg:${randomNum} " data-cat-btn="${category}">${category}</div>`
					);
					cardsContainer.insertAdjacentHTML(
						"beforeend",
						`<div class="category-item"  data-cat="${category}"><h2>${category}</h2></div>`
					);
				}

				const html = `
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

				const categoryContainer = document.querySelector(
					`[data-cat="${category}"]`
				);
				categoryContainer.insertAdjacentHTML("beforeend", html);
			});
		},
	});
}

if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}
