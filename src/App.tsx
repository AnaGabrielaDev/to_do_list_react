import { ToDoListComponent } from './components/ToDoListComponent';

function App() {
  const list = [
    {
      id: 1,
      name: 'Foo',
      completed: false,
    },
    {
      id: 2,
      name: 'Foo 2',
      completed: false,
    },
    {
      id: 3,
      name: 'Foo 3',
      completed: false,
    },
  ];
  return (
    <>
      <h1>To Do List</h1>
      <section>
        <ToDoListComponent list={list} />
      </section>
    </>
  );
}

export default App;
