new Vue({
	el: '#root',
	name: 'babel-with-gulp',
	data: { todos: [] },
	mounted() {
		console.log('Mounted!');
		this.refreshTodos();
	},
	methods: {
		refreshTodos() {
			return fetch('https://jsonplaceholder.typicode.com/todos')
				.then(response => response.json())
				.then(data => this.todos = data);
		},
		validateForm() {
			return Promise.resolve();
		}
	}
})
