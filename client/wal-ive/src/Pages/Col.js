import axios from "axios";
import {useState, useEffect, useMemo, useCallback, useRef} from "react";
import {FaTrash} from "react-icons/fa";
import PicUrl from "../comp/PicUrl";
import ColDiv from "../comp/ColDiv";
import DivClick from "../comp/DIvClick";
import AddCol from "../comp/addCol";

function Col() {
    //  states
    const [Collection, setCollection] = useState({});
    const [Pop, setPop] = useState({});
    const [ changed, setChange] = useState(false);
    //refs
    const addInput = useRef();
    

    // getting the data
    useEffect(() => {
        async function getData() {
            let k = await axios.get("http://localhost:3001/col/");
            setCollection(k.data);
        }
        getData();
    }, [changed]);

    console.log(Collection);
    console.log(Object.keys(Collection));

    let ok = popMaker();

    // setting POP only when ok actually changes
    useEffect(() => {
        setPop(ok);
    }, ok);

    console.log(Pop);
    return (
        <div className=" flex flex-wrap h-auto space-x-2">
            {/* all collections maker this code makes it  */}
            {Object.keys(Collection).map((i, index) => {
                console.log(Pop[`pop${index}`]);
                return (
                    <>
                        {!Pop[`pop${index}`] && !Pop["pop"] && (
                            <ColDiv mk = {changePop} dataCol={Collection} i = {i} index={index} />
                        )}

                        {Pop[`pop${index}`] && (
                            <DivClick addNewItem = {addNewItem} dataCol={Collection} i={i} mk = {changePop} index={index} />
                        )}
                    </>
                );
            })}

            {/* this is for adding new collection  */}
            <AddCol mk={changePop} dataCol={Collection} addInput = {addInput} Pop={Pop}/>
        </div>
    );

    function addNewItem(id, nt) {
        const name = document.getElementById(id).value;

        async function cl() {
            console.log(name);
            await axios.get(`http://localhost:3001/col/${nt}/?link=${name}`);
        }

        // if (isImage(name)) {
        //   cl();
        //   setchange((pre) => !pre);
        // } else {
        //   alert("not a image ");
        // }

        cl();
        setChange((pre) => !pre);
    }

    //function to handel click when we say add in the add panel collection
    function addNewCollection() {
        async function cl() {
            const name = addInput.current.value;
            console.log(name);
            await axios.get(`http://localhost:3001/col/${name}`);
        }

        cl();
        setChange((pre) => !pre);
    }

    // function which just toggles the pop state
    function changePop(k = "d") {
        let something = {...Pop};
        if (k === "add") {
            something[`add`] = !something[`add`];
            something["pop"] = !something["pop"];
            addNewCollection();
        } else {
            something["pop"] = !something["pop"];
            something[`pop${k}`] = !something[`pop${k}`];
        }
        setPop(something);
    }

    // a function which makes our POP boilerplate
    function popMaker() {
        let something = {...Pop};

        Object.keys(Collection).map((i, index) => {
            something[`pop${index + 1}`] = false;
        });

        something["pop"] = false;
        something[`add`] = false;
        return something;
    }
}

export default Col;




// function isImage(url) {
//   console.log(url);
//   return /^https?:\$/.test(url);
// }

// jpg|jpeg|png|webp|avif|gif|svg
