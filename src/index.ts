import './index.scss';
import { seasons, background_enum } from './data'

const ready = (): void => {
  const main_bg = document.querySelector('.wrap') as HTMLElement;
  main_bg && 
  main_bg.style.setProperty('--background', `url(${background_enum.summer}) center / cover no-repeat`); // default

  const buttons = document.querySelectorAll(".seasons__item")
  const btn_array = Array.prototype.slice.call(buttons);
  const volume_range = document.querySelector("#volume-control") as HTMLElement;

  const play = (id: string, i_as_arr: HTMLElement[]) => {
    const curr_seasons = seasons.find(f => f.id === id) || null
    if (curr_seasons) {
      volume_range.addEventListener("change", (event: Event): void => {
        const currentTarget = event.currentTarget as HTMLInputElement;
        const volume: number = +currentTarget.value / 100;
        curr_seasons.audio.volume = volume
      })

      seasons.forEach(val => {
        if (val.id !== id) {
          if (!val.audio.paused) {
            const prev = document.getElementById(val.id) as HTMLElement;
            const prev_as_arr = Array.from(prev.children[0].children) as HTMLElement[];
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
      main_bg && main_bg.style.setProperty('--background', `url(${curr_seasons.bg}) center / cover no-repeat`);
    }
  }

  btn_array.forEach(item => {
    item.style.setProperty(`--background-${item.id}`, `url(${background_enum[item.id]}) center / cover no-repeat`);
    const i_as_arr = Array.from(item.children[0].children) as HTMLElement[];
    item.onclick = () => play(item.id, i_as_arr)
  });
}

document.addEventListener("DOMContentLoaded", ready);
