type ToDoListComponentProps = {
  list: Array<{
    id:number,
    name: string,
    completed: boolean,
  }>
}

function ToDoListComponent({ list }: ToDoListComponentProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>/</th>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td><input type="checkbox" name="completed" /></td>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { ToDoListComponent };
