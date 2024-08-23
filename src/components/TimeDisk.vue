<script lang="ts" setup>
import { ref, onUnmounted } from 'vue'

import timeDiskImgUrl from '@/assets/images/time/disk.png'
import timePointerImgUrl from '@/assets/images/time/pointer.png'
import timeSpringImgUrl from '@/assets/images/time/spring.png'
import timeSummerImgUrl from '@/assets/images/time/summer.png'
import timeFallImgUrl from '@/assets/images/time/fall.png'
import timeWinterImgUrl from '@/assets/images/time/winter.png'
import timeWeatherImgUrl from '@/assets/images/time/cloudy-spring.png'

const nowDate = new Date()
const nowMonth = nowDate.getMonth() + 1
const nowDay = nowDate.getDate()
const nowHour = nowDate.getHours()
const nowMinutes = nowDate.getMinutes()

let nowDateStr = ref(nowMonth + '月' + nowDay + '日' )
let halfTip = nowHour < 12 ? '上午' : '下午'
let nowTimeStr = ref(halfTip + ' ' + nowHour.toString() + ':' + nowMinutes.toString().padStart(2, '0'))

// 根据当前季节拼接图片，part start...
interface TimeSpringImgUrlMap {
  [key: number]: string;
}

const timeSpringImgUrlMap: TimeSpringImgUrlMap = {
  3: timeSpringImgUrl,
  4: timeSpringImgUrl,
  5: timeSpringImgUrl,
  6: timeSummerImgUrl,
  7: timeSummerImgUrl,
  8: timeSummerImgUrl,
  9: timeFallImgUrl,
  10: timeFallImgUrl,
  11: timeFallImgUrl,
  12: timeWinterImgUrl,
  1: timeWinterImgUrl,
  2: timeWinterImgUrl,
};

const defaultSeasonImgUrl = timeSpringImgUrl;

function getTimeSeasonImgUrl(nowMonth : number) {
  if (nowMonth < 1 || nowMonth > 12) {
    console.warn("Invalid nowMonth value. Using default season url.");
    return defaultSeasonImgUrl;
  }

  const seasonImgUrl = timeSpringImgUrlMap[nowMonth] || defaultSeasonImgUrl;
  
  return seasonImgUrl;
}

var timeSeasonImgUrl = getTimeSeasonImgUrl(nowMonth);
// 根据当前季节拼接图片，part end...

// 根据当前时间旋转指针，part start...
interface RotateAngleMap {
  [key: number]: number;
}

const rotateAngleMap: RotateAngleMap = {
  6: -180,
  7: -165,
  8: -150,
  9: -142.5,
  10: -135,
  11: -127.5,
  12: -120,
  13: -112.5,
  14: -105,
  15: -97.5,
  16: -90,
  17: -80,
  18: -70,
  19: -62,
  20: -54,
  21: -46,
  22: -38,
  23: -30,
  0: -20,
  1: -10,
  2: 0
};

const defaultRotateAngle = 0;

function getRotateAngle(nowHour : number) {
  if (nowHour < 0 || nowHour > 24) {
    console.warn("Invalid nowHour value. Using default rotate angle.");
    return defaultRotateAngle;
  }

  const angle = rotateAngleMap[nowHour] || defaultRotateAngle;
  
  return angle;
}

var rotateAngle = ref(getRotateAngle(nowHour));
// 根据当前时间旋转指针，part end...

// 每分钟刷新一次时间盘，part start...
const intervalId = setInterval(() => {

    let newDate = new Date()
    let newYear = newDate.getFullYear()
    let newMonth = newDate.getMonth() + 1
    let newDay = newDate.getDate()
    let newHour = newDate.getHours()
    let newMinutes = newDate.getMinutes()

    nowDateStr.value = newMonth + '月' + newDay + '日' 
    
    let newHalfTip = newHour < 12 ? '上午' : '下午'
    nowTimeStr.value = newHalfTip + ' ' + newHour.toString() + ':' + newMinutes.toString().padStart(2, '0')
    rotateAngle.value = getRotateAngle(newHour)

}, 1000*60);

onUnmounted(() => {
    clearInterval(intervalId);
});
// 每分钟刷新一次时间盘，part end...
</script>

<template>
    <div class="time-disk">
        <el-image :src="timeDiskImgUrl" class="time-disk-image">
            <template #error>
                <div></div>
            </template>
        </el-image>
        <el-image :src="timePointerImgUrl" :style="{transform:`rotate(${rotateAngle}deg)`}" class="time-pointer-image">
            <template #error>
                <div></div>
            </template>
        </el-image>
        <el-image :src="timeSeasonImgUrl" class="time-season-image">
            <template #error>
                <div></div>
            </template>
        </el-image>
        <el-image :src="timeWeatherImgUrl" class="time-weather-image">
            <template #error>
                <div></div>
            </template>
        </el-image>
        <el-text class="date-text">
            {{ nowDateStr }}
        </el-text>
        <el-text class="time-text">
            {{ nowTimeStr }}
        </el-text>
    </div>
</template>

<style lang="scss" scoped>

.time-disk {
    position: relative;
    height: 61px;
    &-image {
        height: 61px;
    }
}
.time-pointer-image {
    position: absolute;
    right: 68px;
    top: 6px;
    height: 24px;
    transform-origin: bottom;
}
.time-season-image {
    position: absolute;
    right: 9px;
    top: 23px;
    height: 13px;
}
.time-weather-image {
    position: absolute;
    right: 46px;
    top: 23px;
    height: 13px;
}
.date-text {
    position: absolute;
    font-size: 14px;
    right: 12px;
    top: 3px;
}
.time-text {
    position: absolute;
    font-size: 14px;
    right: 12px;
    top: 39px;
}
</style>