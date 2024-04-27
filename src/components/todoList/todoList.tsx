interface todoListProps {
    nameList: string[];
    handleDeleteFunc: (index: number) => void;
}

function TodoList({ nameList, handleDeleteFunc }: todoListProps) {

    // useEffect(() => {
    //   nameList.push(name)
    // },[name])

    return (
        <>
            <ul className="divide-y divide-gray-200">
                {nameList.map((str, index) => (
                    <li key={index} className="flex items-center justify-between py-4">
                        <span>{str}</span>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteFunc(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList