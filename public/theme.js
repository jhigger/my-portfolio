(function () {
	const theme = localStorage.getItem("theme") ?? "dark";
	document.querySelector("html")?.setAttribute("data-theme", theme);
	console.log(theme);
})();
