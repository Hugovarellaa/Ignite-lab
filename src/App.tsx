import { Header } from "./components/Header";
import { List } from "./components/List";
import { SearchBox } from "./components/SearchBox";
import { Task } from "./components/Task";

import "./styles/global.css";

export function App() {
  return (
    <div>
      <Header />
      <SearchBox />
      <Task/>
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
