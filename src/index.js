import './index.scss';
import summer_sound from '../public/assets/sounds/summer.mp3'
import winter_sound from '../public/assets/sounds/winter.mp3'
import rainy_sound from '../public/assets/sounds/rain.mp3'

import summer_bg from '../public/assets/summer-bg.jpg'
import winter_bg from '../public/assets/winter-bg.jpg'
import rainy_bg from '../public/assets/rainy-bg.jpg'

// import summer_svg from '../public/assets/icons/sun.svg'


const ready = () => {
  const main_bg = document.querySelector('.wrap').style;
  main_bg.setProperty('--background', `url(${summer_bg}) center / cover no-repeat`); // default

  const buttons = document.querySelectorAll(".seasons__item")
  const btn_array = Array.prototype.slice.call(buttons);
  const volume_range = document.querySelector("#volume-control");
  // const audio_options = {
  //   loop: true
  // }
  const seasons = [
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

  btn_array.forEach(item => {
    item.style.setProperty('--background-summer', `url(${summer_bg}) center / cover no-repeat`);
    item.style.setProperty('--background-rainy', `url(${rainy_bg}) center / cover no-repeat`);
    item.style.setProperty('--background-winter', `url(${winter_bg}) center / cover no-repeat`);
    
    const i_as_arr = Array.from(item.children[0].children);

    const play = id => {
      const curr_seasons = seasons.find(f => f.id === id) || null
      if (curr_seasons) {
        volume_range.addEventListener("change", e => curr_seasons.audio.volume = e.currentTarget.value / 100)

        seasons.forEach(val => {
          if (val.id !== id) {
            if (!val.audio.paused) {
              const prev = document.getElementById(val.id)
              const prev_as_arr = Array.from(prev.children[0].children);
              prev_as_arr.forEach(svg => {
                if (svg.classList.contains("hide")) svg.style.display = "none"
                if (svg.classList.contains("show")) svg.style.display = "inline"
              })
              val.audio.pause();
              val.audio.currentTime = 0;
            }
          }
        })
        
        if (curr_seasons.audio.paused) {
          curr_seasons.audio.play()
          
          i_as_arr.forEach(svg => {
            if (svg.classList.contains("show")) svg.style.display = "none"
            if (svg.classList.contains("hide")) svg.style.display = "inline"
          })
        } else {
          curr_seasons.audio.pause()
          
          i_as_arr.forEach(svg => {
            if (svg.classList.contains("hide")) svg.style.display = "none"
            if (svg.classList.contains("show")) svg.style.display = "inline"
          })
        }
        main_bg.setProperty('--background', `url(${curr_seasons.bg}) center / cover no-repeat`);
      }
    }

    item.onclick = () => play(item.id)
  });
}

document.addEventListener("DOMContentLoaded", ready);
