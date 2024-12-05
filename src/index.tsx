import * as ReactDOMClient from 'react-dom/client'

const container = document.getElementById('root')

if (container) {
  const root = ReactDOMClient.createRoot(container)

  root.render(
    <ul>
      <li>
        <a href={`${import.meta.env.BASE_URL}containers/7guis/index.html`}>7guis app</a>
      </li>
      <li>
        <a href={`${import.meta.env.BASE_URL}containers/todo-mvc/index.html`}>todo-mvc app</a>
      </li>
      <li>
        <a href={`${import.meta.env.BASE_URL}containers/todo-mvc-with-multiple-domains/index.html`}>
          todo-mvc-with-multiple-domains app
        </a>
      </li>
      <li>
        <a href={`${import.meta.env.BASE_URL}containers/chess/index.html`}>chinese chess</a>
      </li>
      <li>
        <a href={`${import.meta.env.BASE_URL}containers/tree/index.html`}>tree app</a>
      </li>
      <li>
        <a href={`${import.meta.env.BASE_URL}containers/steps/index.html`}>steps</a>
      </li>
      <li>
        <a href={`${import.meta.env.BASE_URL}containers/others/index.html`}>others...</a>
      </li>
    </ul>,
  )
}
