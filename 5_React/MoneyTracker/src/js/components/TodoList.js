import Header from "./Header";
import{List} from './MainPage';

function TodoList() {

  const tasks = [
    { title: "Wake up", isFruit: false, id: 1 },
    { title: "Some Gym", isFruit: false, id: 2 },
    { title: "Learn JS", isFruit: true, id: 3 },
  ];

  return (
    <div className="todo">
      <Header headerTagName="h1" headerText="List" />
      <List items={tasks} />
    </div>
  );
}

export default TodoList;
