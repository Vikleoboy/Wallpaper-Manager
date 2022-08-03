export default function ColDiv(props) {
    const ChangePop = props.mk
    const dataCol = props.dataCol
    const i = props.i
    const index = props.index



    return (
        <div
            onClick={() => ChangePop(index)}
            className="p-4 inline-block w-[100%] h-auto  rounded-2xl bg-[#80ffff] flex flex-col items-center divide-y text-sm  lowercase"
        >
            <div className=" border-b  flex space-x-2 items-center">
                <p className="  text-lg text-center">{i}</p>
            </div>
            <div className="  h-auto w-full grid grid-cols-2 grid-rows-2  ">
                {dataCol[i].length > 2 ? (
                    dataCol[i].slice(0, 4).map((l) => (
                        <div className="  max-w[100%] h-auto ">
                            <img src={l} className=" max-w[100%] h-auto"/>
                        </div>
                    ))
                ) : (
                    <p>no image</p>
                )}

            </div>
        </div>
    )

}