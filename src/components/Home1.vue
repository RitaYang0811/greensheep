<template>
  <!-- 第一部分：依依Rita製作 -->
  <!-- 背景Banner區域 -->
  <div class="bg-banner position-relative">
    <!-- 首圖背景色塊 -->
    <div class="row">
      <!-- 左側色塊 -->
      <div class="bg-left-stripe col-6 position-absolute bg-size-cover d-none d-md-block">
        <img src="../assets/images/img-banner-left-stripe.png" alt="背景左側色塊" />
      </div>
      <!-- 右側色塊 -->
      <div class="bg-right-stripe col-6 position-absolute bg-size-cover d-none d-md-block">
        <img src="../assets/images/img-banner-right-stripe.png" alt="" />
      </div>
    </div>
    <!-- 首圖背景圖片 -->
    <div class="container" style="margin-top: -64px">
      <div class="row justify-content-between position-relative">
        <!-- 首圖背景左側圖片 -->
        <div class="bg-left-pic col-lg-2 position-absolute bg-size-cover d-none d-lg-block">
          <img src="../assets/images/img-banner-left.png" alt="背景左側圖片" />
        </div>
        <!-- 首圖桌面背景主要圖片 -->
        <div
          class="bg-main-pic col-6 col-md-9 col-lg-6 position-absolute bg-size-cover start-50 translate-middle-x d-none d-md-block"
        >
          <img src="../assets/images/img-banner-main.png" alt="背景主要圖片" />
        </div>
        <!-- 首圖背景右側圖片 -->
        <div
          class="bg-right-pic col-3 col-md-4 col-lg-3 position-absolute bg-size-cover d-none d-md-block align-items-end"
        >
          <span class="banner-deco-dot d-md-block ms-auto"></span>
          <span class="d-md-block font-nosc-playfair position-relative text-primary mb-4 text-end"
            >Best Selling Design Jewelry</span
          >
          <img
            class="d-block ms-auto"
            src="../assets/images/img-banner-right.png"
            alt="背景右側圖片"
          />
        </div>
        <!-- 手機版：背景主要圖片 -->
        <div class="bg-main-pic-mobile text-center d-md-none gx-0">
          <!-- <img src="../assets/images/img-banner-mobile.png" alt="背景主要圖片" /> -->
          <div class="container">
            <!-- 手機版：標題後半圓弧型 -->
            <div class="bg-banner-blur position-absolute"></div>
            <!-- 手機版：Banner標題＋社群icon -->
            <div
              class="banner-content row justify-content-between align-items-end mb-8"
              style="padding-top: 543px; padding-bottom: 40px"
            >
              <div
                class="col-lg-5 d-flex flex-column justify-content-start align-items-start gap-5"
              >
                <h2 class="banner-title h1 text-start text-dark z-1">
                  <!-- <div data-aos="fade-right" data-aos-duration="2000"> -->
                  Discover your<br />
                  <!-- </div> -->
                  <!-- <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="400"
                > -->
                  Unique Elegance
                  <!-- </div> -->
                </h2>
                <h2
                  class="h4 text-primary"
                  data-aos="fade-right"
                  data-aos-duration="1300"
                  data-aos-offset="50"
                >
                  在珠寶中尋覓你獨特優雅之美
                </h2>
                <button
                  class="bg-transparent border-0"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-offset="50"
                >
                  <a class="custom-btn custom-btn-primary" href="2-1.productPage.html">SHOP NOW</a>
                </button>
              </div>
              <!-- 社群icon -->
              <div class="banner-icon col-lg-6 d-none d-lg-flex justify-content-end border-bottom">
                <a href="#" class="mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2321_3123)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M33 23.0263C33 19.152 28.9625 16 24 16C19.0377 16 15 19.152 15 23.0263C15 26.4994 18.2019 29.4086 22.527 29.9589C22.8199 30.0196 23.2188 30.1451 23.3198 30.386C23.4106 30.6047 23.3793 30.9474 23.3488 31.1685C23.3488 31.1685 23.2436 31.7796 23.2204 31.91C23.1814 32.1288 23.0395 32.7659 24 32.3767C24.9608 31.9874 29.1828 29.4404 31.071 27.3494C32.3754 25.9736 33 24.577 33 23.0263ZM18.4146 25.1339C18.1861 25.1339 18 24.9408 18 24.703V21.4397C18 21.2022 18.2116 21.0089 18.48 21.0089C18.7484 21.0089 18.9 21.2006 18.9 21.4397V24.2724H19.9854C20.2143 24.2724 20.4 24.4657 20.4 24.703C20.4 24.9408 20.2143 25.1339 19.9854 25.1339H18.4146ZM22.2 24.703C22.2 24.9408 21.9981 25.1339 21.7501 25.1339C21.5019 25.1339 21.3 24.9408 21.3 24.703V21.4397C21.3 21.2022 21.5019 21.0089 21.7501 21.0089C21.9981 21.0089 22.2 21.2022 22.2 21.4397V24.703ZM26.7 24.703C26.7 24.889 26.5717 25.0532 26.3797 25.1116C26.3316 25.1265 26.2813 25.1339 26.2309 25.1339C26.0849 25.1339 25.9449 25.0696 25.8566 24.9616L24.0372 22.6842V24.703C24.0372 24.9408 23.8272 25.1339 23.5687 25.1339C23.3103 25.1339 23.1 24.9408 23.1 24.703V21.4397C23.1 21.2541 23.2288 21.0899 23.4203 21.0312C23.4686 21.0162 23.5187 21.0089 23.5691 21.0089C23.7153 21.0089 23.8554 21.0731 23.9431 21.1812L25.7631 23.4587V21.4397C25.7631 21.2022 25.9735 21.0089 26.2316 21.0089C26.4902 21.0089 26.7 21.2022 26.7 21.4397V24.703ZM29.5853 22.6407C29.8142 22.6407 30 22.8339 30 23.0715C30 23.3088 29.8142 23.502 29.5853 23.502H28.4294V24.2724H29.5853C29.8138 24.2724 30 24.4657 30 24.703C30 24.9408 29.8138 25.1339 29.5853 25.1339H28.0145C27.7863 25.1339 27.6 24.9408 27.6 24.703V23.0726V23.0715V21.4397C27.6 21.2022 27.7859 21.0089 28.0145 21.0089H29.5853C29.8142 21.0089 30 21.2022 30 21.4397C30 21.6772 29.8142 21.8702 29.5853 21.8702H28.4294V22.6407H29.5853Z"
                        fill="#566B5A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2321_3123">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#" class="mb-1"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2321_3127)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M25.5983 24.9736H28.1413L28.5219 22.0404H25.5983V20.1677C25.5983 19.3184 25.8357 18.7397 27.0615 18.7397L28.625 18.739V16.1156C28.3545 16.0799 27.4265 16 26.3467 16C24.0926 16 22.5494 17.3669 22.5494 19.8773V22.0404H20V24.9736H22.5494V32.5H25.5983V24.9736Z"
                        fill="#566B5A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2321_3127">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs></svg
                ></a>
                <a href="#" class="mb-1"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2321_3119)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.0625 16C21.771 16 21.4837 16.0097 20.5837 16.0508C19.6857 16.0917 19.0723 16.2344 18.5356 16.443C17.9808 16.6586 17.5102 16.9471 17.0411 17.4161C16.5721 17.8852 16.2836 18.3558 16.068 18.9106C15.8594 19.4473 15.7167 20.0607 15.6758 20.9587C15.6347 21.8587 15.625 22.146 15.625 24.4375C15.625 26.729 15.6347 27.0163 15.6758 27.9163C15.7167 28.8143 15.8594 29.4277 16.068 29.9644C16.2836 30.5192 16.5721 30.9898 17.0411 31.4589C17.5102 31.9279 17.9808 32.2164 18.5356 32.4321C19.0723 32.6406 19.6857 32.7833 20.5837 32.8242C21.4837 32.8653 21.771 32.875 24.0625 32.875C26.354 32.875 26.6413 32.8653 27.5413 32.8242C28.4393 32.7833 29.0527 32.6406 29.5894 32.4321C30.1442 32.2164 30.6148 31.9279 31.0839 31.4589C31.5529 30.9898 31.8414 30.5192 32.0571 29.9644C32.2656 29.4277 32.4083 28.8143 32.4492 27.9163C32.4903 27.0163 32.5 26.729 32.5 24.4375C32.5 22.146 32.4903 21.8587 32.4492 20.9587C32.4083 20.0607 32.2656 19.4473 32.0571 18.9106C31.8414 18.3558 31.5529 17.8852 31.0839 17.4161C30.6148 16.9471 30.1442 16.6586 29.5894 16.443C29.0527 16.2344 28.4393 16.0917 27.5413 16.0508C26.6413 16.0097 26.354 16 24.0625 16ZM24.0625 17.5203C26.3154 17.5203 26.5823 17.5289 27.472 17.5695C28.2946 17.607 28.7414 17.7444 29.0387 17.86C29.4325 18.013 29.7136 18.1959 30.0088 18.4912C30.3041 18.7864 30.487 19.0675 30.64 19.4613C30.7556 19.7586 30.893 20.2054 30.9305 21.028C30.9711 21.9177 30.9797 22.1846 30.9797 24.4375C30.9797 26.6904 30.9711 26.9573 30.9305 27.847C30.893 28.6696 30.7556 29.1164 30.64 29.4137C30.487 29.8075 30.3041 30.0886 30.0088 30.3838C29.7136 30.6791 29.4325 30.862 29.0387 31.015C28.7414 31.1306 28.2946 31.268 27.472 31.3055C26.5824 31.3461 26.3156 31.3547 24.0625 31.3547C21.8094 31.3547 21.5426 31.3461 20.653 31.3055C19.8304 31.268 19.3836 31.1306 19.0863 31.015C18.6925 30.862 18.4114 30.6791 18.1162 30.3838C17.8209 30.0886 17.638 29.8075 17.485 29.4137C17.3694 29.1164 17.232 28.6696 17.1945 27.847C17.1539 26.9573 17.1453 26.6904 17.1453 24.4375C17.1453 22.1846 17.1539 21.9177 17.1945 21.028C17.232 20.2054 17.3694 19.7586 17.485 19.4613C17.638 19.0675 17.8209 18.7864 18.1162 18.4912C18.4114 18.1959 18.6925 18.013 19.0863 17.86C19.3836 17.7444 19.8304 17.607 20.653 17.5695C21.5427 17.5289 21.8096 17.5203 24.0625 17.5203ZM24.0625 20.1047C21.6696 20.1047 19.7297 22.0446 19.7297 24.4375C19.7297 26.8304 21.6696 28.7703 24.0625 28.7703C26.4554 28.7703 28.3953 26.8304 28.3953 24.4375C28.3953 22.0446 26.4554 20.1047 24.0625 20.1047ZM24.0625 27.25C22.5092 27.25 21.25 25.9908 21.25 24.4375C21.25 22.8842 22.5092 21.625 24.0625 21.625C25.6158 21.625 26.875 22.8842 26.875 24.4375C26.875 25.9908 25.6158 27.25 24.0625 27.25ZM29.579 19.9336C29.579 19.3744 29.1256 18.921 28.5664 18.921C28.0073 18.921 27.554 19.3744 27.554 19.9336C27.554 20.4927 28.0073 20.946 28.5664 20.946C29.1256 20.946 29.579 20.4927 29.579 19.9336Z"
                        fill="#566B5A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2321_3119">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 標題後半圓弧型 -->
      <div class="bg-banner-blur position-absolute d-none d-md-flex"></div>
      <!-- Banner標題＋社群icon -->
      <div class="banner-content row justify-content-between align-items-end mb-8 d-none d-md-flex">
        <div class="col-lg-5 d-flex flex-column justify-content-start align-items-start gap-5">
          <h2 class="banner-title h1 text-start text-dark">
            <div data-aos="fade-right" data-aos-duration="2000">Discover your</div>
            <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400">
              Unique Elegance
            </div>
          </h2>
          <h2
            class="h4 text-primary"
            data-aos="fade-right"
            data-aos-duration="2300"
            data-aos-delay="450"
            data-aos-offset="50"
          >
            在珠寶中尋覓你獨特優雅之美
          </h2>
          <button
            class="bg-transparent border-0"
            data-aos="fade-right"
            data-aos-duration="2500"
            data-aos-delay="500"
            data-aos-offset="50"
          >
            <a class="custom-btn custom-btn-primary" href="2-1.productPage.html">SHOP NOW</a>
          </button>
        </div>
        <!-- 社群icon -->
        <div
          class="banner-icon col-lg-6 d-none d-lg-flex justify-content-end border-bottom border-greyD4"
          style="z-index: 1"
        >
          <a href="#" class="mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g clip-path="url(#clip0_2321_3123)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33 23.0263C33 19.152 28.9625 16 24 16C19.0377 16 15 19.152 15 23.0263C15 26.4994 18.2019 29.4086 22.527 29.9589C22.8199 30.0196 23.2188 30.1451 23.3198 30.386C23.4106 30.6047 23.3793 30.9474 23.3488 31.1685C23.3488 31.1685 23.2436 31.7796 23.2204 31.91C23.1814 32.1288 23.0395 32.7659 24 32.3767C24.9608 31.9874 29.1828 29.4404 31.071 27.3494C32.3754 25.9736 33 24.577 33 23.0263ZM18.4146 25.1339C18.1861 25.1339 18 24.9408 18 24.703V21.4397C18 21.2022 18.2116 21.0089 18.48 21.0089C18.7484 21.0089 18.9 21.2006 18.9 21.4397V24.2724H19.9854C20.2143 24.2724 20.4 24.4657 20.4 24.703C20.4 24.9408 20.2143 25.1339 19.9854 25.1339H18.4146ZM22.2 24.703C22.2 24.9408 21.9981 25.1339 21.7501 25.1339C21.5019 25.1339 21.3 24.9408 21.3 24.703V21.4397C21.3 21.2022 21.5019 21.0089 21.7501 21.0089C21.9981 21.0089 22.2 21.2022 22.2 21.4397V24.703ZM26.7 24.703C26.7 24.889 26.5717 25.0532 26.3797 25.1116C26.3316 25.1265 26.2813 25.1339 26.2309 25.1339C26.0849 25.1339 25.9449 25.0696 25.8566 24.9616L24.0372 22.6842V24.703C24.0372 24.9408 23.8272 25.1339 23.5687 25.1339C23.3103 25.1339 23.1 24.9408 23.1 24.703V21.4397C23.1 21.2541 23.2288 21.0899 23.4203 21.0312C23.4686 21.0162 23.5187 21.0089 23.5691 21.0089C23.7153 21.0089 23.8554 21.0731 23.9431 21.1812L25.7631 23.4587V21.4397C25.7631 21.2022 25.9735 21.0089 26.2316 21.0089C26.4902 21.0089 26.7 21.2022 26.7 21.4397V24.703ZM29.5853 22.6407C29.8142 22.6407 30 22.8339 30 23.0715C30 23.3088 29.8142 23.502 29.5853 23.502H28.4294V24.2724H29.5853C29.8138 24.2724 30 24.4657 30 24.703C30 24.9408 29.8138 25.1339 29.5853 25.1339H28.0145C27.7863 25.1339 27.6 24.9408 27.6 24.703V23.0726V23.0715V21.4397C27.6 21.2022 27.7859 21.0089 28.0145 21.0089H29.5853C29.8142 21.0089 30 21.2022 30 21.4397C30 21.6772 29.8142 21.8702 29.5853 21.8702H28.4294V22.6407H29.5853Z"
                  fill="#566B5A"
                />
              </g>
              <defs>
                <clipPath id="clip0_2321_3123">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="#" class="mb-1"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g clip-path="url(#clip0_2321_3127)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.5983 24.9736H28.1413L28.5219 22.0404H25.5983V20.1677C25.5983 19.3184 25.8357 18.7397 27.0615 18.7397L28.625 18.739V16.1156C28.3545 16.0799 27.4265 16 26.3467 16C24.0926 16 22.5494 17.3669 22.5494 19.8773V22.0404H20V24.9736H22.5494V32.5H25.5983V24.9736Z"
                  fill="#566B5A"
                />
              </g>
              <defs>
                <clipPath id="clip0_2321_3127">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs></svg
          ></a>
          <a href="#" class="mb-1"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g clip-path="url(#clip0_2321_3119)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.0625 16C21.771 16 21.4837 16.0097 20.5837 16.0508C19.6857 16.0917 19.0723 16.2344 18.5356 16.443C17.9808 16.6586 17.5102 16.9471 17.0411 17.4161C16.5721 17.8852 16.2836 18.3558 16.068 18.9106C15.8594 19.4473 15.7167 20.0607 15.6758 20.9587C15.6347 21.8587 15.625 22.146 15.625 24.4375C15.625 26.729 15.6347 27.0163 15.6758 27.9163C15.7167 28.8143 15.8594 29.4277 16.068 29.9644C16.2836 30.5192 16.5721 30.9898 17.0411 31.4589C17.5102 31.9279 17.9808 32.2164 18.5356 32.4321C19.0723 32.6406 19.6857 32.7833 20.5837 32.8242C21.4837 32.8653 21.771 32.875 24.0625 32.875C26.354 32.875 26.6413 32.8653 27.5413 32.8242C28.4393 32.7833 29.0527 32.6406 29.5894 32.4321C30.1442 32.2164 30.6148 31.9279 31.0839 31.4589C31.5529 30.9898 31.8414 30.5192 32.0571 29.9644C32.2656 29.4277 32.4083 28.8143 32.4492 27.9163C32.4903 27.0163 32.5 26.729 32.5 24.4375C32.5 22.146 32.4903 21.8587 32.4492 20.9587C32.4083 20.0607 32.2656 19.4473 32.0571 18.9106C31.8414 18.3558 31.5529 17.8852 31.0839 17.4161C30.6148 16.9471 30.1442 16.6586 29.5894 16.443C29.0527 16.2344 28.4393 16.0917 27.5413 16.0508C26.6413 16.0097 26.354 16 24.0625 16ZM24.0625 17.5203C26.3154 17.5203 26.5823 17.5289 27.472 17.5695C28.2946 17.607 28.7414 17.7444 29.0387 17.86C29.4325 18.013 29.7136 18.1959 30.0088 18.4912C30.3041 18.7864 30.487 19.0675 30.64 19.4613C30.7556 19.7586 30.893 20.2054 30.9305 21.028C30.9711 21.9177 30.9797 22.1846 30.9797 24.4375C30.9797 26.6904 30.9711 26.9573 30.9305 27.847C30.893 28.6696 30.7556 29.1164 30.64 29.4137C30.487 29.8075 30.3041 30.0886 30.0088 30.3838C29.7136 30.6791 29.4325 30.862 29.0387 31.015C28.7414 31.1306 28.2946 31.268 27.472 31.3055C26.5824 31.3461 26.3156 31.3547 24.0625 31.3547C21.8094 31.3547 21.5426 31.3461 20.653 31.3055C19.8304 31.268 19.3836 31.1306 19.0863 31.015C18.6925 30.862 18.4114 30.6791 18.1162 30.3838C17.8209 30.0886 17.638 29.8075 17.485 29.4137C17.3694 29.1164 17.232 28.6696 17.1945 27.847C17.1539 26.9573 17.1453 26.6904 17.1453 24.4375C17.1453 22.1846 17.1539 21.9177 17.1945 21.028C17.232 20.2054 17.3694 19.7586 17.485 19.4613C17.638 19.0675 17.8209 18.7864 18.1162 18.4912C18.4114 18.1959 18.6925 18.013 19.0863 17.86C19.3836 17.7444 19.8304 17.607 20.653 17.5695C21.5427 17.5289 21.8096 17.5203 24.0625 17.5203ZM24.0625 20.1047C21.6696 20.1047 19.7297 22.0446 19.7297 24.4375C19.7297 26.8304 21.6696 28.7703 24.0625 28.7703C26.4554 28.7703 28.3953 26.8304 28.3953 24.4375C28.3953 22.0446 26.4554 20.1047 24.0625 20.1047ZM24.0625 27.25C22.5092 27.25 21.25 25.9908 21.25 24.4375C21.25 22.8842 22.5092 21.625 24.0625 21.625C25.6158 21.625 26.875 22.8842 26.875 24.4375C26.875 25.9908 25.6158 27.25 24.0625 27.25ZM29.579 19.9336C29.579 19.3744 29.1256 18.921 28.5664 18.921C28.0073 18.921 27.554 19.3744 27.554 19.9336C27.554 20.4927 28.0073 20.946 28.5664 20.946C29.1256 20.946 29.579 20.4927 29.579 19.9336Z"
                  fill="#566B5A"
                />
              </g>
              <defs>
                <clipPath id="clip0_2321_3119">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs></svg
          ></a>
        </div>
      </div>
    </div>
  </div>

  <!-- 品牌故事 -->
  <div class="container">
    <div class="about-me row position-relative">
      <h4
        class="h6 fw-bold font-noto-serif text-center col-lg-6 mb-6 position-absolute top-50 start-50 translate-middle d-none d-lg-block"
      >
        在一個充滿無盡想像的世界中，
        <br />
        綠羊 GreenSheep handmade jewelry
        <br class="d-lg-none" />悄然誕生。
      </h4>
      <div class="col-lg-6 mx-auto mt-20 mb-6 mt-lg-100 mb-lg-12">
        <h4 class="h6 fw-bold font-noto-serif text-center col-lg-6 mb-6 d-block d-lg-none z-3">
          在一個充滿無盡想像的世界中，
          <br />
          綠羊 GreenSheep handmade jewelry
          <br />悄然誕生。
        </h4>
        <p class="fs-8 text-dark lh-lg font-noto-serif mb-6 z-3">
          綠羊 GreenSheep
          與潮流無關，他獨樹一幟，我們創造屬於每位佩戴者獨特故事與風采的珠寶，就像每一顆寶石都是無可取代的珍寶，蘊含著原創的設計，閃耀著自信與優雅。我們希望透過這些珠寶，讓每一位佩戴者感受到自身的獨特與美麗，成為這個世界上最獨一無二的存在。
        </p>
        <!-- 品牌精神 -->
        <div class="row justify-content-center z-0 mb-6">
          <span class="col-5 col-lg-4 deco-spin position-relative">
            <img class="deco-circle" src="../assets/images/img-about-font-bg.svg" alt="裝飾圈圈" />

            <div class="position-absolute top-50 start-50 translate-middle">
              <span class="h6 mb-2 opacity-75 d-flex flex-column">自信</span>
              <span class="h5">CONFIDENCE</span>
            </div>
          </span>
          <span class="col-5 col-lg-4 deco-spin position-relative">
            <img class="deco-circle" src="../assets/images/img-about-font-bg.svg" alt="裝飾圈圈" />

            <div class="position-absolute top-50 start-50 translate-middle">
              <span class="h6 mb-2 opacity-75 d-flex flex-column">獨特</span>
              <span class="h5">UNIQUE</span>
            </div>
          </span>
          <span class="col-5 col-lg-4 deco-spin position-relative">
            <img class="deco-circle" src="../assets/images/img-about-font-bg.svg" alt="裝飾圈圈" />

            <div class="position-absolute top-50 start-50 translate-middle">
              <span class="h6 mb-2 opacity-75 d-flex flex-column">優雅</span>
              <span class="h5">ELEGANT</span>
            </div>
          </span>
        </div>

        <button
          class="bg-transparent border-0 mx-auto d-lg-none"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <a class="custom-btn custom-btn-secondary" href="4-1.Story.html">My Story</a>
        </button>
      </div>

      <!-- 金羊裝飾 -->
      <div>
        <img
          class="d-none d-lg-block position-absolute bottom-0 end-10"
          src="../assets/images/GreenSheep.png"
          alt="綠羊裝飾"
          style="width: 155px; height: auto"
        />
      </div>
      <!-- 關於品牌左邊長條背景 -->
      <div>
        <!-- <img
        class="bg-long-stripe position-absolute bg-size-cover d-none d-lg-block z-0"
        src="../assets/images/img-about-2.png"
        alt="左邊長條背景"
      /> -->
      </div>
      <!-- 關於品牌左邊圖片 -->
      <div
        class="bg-image-left position-absolute bg-size-cover d-none d-lg-block"
        data-aos="fade-right"
        data-aos-duration="2000"
      ></div>
      <!-- 關於品牌右邊方形背景 -->
      <div class="bg-square-stripe position-absolute bg-size-cover d-none d-lg-block"></div>
      <!-- 關於品牌右邊圖片 -->
      <div
        class="bg-image-right position-absolute bg-size-cover d-none d-lg-block"
        data-aos="fade-left"
        data-aos-duration="2000"
      ></div>
    </div>
  </div>
</template>

<script setup lang="js" name="Home1"></script>

<style></style>
s
