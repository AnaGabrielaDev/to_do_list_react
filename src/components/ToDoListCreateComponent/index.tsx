function ToDoListCreateComponent() {
  function handleSubmit(event: Event) {
    event.preventDefault();
    console.log('submit');
  }
  return (
    <form onSubmit={(event) => handleSubmite()}>
      <input type="text" name="" placeholder="name" />
      <input type="submit" value="Create" />
    </form>
  );
}

export { ToDoListCreateComponent };
