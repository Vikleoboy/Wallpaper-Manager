export default function ColDiv(props) {
    const ChangePop = props.mk
    const dataCol = props.dataCol
    const i = props.i
    const index = props.index



    return (
        <div
            onClick={() => ChangePop(index)}
            className="p-4   w-[25vw] rounded-2xl bg-[#80ffff] flex flex-col items-center divide-y text-sm  lowercase"
        >
            <div className=" border-b  flex space-x-2 items-center">
                <p className="  text-lg text-center">{i}</p>
            </div>
            <div className=" flex ">
                {dataCol[i].length > 2 ? (
                    dataCol[i].slice(0, 2).map((l) => (
                        <div className=" w-[10vw]">
                            <img src={l}/>
                        </div>
                    ))
                ) : (
                    <p>no image</p>
                )}

            </div>
        </div>
    )

}