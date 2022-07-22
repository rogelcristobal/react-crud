import React from "react";
import { TrashSimple } from "phosphor-react";
const Item = ({ item, click, remove }) => {
	return (
		<div
			onClick={() => click(item.id)}
			className="w-full h-16 border rounded-lg cursor-pointer shadow py-2 px-4 capitalize  flex items-center justify-center"
		>
			<div className="flex flex-col items-start justify-center  w-full h-full">
				<p className="text-lg font-medium text-neutral-400">{item.title}</p>
				<p className="text-sm text-neutral-300">{item.description}</p>
			</div>
			<button
				onClick={(e) => {
					e.stopPropagation();
					remove(item.id);
				}}
				className="h-full  w-8 grid place-content-center"
			>
				<TrashSimple size={15} weight="bold" className="text-neutral-500 " />
			</button>
		</div>
	);
};

export default Item;
