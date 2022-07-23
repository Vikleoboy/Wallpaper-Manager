import PicUrl from "./PicUrl";

export default function DivClick(props) {
    const dataCol = props.dataCol
    const addNewItem = props.addNewItem
    const ChangePop = props.mk
    const i = props.i
    const index = props.index

    return (
        <div
        className="transition ease-in-out absolute bg-blue-grey-300 rounded-2xl w-[96%] h-full duration-300">
        <div className=" flex p-6">
            <button
                onClick={() => ChangePop(index)}
                className="btn btn-circle btn-outline text-xl"
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
            <div className=" mx-auto  ">
                <h1 className=" inline-block mx-auto text-4xl  ">{i}</h1>
            </div>
        </div>

        <div className=" px-6 flex flex-wrap  my-8">
            {/* Pics  */}
            {/* <h1 className=" text-lg text-blue-grey-700 py-2">
                    Nothing here{" "}
                  </h1> */}

            {dataCol[i].map((imgLink, indexOfImg) => {
                let ImgD = {img: imgLink, id: indexOfImg};
                return (
                    <div className=" basis-1/3">
                        <PicUrl img={ImgD}></PicUrl>
                    </div>);
            })}
        </div>

        {/* menu  */}
        <div className=" flex ">
            {/* add sections  */}
            <div className="flex basis-1/2 space-x-2">
                <input
                    id={`in${index}`}
                    type="text"
                    placeholder="Add new Image"
                    className="input w-full max-w-xs ml-6"
                />
                <button
                    onClick={() => addNewItem(`in${index}`, i)}
                    className=" btn"
                >
                    Add
                </button>
            </div>

            {/* walloop butoon section  */}

            <div className="flex basis-1/2 justify-end">
                <button className="btn mr-6"> Walloop</button>
            </div>
        </div>
    </div>)
}