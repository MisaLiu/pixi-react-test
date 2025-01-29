import { Application, extend } from "@pixi/react";
import { Sprite, Texture } from 'pixi.js';

function App() {
  extend({ Sprite });

  return (
    <>
      <Application
        resizeTo={window}
      >
        <pixiSprite
          texture={Texture.WHITE}
          width={100}
          height={100}
        />
      </Application>
    </>
  )
}

export default App
