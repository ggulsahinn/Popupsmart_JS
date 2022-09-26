let name = prompt("Adınız nedir?")
let info = document.querySelector("#myName")
localStorage.setItem("name", name)
info.innerHTML = `${name}`

const addInput = document.querySelector('#add-task')

const addBtn = document.querySelector('#add-btn')
const delTaskBtn = document.querySelector('#del-btn')

const renameBtn = document.querySelector('.rename-task')
const updateBtn = document.querySelector('.update-task')
const delBtn = document.querySelector('.del-task')

const tasks = document.querySelector('.tasks')

// delTaskBtn.addEventListener('click', () => {
//     addInput.value = ''
// })

function addTodo(todo) {
    let todoTask = ` 
                <div class = "task">
					<input type="text" id="added-task" name='todo' disabled value="${todo}">
                    <div>
                        <input type="button" value="✔️" name='update' title='update task' class="update-task">
                        <input type="button" value="✏️" name='rename' title='rename task' class="rename-task">
                        <input type="button" value="❌" name='delete' title='delete task' class="del-task">
                    </div>
                </div>
                `
    tasks.innerHTML += todoTask
}

addBtn.addEventListener('click', () => {
    let todo = addInput.value

    if (todo.length < 3) {
        alert('En az 3 karakter giriniz.')
    } else {
        todo = todo.trim()
        console.log(todo)
        addTodo(todo)
        addInput.value = ''
        updateTodo()
    }
})

addInput.addEventListener("keyup", (event) => {
    if (event.which === 13) {
        addTodo(todo)
    }
})


function updateTodo() {

    let task = document.querySelectorAll('.task')

    task.forEach((t) => {
        // console.log(t.children)
        t.addEventListener('click', e => {

            if (e.target.classList.contains('rename-task')) {

                console.log('rename')
                if (t.children[0].disabled) {
                    t.children[0].disabled = false
                }
            } else if (e.target.classList.contains('del-task')) {
                t.remove()
            }

            else if (e.target.classList.contains('update-task')) {
                console.log(t.children[0].disabled)
                if (t.children[0].disabled == false) {
                    t.children[0].disabled = true
                }
            }
        })

    })

}