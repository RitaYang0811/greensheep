import { defineStore } from 'pinia'
export default defineStore('customStore', {
  state: () => ({
    gemList: [
      {
        gemMonth: '1月',
        gemChName: '石榴石',
        genEnName: 'Garnet',
        gemUrl: '/greensheep/src/assets/images/1month.png'
      },
      {
        gemMonth: '2月',
        gemChName: '紫水晶',
        genEnName: 'Amethyst',
        gemUrl: '/greensheep/src/assets/images/2month.png'
      },
      {
        gemMonth: '3月',
        gemChName: '海藍寶',
        genEnName: 'Aquamarine',
        gemUrl: '/greensheep/src/assets/images/3month.png'
      },
      {
        gemMonth: '4月',
        gemChName: '鑽石',
        genEnName: 'Diamond',
        gemUrl: '/greensheep/src/assets/images/4month.png'
      },
      {
        gemMonth: '5月',
        gemChName: '祖母綠',
        genEnName: 'Emerald',
        gemUrl: '/greensheep/src/assets/images/5month.png'
      },
      {
        gemMonth: '6月',
        gemChName: '月光石',
        genEnName: 'Moonstone',
        gemUrl: '/greensheep/src/assets/images/6month.png'
      },
      {
        gemMonth: '7月',
        gemChName: '紅寶石',
        genEnName: 'Ruby',
        gemUrl: '/greensheep/src/assets/images/7month.png'
      },
      {
        gemMonth: '8月',
        gemChName: '橄欖石',
        genEnName: 'Peridot',
        gemUrl: '/greensheep/src/assets/images/8month.png'
      },
      {
        gemMonth: '9月',
        gemChName: '藍寶石',
        genEnName: 'Sapphire',
        gemUrl: '/greensheep/src/assets/images/9month.png'
      },
      {
        gemMonth: '10月',
        gemChName: '粉碧璽',
        genEnName: 'Tourmaline',
        gemUrl: '/greensheep/src/assets/images/10month.png'
      },
      {
        gemMonth: '11月',
        gemChName: '黃水晶',
        genEnName: 'Citrine',
        gemUrl: '/greensheep/src/assets/images/11month.png'
      },
      {
        gemMonth: '12月',
        gemChName: '坦桑石',
        genEnName: 'Tanzanite',
        gemUrl: '/greensheep/src/assets/images/12month.png'
      }
    ]
  })
})
