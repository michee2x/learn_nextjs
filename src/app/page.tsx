
"use client"

import { useState } from 'react';
import Image from 'next/image'
import {GrNotes} from 'react-icons/gr'
import {RiTodoFill} from 'react-icons/ri'
import {FaArrowLeft} from 'react-icons/fa'
import {MdOutlineShare} from 'react-icons/md'
import {CiMenuKebab} from 'react-icons/ci'
import {GrStatusGood} from "react-icons/gr"
import {TbZoomCancel} from "react-icons/tb"

const SearchIterate = (note:any, setFiltered:any, search:any, noteData:any, todoData:any) => {
  if(note && search){
      const searchedData = noteData.filter((e:any) => e?.title.toLowerCase().includes(search))
      setFiltered(searchedData)
  }
 if(!note && search){
      const searchedData = todoData.filter((e:any) => e?.text.toLowerCase().includes(search))
      setFiltered(searchedData)
 }

}

const SearchInput = ({noteData, todoData, setFiltered, notes, search, setSearch, filtered}:any) => {

return (

<div className="flex items-center max-w-sm mx-auto">   
    <label className="sr-only">Search {notes ? "notes" : "to-do"}</label>
    <div className="relative w-full">
        <input value={search} onChange={(e) => setSearch(e.target.value?.toLowerCase())} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Search ${notes ? "notes" : "to-do"}...`} />
    </div>

    <button type="submit" onClick={() => SearchIterate(notes, setFiltered, search, noteData, todoData)} className={`${!filtered?.length ? "block" : "hidden"} p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
    </button>

<button type="submit" onClick={() => setFiltered([])} className={`${filtered?.length ? "block" : "hidden"}  p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>

<span className="w-4 search h-4 flex items-center justify-center text-xl" ><TbZoomCancel /></span>

 </button>

</div>

)
}

const Editor = ({title, setTitle, notebody, setBody, note}:any) => {
return (
<>
<input value={title} onChange={(e:any) => setTitle(e.target.value)} type="text" className={`${note ? "block" : "hidden"}  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="note title pls..." required />
  

<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your note</label>
<textarea value={notebody} onChange={(e:any) => setBody(e.target.value)} className="block p-2.5 w-full h-[25rem] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts 🤔 here..."></textarea>

</>
)
}


const Notes = ({noteData, setSingleNote} : any) => {
return (
<>
{ noteData.map((e: any, i: number) => {
return (
<div key={`${i}`} onClick={() => setSingleNote(e)} className="flex flex-col gap-2 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full min-h-16 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
<p className='text-lg text-white'>{e.title.slice(0,30)}...</p>
<p className='text-xs text-gray-300'>{e.time}</p>

</div>
)})
}
</>
)
}
const setTodo = (todoData:any, text: string, setTodoData:any) => {
const newData = todoData.map((e:any) => e.text === text && e.isChecked === false ? ({...e, isChecked:true}) : e.text === text && e.isChecked === true ? ({...e, isChecked: false}) : e)
setTodoData(newData)
}


const Todos = ({todoData, setTodoData} : any) => {
return (
<>
{ todoData.map((e: any) => {
return (
<div key={e.text} className="flex gap-2 items-center justify-center border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-16 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <input checked={e?.isChecked} onChange={() => setTodo(todoData, e.text, setTodoData)} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label className="ml-3 min-w-0 flex-1 text-gray-200">{e?.text.slice(0, 30)}...</label>
</div>
)})
}
</>
)
}

const setDB = (title:string, noteBody:any, note:any, noteData:any, setNoteData:any, todoData:any, setTodoData:any) => {
if(note){
setNoteData([...noteData, {text:noteBody, time:"8:00pm, November 8, 2024", title: title}])
} else {
setTodoData([...todoData, {text:noteBody, isChecked:false}])
}

}


export default function Home() {
const [noteData, setNoteData] = useState(
[{text:"this is the first note", time:"8:00pm, November 8, 2024", title:"title 1"},
{text:"this is the first note", time:"8:00pm, November 8, 2024", title:"title 2"},
{text:"this is the first note", time:"8:00pm, November 8, 2024", title:"title 3"}]
)

const [todoData, setTodoData] = useState(
[ {text:"this is the first todo", isChecked:false},
 {text:"this is the second todo", isChecked:false},
 {text:"this is the third todo", isChecked:false}]
)

const [note, setNote] = useState(true)
const [singleNote, setSingleNote] = useState({text:"", time:""})
const [show, setShow] = useState(false)
const [edit, setEdit] = useState(false)
const [title, setTitle] = useState("")
const [notebody, setBody] = useState("")
const [filtered, setFiltered] = useState([])
const [search, setSearch] = useState("")
  return (
<>
    <main className={`bg-gray-50 ${(singleNote?.text || singleNote?.time) ? "hidden" : "block"} min-h-screen  w-screen bg-gray-900`}>
  <div className="flex flex-col items-center justify-center px-6 pt-8 pb-16 h-full w-full lg:py-0">

<div className="w-full bg-gray-900 text-gray-100 flex flex-col gap-8 min-h-screen">
<p className="text-2xl">{note ? "Notes" : "To-do"}</p>
<SearchInput noteData={noteData} todoData={todoData} setFiltered={setFiltered} notes={note} search={search} setSearch={setSearch} filtered={filtered} />

<div className="w-full mt-6 flex flex-col gap-3 h-auto">
{
 ((note && !filtered.length) ? ( <Notes noteData={noteData} setSingleNote={setSingleNote} />) : (!note && !filtered.length) ? ( <Todos todoData={todoData} setTodoData={setTodoData} /> ) : (note && filtered.length) ? ( <Notes noteData={filtered} setSingleNote={setSingleNote} />) : (!note && filtered.length) ? (<Todos todoData={filtered} setTodoData={setFiltered} />) : "nothing here 💀..." )

}

 </div>

</div>

<div onClick={() => setEdit(true)} className="w-14 z-10 text-[2rem] font-bold p-2 fixed bottom-7 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center h-14">+</div>

<div className="w-full w-full h-14 flex fixed  bottom-0 justify-between items-center text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
<span className="text-2xl" onClick={() => setNote(true)}><GrNotes /></span>
<span className="text-2xl" onClick={() => setNote(false)}><RiTodoFill /></span>
</div>
</div>
</main>

<main className={`${(singleNote.text || singleNote.time) ? "block" : "hidden"} w-screen min-h-screen bg-gray-900 text-gray-100`}>

<div className="w-full h-16 flex items-center justify-between px-3"> 

<p className="w-24 h-full flex items-center justify-between">
<span onClick={() => setSingleNote({text:"",time:""})}><FaArrowLeft /></span>
<span>Notes</span>
</p>

<p className="w-24 h-full flex items-center justify-between">
<span><MdOutlineShare /></span>
<span onClick={() => setShow(prev => !prev)}><CiMenuKebab /></span>

</p>
</div>

<div className="w-full relative h-full bg-gray-900 px-10 px-4">
<button type="submit" className={`${!show ? "h-0 w-0":"w-32 h-14"} absolute top-1 rounded-lg right-2 bg-red-600 text-white overflow-hidden flex items-center justify-center transition-all duration-500`}>delete</button>
<p className="text-xs text-gray-200 mt-6 mb-4">{singleNote?.time}</p>
<p className='text-lg text-gray-100'>{singleNote?.text}</p></div>

 </main>


<main className={`w-screen ${edit ? "block" : "hidden"} z-20 fixed top-0 bottom-0 right-0 left-0 min-h-screen bg-gray-900 text-gray-100`}>

<div className="w-full h-16 flex items-center justify-between px-3"> 

<p className="w-24 h-full flex items-center justify-between">
<span onClick={() => setEdit(false)}><FaArrowLeft /></span>
<span>Edit</span>
</p>

<p className={`text-2xl w-12 h-full ${(notebody || title) ? "block" : "hidden"} h-full flex items-center justify-end`} onClick={() => {setEdit(false); setDB(title,notebody,note, noteData, setNoteData, todoData, setTodoData)}}>
<GrStatusGood />
</p>
</div>

<div className="w-full relative h-full bg-gray-900 px-10 px-4">
<Editor note={note} title={title} setTitle={setTitle} notebody={notebody} setBody={setBody} />
</div>

 </main>
</>
  )
}
