export default function AddCol ( props){

    const Pop = props.Pop;
    const ChangePop = props.mk;
    const addInput = props.addInput;

    return (
        <div>
            {!Pop[`add`] && !Pop["pop"] && (
                <button onClick={() => ChangePop("add")} className="btn text-xl">
                    add
                </button>
            )}

            {Pop[`add`] && (
                <div className=" absolute bg-blue-grey-300 rounded-2xl w-full h-full p-6">
                    <h1 className=" text-2xl "> soemthing</h1>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input w-full max-w-xs"
                        ref={addInput}
                    />
                    <button
                        onClick={() => ChangePop("add")}
                        className="btn btn-circle btn-outline"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    )
}