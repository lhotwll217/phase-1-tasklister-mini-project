document.addEventListener("DOMContentLoaded", () => {



  newTaskForm = document.getElementById("create-task-form"),

    newTaskForm.addEventListener("submit", e => {

      e.preventDefault()

      let newTask = document.createElement('li')
      let btn = document.createElement('button')

      btn.innerText = "x"
      newTask.textContent = e.target[0].value

      newTask.append(btn)



      console.log(newTask)



      document.querySelector("#tasks").prepend(newTask)
      e.target.reset()
      // e.reset()




      // newTask.append




    })

})


