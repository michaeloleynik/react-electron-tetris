import React from 'react';
import Sound from 'react-sound';
import Tetris from './components/Tetris';

// Other
import mainThemeSound from './sound/tetrisMainTheme.mp3';

const App = () => (
  <div className="App">
    <Tetris />
    <Sound
      playStatus={Sound.status.PLAYING}
      volume={10}
      url={mainThemeSound}
      autoLoad={true}
      loop={true}
    />
  </div>
);

export default App;
