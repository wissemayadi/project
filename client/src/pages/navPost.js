import React from 'react'

const NavPost = () => {
    return (
        <div>


<div class="position:fixed">
  <header class="bg-teal-400">
    {/* <nav class="flex justify-between w-full bg-purple-500 text-white p-4"> */}
    <nav 
    
    class="fixed flex w-full bg-white border-b items-center  bg-yellow-600 justify-between flex-wrap p-5 m-auto top-0 animated">

      <a href="/"><span class="font-semibold text-xl tracking-tight">Post section</span></a>
        <div class="md:items-center md:w-auto flex">
          <div class="md:flex hidden">
        
           
          </div>
          <div class="flex text-sm" v-else>
          	<a class="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" href="profil">Profil page</a>
            <a class="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600" href="/">Home</a>
          </div>
        </div>
    </nav>
  </header>
  <main class="flex justify-center items-center">
    <h1 class="text-3xl text-center">Welcome</h1>
  </main>
  <div class="bottomNav fixed bottom-0 w-full">
    <nav style={{border:"1px solid blue"}} class="md:hidden bottom-0 w-full bg-gray-700 text-xs">
      <ul class="flex justify-around items-center text-white text-center opacity-75 text-lg font-bold">
        <li class="p-4 hover:bg-gray-500">
          <a href="/link">
            <span>Link 1</span>
            <svg class="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
              <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
            </svg>
           </a>
        </li>
        <li class="p-4 hover:bg-gray-500">
          <a href="/link">
            <span>Link 2</span>
            <svg class="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
              <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
            </svg>
          </a>
        </li>
        <li class="p-4 hover:bg-gray-500">
          <a href="/link">
            <span>Link 3</span>
            <svg class="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
              <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
            </svg>
          </a>
        </li>
        <li class="p-4 hover:bg-gray-500">
          <a href="/link">
            <span>Link 4</span>
            <svg class="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
              <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>

        </div>
    )
}

export default NavPost


{/* 
<nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0">
    <a href="/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
  </div>
  <div>
    <a href="/profil" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Profil</a>
    <a href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Two</a>
    <a href="/three" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Three</a>
  </div>
</nav> */}