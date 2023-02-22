import summer_sound from '../src/assets/sounds/summer.mp3'
import winter_sound from '../src/assets/sounds/winter.mp3'
import rainy_sound from '../src/assets/sounds/rain.mp3'

import summer_bg from '../src/assets/summer-bg.jpg'
import winter_bg from '../src/assets/winter-bg.jpg'
import rainy_bg from '../src/assets/rainy-bg.jpg'

export const background_enum: any = {
  summer: summer_bg,
  winter: winter_bg,
  rainy: rainy_bg
}

export const seasons = [
  {
    id: "summer",
    audio: new Audio(summer_sound),
    bg: summer_bg
  },
  {
    id: "rainy",
    audio: new Audio(rainy_sound),
    bg: rainy_bg
  },
  {
    id: "winter",
    audio: new Audio(winter_sound),
    bg: winter_bg
  }
]
