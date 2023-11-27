import { render } from "solid-js/web";

const App = () => {
  return <div>Salut</div>;
};

const root = document.querySelector("#root") as HTMLDivElement | null;

if (!(root instanceof HTMLElement)) {
  throw new Error("Error");
}
render(() => <App></App>, root);
