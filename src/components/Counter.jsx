import { useState } from "react";


function Counter({ userName }) {
    const [count, setCount] = useState(0);


    const increment = () => {
        for (let i = count; i < 50; i++) {
            setCount((prev) => prev + 1);
            break;
        }
    };


    const decrement = () => {
        for (let i = count; i > 0; i--) {
            setCount((prev) => prev - 1);
            break;
        }
    };


    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
            <h2 className="text-xl font-semibold mb-2">Welcome, {userName}</h2>
            <p className="text-3xl font-bold mb-4">{count}</p>


            <div className="flex justify-between">
                <button
                    onClick={increment}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    +
                </button>
                
                <button
                    onClick={decrement}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    -
                </button>


            </div>

        </div>
    );
}


export default Counter;