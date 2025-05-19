document.addEventListener("DOMContentLoaded", () => {
  loadHistory();
  loadTodos();
  loadQuote();
  updateClock();

  // Theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  setInterval(updateClock, 1000);
});

document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

function saveSearch() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
  history.unshift(query);
  history = history.slice(0, 5);
  localStorage.setItem("searchHistory", JSON.stringify(history));
  loadHistory();
}

function loadHistory() {
  const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
  const list = document.getElementById("historyList");
  list.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();
  if (!task) return;

  let todos = JSON.parse(localStorage.getItem("todoList")) || [];
  todos.push(task);
  localStorage.setItem("todoList", JSON.stringify(todos));
  input.value = "";
  loadTodos();
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todoList")) || [];
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${todo} <button onclick="deleteTodo(${index})">❌</button>`;
    list.appendChild(li);
  });
}

function deleteTodo(index) {
  let todos = JSON.parse(localStorage.getItem("todoList")) || [];
  todos.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(todos));
  loadTodos();
}

function loadQuote() {
  const quotes = [
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Push yourself, because no one else is going to do it for you.",
    "The secret of getting ahead is getting started.",
    "Do something today that your future self will thank you for.",
    "You don’t have to be great to start, but you have to start to be great."
  ];
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteText").textContent = `"${random}"`;
}

function startChat() {
  const input = document.getElementById("chatInput").value.trim();
  if (!input) return;

  const output = document.getElementById("chatOutput");
  output.innerHTML = `You asked: "${input}" <br> AI says: I'm still learning! Try again later.`;

 
}