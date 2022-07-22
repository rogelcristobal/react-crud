import { useState } from "react";
import Item from "./Item";
function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: "todo number 1",
			description: "none",
		},
		{
			id: 2,
			title: "todo number 2",
			description: "lorem ipsum",
		},
	]);

	const [addTodo, setAddTodo] = useState("");

	// function

	const submit = async (event) => {
		event.preventDefault();

		const randomId = Math.floor(Math.random() * 999999) + 1;

		const x = { id: randomId, title: addTodo, description: "asdas" };
		setTodos([...todos, x]);
		setAddTodo("");
	};
	const handleClick = (e) => {
		alert(`you selected task ${e}`);
	};
	const handleDelete = (e) => {
		const deleted = todos.filter((item) => item.id !== e);
		setTodos(deleted);
	};

	return (
		<div className="bg-gray-800 h-screen grid place-content-center text-sm font-general">
			<div className="h-96 w-80 rounded-lg shadow-lg bg-neutral-100 p-4 space-y-4">
				<form
					onSubmit={(e) => submit(e)}
					className="flex items-center justify-center gap-2"
				>
					<input
						value={addTodo}
						onChange={(e) => setAddTodo(e.target.value)}
						placeholder="add a todo"
						type="text"
						className="border focus:outline-offset-2  outline-blue-500 px-2 w-full h-10 rounded-md "
						required
					/>
					<input
						type="submit"
						value="add"
						className="bg-blue-500 text-white py-1.5 px-4 capitalize rounded-md"
					/>
				</form>

				<div className="h-[calc(100%-4rem)] w-full bg-neutral-100 shadow-inner border px-1 py-1 rounded-lg overflow-y-scroll ">
					{todos.length >= 0 ? (
						todos.map((item, id) => (
							<Item
								key={id}
								item={item}
								click={handleClick}
								remove={handleDelete}
							></Item>
						))
					) : (
						<div className="h-full flex items-center justify-center">
							<p className="text-lg capitalize text-neutral-300 font-medium">
								no task
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
