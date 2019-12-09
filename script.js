/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

getRecords()

async function getRecords() {
	const response = await fetch("https://whack-mole.glitch.me/leaders")
	const records = await response.json()
	document.getElementById('leader-loading').style.display = 'none'
	records.forEach(user => {
		const li = document.createElement("li")
		li.appendChild(document.createTextNode(user.name + ": " + user.score));
		document.getElementById('users').appendChild(li)
	});
}
