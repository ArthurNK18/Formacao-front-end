import './App.css'


// Impotando componente
import FirstComponent from './components/FirstComponent'

// Template Expression
import TemplateExpression from './components/TemplateExpression'

// MyComponent
import MyComponent from './components/MyComponent'

// Events
import Events from './components/Events'
function App() {
  // Comentarios
  return (
    <div className="App">
      {/* Comentario JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent/>
      <Events />
    </div>
  )
}

export default App
