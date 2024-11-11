import Image from 'next/image'
import {GrNotes} from 'react-icons/gr'
import {RiTodoFill} from 'react-icons/ri'


const SearchInput = () => {
return (

<form className="flex items-center max-w-sm mx-auto">   
    <label className="sr-only">Search</label>
    <div className="relative w-full">
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Notes..." required />
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



export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen w-screen bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 h-full w-full lg:py-0">

<div className="w-full bg-gray-900 text-gray-100 flex flex-col gap-8 p-6 min-h-screen">
<p className="text-2xl">Notes</p>
<SearchInput />



</div>
</div>
<div className="w-full h-14 flex fixed buttom-0 justify-between items-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
<span className="text-2xl"><GrNotes /></span>
<span className="text-2xl"><RiTodoFill /></span>

</div>
</main>
  )
}
