import { render } from "solid-js/web";
import { createMemo, Accessor } from "solid-js";

const App = () => {
  return <div>Salut</div>;
};

const loremIpsumWords =
  "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(
    /\s+/
  );

const createLorem = (words: Accessor<number> | number) => {
  return createMemo(() => {
    const output = [],
      len = typeof words === "function" ? words() : words;
    while (output.length <= len) {
      console.log("dds");
      output.push(...loremIpsumWords);
    }

    return output.slice(0, len).join(" ");
  });
};

const root = document.querySelector("#root") as HTMLDivElement | null;

if (!(root instanceof HTMLElement)) {
  throw new Error("Error");
}
render(() => <App></App>, root);
