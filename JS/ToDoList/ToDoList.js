const input = document.getElementById("text")
const btn = document.getElementById("add")
const tasks = document.getElementById("tasks")

btn.addEventListener("click", () => {
    const template = `
        <p>${input.value}</p>
        `
    tasks.insertAdjacentHTML("beforeend", template)
})