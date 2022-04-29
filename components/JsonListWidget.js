import React, {useState} from 'react'


function JsonListWidget(){
  let [state,setState] = useState(0)
  let [form,setForm] = useState("apple")
  let [list,setList] = useState([])
  let fruits = ["apple","banana","cherry","donut"]

  let handleClick = () => {
    if(state === 4){
      setState(0)
      setForm("apple")
      setList([])
      return

    }
    setState(state + 1)
    setList([...list,form])
    setForm(fruits[state+1])
  }
  let handleChange = (e) => {
    setForm(e.target.value)
  }
  let getItemText  = () => {
    
    return fruits[state]
    
  }
 
  return (
    <div className="w-full p-4 border bg-gradient-to-r from-indigo-500 to-blue-400 rounded-md">
      <div className="flex flex-wrap items-start justify-between">

      <div>
      <button 
        className="border p-2 m-4 rounded-md bg-black text-white text-xs hover:bg-gray-700"
        onClick={handleClick}
      >
        {
          state < 4 ? <div>Add '{getItemText()}' to JSON List</div> : <div>Start Again</div>
        }
      </button>

      <div>
        <label className="block mx-4 mb-1">Item</label>
        <input  value={form} onChange={handleChange} className="w-36 block p-2 mx-4 bg-gray-200 text-gray-700 border rounded focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Apple"/>
      </div>
      </div>

      <div>
        <label className="block mx-4 font-bold ">JSON List</label>
        <div className="p-2 border bg-black h-24 w-64 rounded-md mx-4 text-white">
            [{list.toString()}]
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default JsonListWidget