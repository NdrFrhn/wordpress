import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import ExampleReactComponent from './scripts/ExampleReactComponent'
import Header from './scripts/Header'
import ToDoList from './scripts/ToDoList'
import FunctionalComponentCityLit from './scripts/FunctionalComponentCityLit'
import ContactPage from './scripts/ContactPage'
import Footer from './scripts/Footer'


ReactDOM.render(<Header />, document.querySelector("#render-react-header"));
ReactDOM.render(<Footer />, document.querySelector("#render-react-footer"));
ReactDOM.render(<ToDoList />, document.querySelector("#render-react-todolist"));
ReactDOM.render(<ContactPage />, document.querySelector("#render-react-contactPage"));
