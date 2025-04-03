/**
 * Función que se ejecuta al cargar la página
 *
 * @param event
 */

const URL = "https://task-management-system-66fc9-default-rtdb.firebaseio.com/"

async function postData(event){
    event.preventDefault()
    const name = event.target.name.value
    const description = event.target.description.value

    const task = {
        name,
        description,
        status: 'pending'
    }

    const reponse = await fetch(`${URL}tasks.json`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await reponse.json()

    if (data.name){
        event.target.reset()
        const btn = document.getElementById("my_modal_7")
        btn.click()
        alert("Task created")
        await loadData()
        window.location.reload()
    } else {
        alert("Error")
    }
}

async function loadData(){
    const data = await fetch(`${URL}tasks.json`, {
        cache: "no-cache"
    })
    const tasks = await data.json()
    const app = document.getElementById("app")

    for (const key in tasks){
        const task = tasks[key]
        const div = document.createElement("div")
        div.className = "flex w-full"
        div.innerHTML = `
            <div class="flex gap-3 flex-1">

               <p class="flex-1 flex justify-center items-center rounded-md text-[#06b6d4] font-bold text-lg text-center px-3 ${task.status === 'completed' ? 'set-box-shadow-onCompleted border-2 border-[#00cdb7] line-through italic text-sky-400/25' : 'set-box-shadow-onPending border-2 border-[#FF0000AD]'}"
               >
                     ${task.name}
                     ${task.description}
               </p>
               
               <div class="grid grid-cols-1 gap-2 w-[4rem]">
                   <button class="btn btn-success h-full" onclick="updateTask('${key}')">
                       <svg class="w-6 h-6 text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                       </svg>
                   </button>
                   <button class="btn btn-error h-full" onclick="deleteTask('${key}')">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                   </button>
               </div>
           </div>
        `
        app.appendChild(div)
    }
}

async function updateTask(key){
    const res = await fetch(`${URL}tasks/${key}.json`)
    const task = await res.json()


    const updateTask ={
        ...task,
        status: task.status === 'completed' ? 'pending' : 'completed'
    }
    console.log(updateTask)


    const response = await fetch(`${URL}tasks/${key}.json`, {
        method: "PATCH",
        body: JSON.stringify(updateTask),
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store"
    })

    const data = await response.json()


    if (data){
        alert("Task completed")
        await loadData()
        window.location.reload()
    } else {
        alert("Error")
    }
}

async function deleteTask(key){

    const confirm = window.confirm("Esta seguro de eliminar la tarea?")

    if (!confirm){
        alert("La tarea no se elimino")
        return
    }
    const res = await fetch(`${URL}tasks/${key}.json`, {
        method: "DELETE"
    })

    if (res.ok){
        alert("Tarea eliminada")
        await loadData()
        window.location.reload()
    } else {
        alert("Error")
    }
}