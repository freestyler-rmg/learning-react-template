import { Routes, Route, Link } from 'react-router-dom';
import HelloWorld from "./features/HelloWorld";
import ThinkingInReact from './features/ThinkingInReact';

export default function App() {
  return (
    <>
      <nav>
        <Link className="" to="/">Hello World</Link>
        <Link to="/thinking-in-react">Thinking In React</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/thinking-in-react" element={<ThinkingInReact />} />
      </Routes>
    </>
  );
}