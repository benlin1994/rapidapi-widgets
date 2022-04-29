import React, {useState} from 'react'


function JsonObjectWidget(){
  let [state,setState] = useState(true)
  let [form, setForm] = useState({
    name:"John Smith",
    age:42,
    isAvailable:true
  })
  let handleClick = () => {
    if(state === false){
      randomForm()
    }
    setState(!state)
  }
  let randomForm = () => {
    let names = ["John","Bill","Sally","Fred","Carl","Suzie","Jane","Amanda","Joe","Carla","Heinrich"]
    setForm({
      name:names[Math.floor(Math.random() * names.length)],
      age:Math.floor(Math.random() * 80),
      isAvailable:Math.random() > .5 ? true: false
    })
    Math.random()
  }
  let handleChange = (event) => {
    console.log(event.target.value,event.target.name)
    let temp = {...form}
    temp[event.target.name]=event.target.value
    setForm(temp)
  }
  
  let getText = () => {
    switch(state){
      case true:
        return '{}'
      case false:
        return `{name: '${form.name}',
          age: ${parseInt(form.age)},
          isAvailable: ${JSON.parse(form.isAvailable)}
         }`   
      default:
      return;
    }
    
        
    
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
          state === true ? <div>Create JSON Object</div> : <div>Start Again</div>
        }
      </button>
      <div className="flex flex-wrap items-start">
      
      <div>
        <label class="block mx-4 mb-1">Name</label>
        <input onChange={handleChange} name="name" value ={form.name} className="w-36 block p-2 mx-4 bg-gray-200 text-gray-700 border rounded focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John Smith"/>
      </div>
      <div>
        <label class="block mx-4 mb-1">Age</label>
        <input onChange={handleChange} name="age" value ={form.age} className="w-36 block p-2 mx-4 bg-gray-200 text-gray-700 border rounded focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="0"/>
      </div>
      <div>
        <label class="block mx-4 mb-1">isAvailable</label>
        <input onChange={handleChange} name ="isAvailable" value ={form.isAvailable} className="w-36 block p-2 mx-4 bg-gray-200 text-gray-700 border rounded focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="true"/>
      </div>
      </div>
   
      </div>
      
      <div>
        <label class="block mx-4 font-bold ">JSON Object</label>
        <div className="p-2 border bg-black h-24 w-96 rounded-md mx-4 text-white">
              {getText()}
            </div>
      </div>
      
      </div>
     
    </div>
  )
}

export default JsonObjectWidget