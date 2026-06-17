import { Routes, Route, Link } from 'react-router-dom';
import HelloWorld from "./features/HelloWorld";
import ThinkingInReact from './features/ThinkingInReact';
import VideoPlayerPage from "./features/TestingEffects/VideoPlayerPage";
import Chat from "./features/TestingEffects/Chat";
import TodoList from "./features/TransformData";
import CacheCalculation from "./features/CacheCalculation";

export default function App() {
  return (
    <>
      <nav className="flex gap-1">
        <Link className="border border-solid border-blue-500 p-1 rounded-sm text-sm" to="/">Hello World</Link>
        <Link className="border border-solid border-blue-500 p-1 rounded-sm text-sm" to="/thinking-in-react">Thinking In React</Link>
        <Link className="border border-solid border-blue-500 p-1 rounded-sm text-sm" to="/testing-effects/video-player-page">Testing Effects - Video Player Page</Link>
        <Link className="border border-solid border-blue-500 p-1 rounded-sm text-sm" to="/testing-effects/chat">Testing Effects - Chat</Link>
        <Link className="border border-solid border-blue-500 p-1 rounded-sm text-sm" to="/effects-quiz/transform-data">Effects - Transform Data</Link>
        <Link className="border border-solid border-blue-500 p-1 rounded-sm text-sm" to="/effects-quiz/cache-calculation">Effects - Cache Calculation</Link>
      </nav>
      <hr className="my-4" />
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/thinking-in-react" element={<ThinkingInReact />} />
        <Route path="/testing-effects/video-player-page" element={<VideoPlayerPage />} />
        <Route path="/testing-effects/chat" element={<Chat />} />
        <Route path="/effects-quiz/transform-data" element={<TodoList />} />
        <Route path="/effects-quiz/cache-calculation" element={<CacheCalculation />} />
      </Routes>
    </>
  );
}