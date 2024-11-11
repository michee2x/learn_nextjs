import Image from 'next/image'
import {GrNotes} from 'react-icons/gr'
import {RiTodoFill} from 'react-icons/ri'

export default function Home() {
  return (
    <section class="bg-gray-50 h-screen w-screen
 dark:bg-gray-900">
  <div class="flex flex-col relative items-center justify-center px-6 py-8 h-full w-full lg:py-0">

<div>
<p>Notes</p>



</div>
      
      <div class="w-full h-14 flex fixed buttom-0 justify-between items-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
<span className="text-2xl"><GrNotes /></span>
<span className="text-2xl"><RiTodoFill /></span>


</div>
</section>
  )
}
