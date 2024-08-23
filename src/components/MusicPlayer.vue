<script lang="ts" setup>
import Aplayer from 'vue3-aplayer'

// 根据当前季节播放音乐，part start...
const nowDate = new Date()
const nowMonth = nowDate.getMonth() + 1

interface SeasonMusicSrcMap {
  [key: number]: string;
}

const seasonMusicSrcMap: SeasonMusicSrcMap = {
  3: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Spring-Its-A-Big-World-Outside.mp3',
  4: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Spring-Its-A-Big-World-Outside.mp3',
  5: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Spring-Its-A-Big-World-Outside.mp3',
  6: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Summer-Natures-Crescendo.mp3',
  7: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Summer-Natures-Crescendo.mp3',
  8: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Summer-Natures-Crescendo.mp3',
  9: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Fall-Ghost-Synth.mp3',
  10: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Fall-Ghost-Synth.mp3',
  11: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Fall-Ghost-Synth.mp3',
  12: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Winter-Ancient.mp3',
  1: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Winter-Ancient.mp3',
  2: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Winter-Ancient.mp3',
};

const defaultMusicSrc = 'http://errorwft.top/wp-content/uploads/2024/06/default-season-music.mp3';

function getCurrentSeasonMusicSrc(nowMonth : number) {
  if (nowMonth < 1 || nowMonth > 12) {
    console.warn("Invalid nowMonth value. Using default music src.");
    return defaultMusicSrc;
  }

  const musicSrc = seasonMusicSrcMap[nowMonth] || defaultMusicSrc;
  
  return musicSrc;
}

var currentSeasonMusicSrc = getCurrentSeasonMusicSrc(nowMonth);
// 根据当前季节播放音乐，part end...

</script>

<template>
    <Aplayer mini class="pm-aside-aplayer" repeat="repeat-one"
        :music="{
            title: 'Stardew Valley',
            artist: 'ConcernedApe',
            src: currentSeasonMusicSrc,
            pic: 'http://errorwft.top/wp-content/uploads/2024/06/ConcernedApe-Spring-Its-A-Big-World-Outside-mp3-image.jpg'
        }"
    />
</template>