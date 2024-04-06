import React from "react"

function Header() {

  return (
    <header className="site-header mb-5">
      <div className="container-fluid d-flex align-items-end">
        <ul class="nav list-group-horizontal">
        <li class="nav-item text-dark fs-4">
          <a class="nav-link link-dark fs-5" href="http://localhost:8005/" aria-current="page">
            Home
          </a>
        </li>
        <li class="nav-item fs-4">
          <a class="nav-link link-dark fs-5" href="http://localhost:8005/todolist" aria-current="page">
            TodoList
          </a>
        </li>
        <li class="nav-item text-dark fs-4">
          <a class="nav-link link-dark fs-5" href="http://localhost:8005/contact" aria-current="page">
            Contact
          </a>
        </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
