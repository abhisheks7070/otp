import React, { useRef, useState } from 'react'
import "../App.css"
const Main = () => {

    const [value, setValue] = useState({ "one": "", "two": "", "three": "", "four": "", "five": "", "six": "" })
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)


    const handleChange = (e, next, prev) => {
        const num = e.target.value;
        const name = e.target.name;
        console.log(name)




        // Allow only numbers and ensure max length is 1
        if (!isNaN(num) && num.length <= 1) {
            setValue((prev) => ({ ...prev, [name]: num }));
            if (name != "six") {
                next.current.focus()

            }
        }
    }
    const handleKey = async (e, prev) => {
        const name = e.target.name;
        console.log(e.key)
        // If backspace is pressed and the current input is empty
        if (e.key === 'Backspace') {
            await new Promise(resolve => setTimeout(() => {resolve()}, 0.1));

            prev.current.focus(); // Move focus to the previous input
        }
        if (e.key === 'Delete') {
            setValue((prev) => ({ ...prev, [name]: "" }))
            prev.current.focus(); // Move focus to the previous input
        }
    }


    return (
        <>
            <div className='mt-4 flex flex-col gap-2 justify-center items-center text-center text-4xl'>
                <div className='flex gap-3'>

                    <input maxLength="1" ref={ref1} name="one" onKeyDown={(e) => { handleKey(e, ref1) }} onChange={(e) => { handleChange(e, ref2) }} value={value.one} className='arrow text-center border-b-2 border-gray-700 outline-none w-14 h-16' type="text" id="" />
                    <input maxLength="1" ref={ref2} name="two" onKeyDown={(e) => { handleKey(e, ref1) }} onChange={(e) => { handleChange(e, ref3) }} value={value.two} className='arrow text-center border-b-2 border-gray-700 outline-none w-14 h-16' type="text" id="" />
                    <input maxLength="1" ref={ref3} name="three" onKeyDown={(e) => { handleKey(e, ref2) }} onChange={(e) => { handleChange(e, ref4) }} value={value.three} className='arrow text-center border-b-2 border-gray-700 outline-none w-14 h-16' type="text" id="" />
                    <input maxLength="1" ref={ref4} name="four" onKeyDown={(e) => { handleKey(e, ref3) }} onChange={(e) => { handleChange(e, ref5) }} value={value.four} className='arrow text-center border-b-2 border-gray-700 outline-none w-14 h-16' type="text" id="" />
                    <input maxLength="1" ref={ref5} name="five" onKeyDown={(e) => { handleKey(e, ref4) }} onChange={(e) => { handleChange(e, ref6) }} value={value.five} className='arrow text-center border-b-2 border-gray-700 outline-none w-14 h-16' type="text" id="" />
                    <input maxLength="1" ref={ref6} name="six" onKeyDown={(e) => { handleKey(e, ref5) }} onChange={(e) => { handleChange(e) }} value={value.six} className='arrow text-center border-b-2 border-gray-700 outline-none w-14 h-16' type="text" id="" />
                </div>
            </div>
        </>
    )
}

export default Main
