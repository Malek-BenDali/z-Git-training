console.log('Hole')

const personne = {
	name: 'malek',
	age: 21,
}

const names = outer => {
	const { name, age } = outer
	const p = {
		name,
		age,
	}
	return console.log(...p)
}
names(personne)
