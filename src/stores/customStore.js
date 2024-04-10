import { defineStore } from 'pinia'
export default defineStore('customStore', {
  state: () => ({
    gemList: [
      {
        gemMonth: '1月',
        gemChName: '石榴石',
        genEnName: 'Garnet',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768094951.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KUBT41HGgWUbVo6sV5%2BSeJWcn5kq7zgnA%2FH%2BkGPgJnfIeAIFnpxtTT%2Bu%2FgN6yzsa%2F7T18S9JM%2BS76FLvRLO9%2FRVmZGQLeO8uBs%2Fx3d7kK0IsliVm8sJDvUQ88dGI9mlSmqCDGpn9vYpUUS2US2KK13QC%2Fe6dp%2BQYHwnX6P6UHs5UFB%2B7Ttb21TR9qC%2FQmpHXezxF1EMMtNNKNL6lJkYuggP2vbQapeOhZ%2BDRUAC3%2BtnRzS3OEfKAqOAyFwWrnyqEvjqfRn5TnLEuGsKS1JL66XW5ylaxQuY9nVsGJHNL9avaVVME%2FOIfLWfiY%2B%2BWLX1FwIKOEdyBa%2FC%2BmM2tDVe7cA%3D%3D'
      },
      {
        gemMonth: '2月',
        gemChName: '紫水晶',
        genEnName: 'Amethyst',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768150885.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ACvQ6y6sXqM5cSXRoaoZXB0W1wwuVtzb1156w5tpDE1V%2BrZHN4uLY85lm9rCUlUFHcJfgDlEeYnOTtzjtKrGLbQk%2FQJgcgDD%2FzEFxzyuDjdo7QEjy3t4LqP%2BV2UjTIKn8qFBmGvw%2FxJ40xFlo%2BXD4V4VnHxYNKeDp72ckk1S8%2FdCDc1XvKom4LZxpVxamBrMRBX5wji3wFlCDwlkHCCIz5waB5mSonYEHwc53WKyE8i1xdyHCyxXLxC4kZMakGar%2BK8KjGQ4BpP9GX0kS3%2FNLgi2Yq8TLhS32i0H4gk42TfNDGW7SDWaSH8gWE1hP7HTd0iKYPy0SwAikNudtclwiA%3D%3D'
      },
      {
        gemMonth: '3月',
        gemChName: '海藍寶',
        genEnName: 'Aquamarine',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768156526.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MwpQ2eHVSCVEd0orUQ3R8CWJk%2FlQt8%2F5ykRMFjn%2F5HK0kNqOQ3rF2hPKaOLm5joLe8Cw9f%2F%2BR6UG8ZvH%2F7lDEAMqdAyzMq41JrCkJFGnUIrJ3%2BwCdVARBxdjZN28y6uCEoWZ8QIKKW%2BKIcxhZ9sib3SRE08CI8LRQhzKzLff0sPMQeoVth0Ku5xRorXZE61DoEr8Gbs4kmYM08sSu0gQAZiZJ2pZ9I39km3ooCODdIwrc60CB8x%2BpfHPFxTHR7%2FyabZJZhFUyhnYX45rJzyu5Tqamej0XfeRIu9necJvfkzftRdeSS3MMnSuuXpKlu4h5Vy1KPmCk97KAFm0tbzhQg%3D%3D'
      },
      {
        gemMonth: '4月',
        gemChName: '鑽石',
        genEnName: 'Diamond',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768163475.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=k8aSmD0172o2dPTEvsNKfBrHajy1dHAmsLl4QKXDhc1QFSBa1BcN7pmiVQfrEkxSl6Tzeb6KyQTaxabEYI9u1IO059WZpmH8fsStgyAOB4X%2FblpSdc%2FUgOXDE%2BkOZoaueHwrmi68vTS7BISPSWLpsRj9wIs4Dxmh8Uj%2FvtUpiRrgwqZIHTm1yurfSfKCd9sWKLVTRs%2Bo2v%2Fpi9Xp74hIW5TfTAPOmaiv8GfmMSZvk7VpUt7QmxRurXGb6lTfYU8UPFD0bsLLV0Ly7UBlBRvZEo0dFeF4Fx8Me84bWP5APexDpcAQF79WjJuIIElOhBDM4nGJ1gdKOa%2BRTSLxnFH%2Buw%3D%3D'
      },
      {
        gemMonth: '5月',
        gemChName: '祖母綠',
        genEnName: 'Emerald',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768167871.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=d5ynvaoLOc5qFww%2BqmSidqtqh4kyhtvN2tiPQ9dIg%2FY%2BUQGJuAykxno%2FuIKkHqOVzPpuSgAv4OMz0dsVCF04%2FGdEwWHU9hlKUsVFj80zO3PGtk99myjmLUvsOItObbbQp0%2FXutpmp9hz5wtbaiS69KdpRa8%2FtEsf3pqIwHS%2B8VXtOh55m0YPYpuSV9mys3pIMYLgXcOjMcR0cAjO39opzmQ5%2BdgNUdDt9GkPx597n6%2FPorwr34cGyVnk0Ktv%2BoEZPhTsa5GXksRBB0egFIztLV4p1oXsARMMtyTGWcWq%2FHNqhnTXMrAbkSvDEtgAC86nBEKXADGLCClfipZ8ZtGpuw%3D%3D'
      },
      {
        gemMonth: '6月',
        gemChName: '月光石',
        genEnName: 'Moonstone',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768172516.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lGLpr15KHVKmCnwyU5Dd3Lgb%2BrSYeNK0ElWP7W9EM1T6aLmY1C9Xe5ly8E5BxFCIg%2Fz2Iznev6iWBRzHgWdxLyCMtxj%2BCQYaxBSUw9Y4qX%2BPFy%2FVFMyTa2nGU9rjLkXBEXgWzgA%2Fs8OKMR9tVJ%2BLpx8CmzYTfnnRAYFBXZuQ1M0eXGXNCTZXHTwLvZRb6p0XT6WTm7Os2g83WfStY%2FNAj7ETWRmkzU%2BnLmKNzK%2Bmd0qOFahX7PDD3UBcDxDCoOBmLu1%2FXAcexxZ%2FjRF4V2LOtSSntAp0WPeQlDCwWsX70HWr%2BhQLqhehQ%2Ff%2FouvVRRBuYWfRYkAOzOXzT7CuZCYTFA%3D%3D'
      },
      {
        gemMonth: '7月',
        gemChName: '紅寶石',
        genEnName: 'Ruby',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768182147.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RPtwZHNv7i8a6yBjkceWL52zCYxmNQF%2BkneipHXMVoI8j%2By9LJmDRhMFI%2BdZa7K%2BQCnYjpsg5LUdoguSNodUDTVHN%2BgiRixHPFlEJYJGupIRNUkN8FvDKMRr3WWD0toVfmfes6u9dLqZQDP9gRheYrChRgzluy1sEyDQAckMG98YB3POuH5dZmQ25WyYqAJ6UtKs5rb6PKFAZ9E1L78PDDoPOlC67SG3vObga4V8ezjkaDkTUcv9tl1PlMF0f%2Bo8cOcaEPf7%2Bkj1d0QfLw7n%2F5numWukuR47g2bDZgX0PxsfGa794GSrOsoD1ybT58KgQF%2BW8ZtY9iYwyz8nX1gBLw%3D%3D'
      },
      {
        gemMonth: '8月',
        gemChName: '橄欖石',
        genEnName: 'Peridot',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768190065.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=d0mXN1mgklprnHPK9NXqDh%2BCHYUYtOLRF1EcPbSuNpIvDXhn5yDaN2%2FzqVk1inl3vu4HtwpZTIdWHwuiEsBjM4CcH3WMtr%2BlUROWszxCplZHJ9QfAUmNDlETIxVywHYhK5Vv4kfBDlZpwqTuZ7xgb54PItQZKuFlMPl8Qm1IoxIbSYIIE%2BL3dTQnvgzN2NPbkwAhFcDlpe7vdqmgceL0LkGuyScNvVy8zDKKxB20j%2FHs6fPqMSkTN5Fx1pf8xgdrVvnvpi6KXtpk2ejhyKdAj5TJMeGZahlKrazWaaccbA8EgMN9tyRlvL5Bf6xMZMhQvAZq6sYPMk8UjrNeWFnigQ%3D%3D'
      },
      {
        gemMonth: '9月',
        gemChName: '藍寶石',
        genEnName: 'Sapphire',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768199846.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oUvEweYGqnZWMWvM4jBagWoeLjyrSgBNl4DbiH7dytcflfo3MV0SKDEKbjh1oBYGmkIHX3HqfUVxXC4skFxpTT14r9BMoveXCeWRLH1wtbYX%2FwP40%2BYQzpLsSypEvvx0GAA2qmw%2F%2BNiO0EUcZ5FhJjf%2FlgXvBkYajEj7fFNSHtA45vt5cqVe%2BhzLOUcWzVdvJTuHJlV7VQH%2FVnRLR1KwhKUMFqsP%2B6GWcaOdAhuQBIZOYeAqYICOhUNrhZEVf2NBs5k7ZjGyAfuNmWjGLBbVoPOcIqEz3HpvbjRBZDLRNz%2BDcmmSoD0Uxd1QZe1uy0%2BgFg6lBsn8ddzow%2BRlQOGWMQ%3D%3D'
      },
      {
        gemMonth: '10月',
        gemChName: '粉碧璽',
        genEnName: 'Tourmaline',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768215308.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=p5EEiqHuAZ5UrRJSe7kzbBCCzKTeL70fKXPd5o%2Ba7h4FSNa2aD7nW3vXGMmnkLLSfwroa5iPvP0%2Fpj8pcWSeT3gpycyPCXLv9suaPdjrRDVTMJGX8nDGxfych9twf6MwM8sJXmuSwbI8ykxtmXOlWNA3B4JA1myFwABkdPVTXfb7JxYrq%2Bh%2BaOVMOUqdIwmwqb2T4i4mOttTzFvZapt9U1mMqXf8fZI3tfqn5ZVMVtbbHPMfGUbOIM8mm1s7c0ykbOqFDnYjnNRn8YihDyMCYjN1T0kzPnTuja5U650UUNcILSA0lUNG%2FCUC%2FG%2BORpGt5iSWSW9BdyBdsKfB8pGF%2Fg%3D%3D'
      },
      {
        gemMonth: '11月',
        gemChName: '黃水晶',
        genEnName: 'Citrine',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768239646.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RfRs9aKFCjvvWoUXjWw643xhnsKcCHTGNZ9RyjxME8NvVnRx9Ait3MXSxHuRAs%2BaUpGaiqIBC3vZfsEI6Gz9Vm%2FnfjZE8WcTHNqNVoFaY3ugRmgRYRRACmNY1GGk9ccEVOd0ZHy0tU%2BXAcSZXaNcXHMiDSvQiBes6D7uD3oOazcALEteALDOpSUlIUDbBUFuP%2BP1M9f9Z%2BLKW903sIShjN6UfnlhjXXbQ35VZmrMNLPqDMY78krKPFW8gRRaqW%2BsCTuQDyketHvb6Hh90ACiV%2B%2B6uDH5OiogT42O4ImSqhf6rOuXSlqIAX1L8HslpvXZODxXCobhGQHwYPKfQpsqqg%3D%3D'
      },
      {
        gemMonth: '12月',
        gemChName: '坦桑石',
        genEnName: 'Tanzanite',
        gemUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1712768248871.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Pp5LT9zbZokNCZEL%2BDWbuieEd%2FDqqaa8C9NniGnbydBhxe7nh1ebhSQZcAgnHeNPAZrvkgPHoswlJCortKAKjw0%2FwglRuk63vFgTutvGGi%2BMGHsidOiwec3yUIeOjjbrFl4PGFP%2Fg%2BS87lGuNT%2Fud%2FJuy2p7ImydDbwj2ky058cPmQuOATHkgxFcS2MNDabGnQvHoXChifnHzvLzwm8cM%2FKZw6Rw02xOrukYNrXIS3Ta0ia8LW9coMNLtN%2BWnba7kzClflA2hrd%2FM2ksJmSf9SfX1ftzKUE8IeeHkdNn7om7bxtTaQwUpkURl9fKIK9yxxX8svQaZVdHt97w6uBUNQ%3D%3D'
      }
    ]
  })
})
