import { Profiler, StrictMode, type ProfilerOnRenderCallback } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const root = document.getElementById('root');

const onRender: ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) => {
  console.groupCollapsed(`Profiler: ${id} — ${phase.toUpperCase()}`);
  console.log('Actual duration:', actualDuration.toFixed(2), 'ms');
  console.log('Base duration:', baseDuration.toFixed(2), 'ms');
  console.log('Start time:', new Date(startTime).toLocaleTimeString());
  console.log('Commit time:', new Date(commitTime).toLocaleTimeString());
  console.groupEnd();
};

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Profiler id="App" onRender={onRender}>
        <App />
      </Profiler>
    </StrictMode>
  );
}
