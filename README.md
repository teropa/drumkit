A collection of simple drum hits, usable as a sampled drum kit in a Web Audio application.

## Usage

```js
import {
  kick,
  snare,
  hatClosed,
  hatOpen,
  tomLow,
  tomMid,
  tomHigh,
  ride,
  crash,
} from "@teropa/drumkit";

// Each import will be a URL from which the sample data may be loaded and decoded with a Web Audio AudioContext

fetch(kick)
  .then((res) => res.arrayBuffer())
  .then((buf) => audioContext.decodeAudioData(buf));
```

## License

Code is MIT licensed.

Samples are from freesound.org:

- [DWDS'S Deep House Drum kit](https://freesound.org/people/DWSD/packs/11575/?page=1#sound), licensed under Creative Commons Attribution
- [Stomachache's Analog Cymbal](https://freesound.org/people/stomachache/sounds/140153/), license under Creative Commons 0.
- [Karman Lyne's 808 toms](https://freesound.org/people/Karman_Lyne/sounds/520168/), license under Creative Commons 0.
