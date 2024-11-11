
"use client"

import { useState } from 'react';
import Image from 'next/image'
import {GrNotes} from 'react-icons/gr'
import {RiTodoFill} from 'react-icons/ri'


const SearchInput = ({notes}: any) => {

return (

<form className="flex items-center max-w-sm mx-auto">   
    <label className="sr-only">Search {notes ? "notes" : "to-do"}</label>
    <div className="relative w-full">
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Search ${notes ? "notes" : "to-do"}...`} />
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>

)
}


const Notes = ({noteData} : any) => {
return (
<>
{ noteData.map((e: string) => {
return (
<div key={e} className="bg-gray-50 flex flex-col gap-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full min-h-16 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<p className='text-lg text-white'>{e.slice(0,30)}...</p>
<p className='text-sm text-gray-300'>8:00pm, November 8, 2024 </p>

</div>
)})
}
</>
)
}


const Todos = ({todoData} : any) => {
return (
<>
{ todoData.map((e: string) => {
return (
<div key={e} className="bg-gray-50 flex gap-2 items-center justify-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-16 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label className="ml-3 min-w-0 flex-1 text-gray-200">{e.slice(0, 30)}...</label>
</div>
)})
}
</>
)
}



export default function Home() {
const [noteData, setNoteData] = useState(
["this is the first note",
"this is the second note",
"this is the third note"]
)

const [todoData, setTodoData] = useState(
["this is the first todo",
"this is the second todo",
"this is the third todo"]
)

const [note, setNote] = useState(true)

  return (
    <main className="bg-gray-50 min-h-screen w-screen bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 h-full w-full lg:py-0">

<div className="w-full bg-gray-900 text-gray-100 flex flex-col gap-8 min-h-screen">
<p className="text-2xl">{note ? "Notes" : "To-do"}</p>
<SearchInput notes={note}/>

<div className="w-full mt-6 flex flex-col gap-3 h-auto">
{
 note ? ( <Notes noteData={noteData} />) : ( <Todos todoData={todoData} />)

}

 </div>

</div>

<div className="w-14 text-[6rem] font-bold p-2 fixed bottom-12 mx-auto rounded-full bg-blue-400 text-white flex items-center justify-center h-14">+</div>

<div className="w-full h-14 flex fixed  bottom-5 justify-between items-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
<span className="text-2xl" onClick={() => setNote(true)}><GrNotes /></span>
<span className="text-2xl" onClick={() => setNote(false)}><RiTodoFill /></span>

</div>
</div>
</main>
  )
}
