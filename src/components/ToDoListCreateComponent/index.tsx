import { FormEvent } from 'react';

function ToDoListCreateComponent() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('submit');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" placeholder="name" />
      <input type="submit" value="Create" />
    </form>
  );
}

export { ToDoListCreateComponent };
