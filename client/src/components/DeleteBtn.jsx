/* eslint-disable react/prop-types */
export default function DeleteBtn({ id, setTodos, todos }) {
	const deleteTodo = async (id) => {
		try {
			const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`, {
				method: "DELETE",
			});
			console.log(deleteTodo);
			setTodos(todos.filter((item) => item.todo_id !== id));
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<button
			className="rounded-lg px-2 bg-red-500 text-white hover:shadow-md, hover:bg-red-700"
			onClick={() => deleteTodo(id)}
		>
			Delete
		</button>
	);
}
