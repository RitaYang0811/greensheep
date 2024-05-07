<template>
  <SwiperImages>
    <template #firstImage>
      <img src="@/assets/images/IMG_5672.jpg" alt="swiperImage" />
    </template>
    <template #secondImage>
      <img
        src="https://images.unsplash.com/photo-1653903414925-adfc47c69b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="swiperImage"
      />
    </template>
    <template #thirdImage>
      <img
        src="https://images.unsplash.com/photo-1550368566-f9cc32d7392d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="swiperImage"
      />
    </template>
  </SwiperImages>
  <div class="container py-7 py-lg-20" style="min-height: 680px">
    <!--麵包屑-->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-10">
        <li class="breadcrumb-item"><a href="index.html">首頁</a></li>
        <li class="breadcrumb-item active" aria-current="page">常見問題</li>
      </ol>
    </nav>

    <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" data-aos-once="true">
      <div class="row justify-content-center g-0">
        <div class="btn-group border-bottom border-1 border-primary" role="group">
          <button
            type="button"
            class="btn btn-outline-primary col-3 tab-button fs-9 fs-md-7"
            :class="{ active: currentTab === '常見問題' }"
            @click="currentTab = '常見問題'"
          >
            常見問題
          </button>
          <button
            type="button"
            class="btn btn-outline-primary col-3 tab-button fs-9 fs-md-7"
            :class="{ active: currentTab === '購買須知' }"
            @click="currentTab = '購買須知'"
          >
            購買須知
          </button>
          <button
            type="button"
            class="btn btn-outline-primary col-3 tab-button fs-9 fs-md-7"
            :class="{ active: currentTab === '退換政策' }"
            @click="currentTab = '退換政策'"
          >
            退換政策
          </button>
          <button
            type="button"
            class="btn btn-outline-primary col-3 tab-button fs-9 fs-md-7"
            :class="{ active: currentTab === '如何保養' }"
            @click="currentTab = '如何保養'"
          >
            如何保養
          </button>
        </div>
      </div>
      <!--常見問題-->
      <div v-if="currentTab === '常見問題'" class="content">
        <div class="accordion" id="exampleAccordion">
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                可以戴著首飾洗澡嗎？
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#exampleAccordion"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">
                  對於貴金屬、寶石或其他易受損材質的首飾，如黃金、銀飾、寶石，最好避免佩戴洗澡
                  ，水和肥皂會對金屬造成氧化，影響光澤，也可能損害寶石的外觀。
                </p>
                <p class="mb-2">
                  若不小心使首飾接觸水，也不必擔心，輕輕用軟布擦乾即可。平常保養時，Ｋ金產品請使用軟布輕拭，純銀產品請使用附贈的拭銀布擦拭。常常配戴也會因為身體油質而使其光澤，如不需配戴時請收於附贈的夾鏈袋中隔絕空氣以防氧化。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                如何測量自己的戒圍呢？
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#exampleAccordion"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">
                  1. 使用皮尺測量：
                  您可以使用一個稱為皮尺的工具來測量戒指尺寸。將皮尺纏繞手指的根部，輕鬆地繞一圈，確保皮尺不過緊也不過鬆。如果您的尺寸在兩個尺寸之間，可以選擇較大的尺寸，以確保戒指不過緊。
                </p>
                <p class="mb-2">
                  2. 比較現有戒指：
                  如果您已經有一枚適合的戒指，也可以用它來測量尺寸。將您的現有戒指放在一張尺寸表或圓環尺上，找到與戒指內徑最為相符的尺寸。這個方法通常比較容易，但請確保您的現有戒指尺寸與您希望佩戴的戒指相符。
                </p>
                <p class="mb-2">
                  由於戒指尺寸可能因天氣、濕度和時間而有所變化，請選擇在最舒適的狀態下進行測量建議在不同時間和環境條件下多次測量，以確保準確性。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                請問購買時會附什麼？會有包裝嗎？
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#exampleAccordion"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">
                  凡是購買純銀商品，我們均會附上進口拭銀布、防潮夾鏈袋、保證卡，並用品牌經典抽屜盒包裝，如果您有送禮需求，也可以用優惠價格加購品牌絨布禮盒，也可在訂單備註上索取禮物卡。<br />
                </p>
                <p class="mb-2">
                  凡購買K金商品，我們會幫您免費升級品牌絨布禮盒含品牌緞帶，因為K金商品不易氧化，故不再附上拭銀布及防潮袋，平時以乾淨軟布擦拭即可。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--購買須知-->
      <div v-if="currentTab === '購買須知'" class="content">
        <div class="accordion" id="exampleAccordion2">
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                配送及運費
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#exampleAccordion2"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">
                  1. 配送服務： 我們提供全球性的配送服務，以確保您能在世界各地都享受到我們的產品。
                </p>
                <p class="mb-2">
                  2. 運送時間：
                  在確認訂單後，我們會盡快處理您的訂單並安排運送。現貨商品會於3日內寄出，客製及預購商品會於
                  21
                  日內寄出，如有例外請以商品介紹頁中的出貨時間為主。請給我們足夠時間為您準備最完美的作品。
                </p>
                <p class="mb-2">
                  3. 運費：
                  運費會根據目的地和選擇的運送方式而有所不同，結帳時，您將能夠看到運費的詳細信息。目前國內訂單滿
                  NT$ 3,000 免運費，國際運費滿滿 NT$ 12,000 免運費。
                </p>
                <p class="mb-2">
                  4. 追蹤訂單：
                  我們提供訂單追蹤服務，您可以在訂單發貨後使用提供的追蹤號碼來查詢您的訂單狀態。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                關於金屬材質
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#exampleAccordion2"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">
                  綠羊的產品均使用最高品質的 925 純銀、14K 金及 18K
                  金，您可依照商品的顏色、設計及預算做出選擇。如您對特定材質具有過敏反應。我們在商品說明提供關於材質的詳細描述，請在購買前謹慎考慮。
                </p>
                <p class="mb-2">
                  不同的材質需要不同的保養方法，每件商品均會附贈保養小卡，我們提供有關如何保養與清潔的建議，以確保其保持最佳狀態。如仍有任何疑問，也歡迎隨時使用<a
                    href="＃"
                    class="link-underline text-primary"
                  >
                    line 客服</a
                  >，我們會提供您最快速的服務。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                關於寶石
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#exampleAccordion2"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">
                  我們所採用的寶石均為天然寶石，這些寶石閃閃發光是最迷人的大自然產物，所以每顆寶石必定存在需許色差，及少許的天然內含物。我們會為您竭力挑選最高品質的寶石，但每顆寶石均是最獨一無二的，就像每位佩戴者的存在一樣，希望您也能在綠羊的世界的找到跟您最有緣分的那顆寶石。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--退換政策-->
      <div v-if="currentTab === '退換政策'" class="content">
        <div class="accordion" id="exampleAccordion3">
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                退換產品的條件
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#exampleAccordion3"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">
                  我們希望能提供您滿意的購物體驗，我們接受在特定條件下的產品退換貨服務。<br />
                  1. 產品必須在收到商品後的 7 個工作天內申請退換貨;<br />
                  2. 為了確保您的權益，開箱時請全程錄影，申請時請提供開箱影片;
                  <br />3. 商品需處於未佩戴、未損壞、未刻字的狀態。<br />
                  4.
                  退換貨時，請附上全部配件（含完整禮物盒、保固卡、拭銀布、收納袋、附贈產品、優惠加購產品），如缺件視同購買，將無法全額退款。<br />
                  5. 請使用
                  <a href="＃" class="link-underline text-primary">line 客服</a>申請退換貨。
                </p>
                <p class="mb-2 text-danger">
                  請注意！客製設計商品、特殊訂製商品無法進行退換，請理解客製及訂製商品是為您量身定做，您就是他這個世界唯一的主人。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                退換流程
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#exampleAccordion3"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">
                  1. 如需退換貨服務，您可以透過
                  <a href="＃" class="link-underline text-primary">line 客服</a
                  >申請退款，請提供訂單詳細信息、退換原因及全程開箱影片，我們將指導您完成退換的步驟。
                </p>
                <p class="mb-2">
                  2.
                  收到您的退貨後，我們將進行檢查以確保產品符合退換條件。如果產品損壞或不符合退換條件，我們有權利不接受退貨。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                退換期限與相關政策
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#exampleAccordion3"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">
                  請於收到商品後的 7 個工作天內申請退換。<br />
                  一旦我們確認接受退換，您可以選擇退款或換貨。退款將根據退貨產品的支付方式進行退回，換貨將按照您的選擇寄送。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--如何保養-->
      <div v-if="currentTab === '如何保養'" class="content">
        <div class="accordion" id="exampleAccordion4">
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                保固及保養方法
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#exampleAccordion4"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">
                  1.
                  K金商品請避面接近熱源、劇烈溫度變化及接觸化學成分;也請避免猛烈撞擊，運動前請先取下。
                  <br />
                  2. 純銀商品請勿接觸溫泉及硫化物，避免硫化發黑<br />
                  3. 將您的首飾保存在乾燥、不受陽光直射的地方。<br />
                  4. 蛋白石商品請避免劇烈濕度變化，洗澡前請先取下。<br />
                </p>
                <p class="mb-2">
                  建議避免將不同材質的首飾放在一起保存，因為某些金屬和寶石可能相互影響，導致損壞或氧化，最好的方式是將每個首飾單獨放在附贈的夾鏈袋或珠寶盒中，避免相互摩擦及碰撞受損。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                日常保養方法
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#exampleAccordion4"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">
                  1.
                  K金輕珠寶商品請使用乾淨軟布、珠寶專用的清潔布輕輕擦拭首飾去除表面的污垢和油脂。<br />2.
                  純銀商品可使用附贈拭銀布擦拭，收於夾鏈袋中隔絕空氣。請勿接觸溫泉，以免產生硫化反應而變黑。<br />
                </p>
                <p class="mb-2">
                  請避免使用粗糙的材料擦拭，以免刮傷首飾。<br />
                  請勿讓首飾接觸化學品，如香水、化妝品和清潔劑，這些可能會對首飾的材質及寶石造成損害。<br />
                  經常配戴，人體油質可提供保護不易變黑，但請避免接觸過多汗水。<br />
                  如有專業保養需求，您可以諮詢綠羊的
                  <a class="text-primary">line 客服</a>
                  進行維修或調整，以確保您的首飾保持完美狀態。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item no-border">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed fs-6 no-box-shadow text-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                產品保固
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#exampleAccordion4"
            >
              <div class="accordion-body text-start text-grey66 fs-8 lh-lg">
                <p class="mb-2">維修時請憑保固卡與我們聯繫，我們將竭誠為您服務。</p>
                <p class="mb-2">
                  保固期間為購買日起一年內（購買日依保固卡的日期為準），若非人為或外力因素損換，可享免費維修。<br />
                </p>
                <p class="mb-2">
                  正常使用之耗損、人為疏失或不可抗力之自然因素導致壞損，不適用免費維修，需酌收維修材料費及寄送運費。
                </p>
                <p class="mb-2">保固卡經塗抹、修改後即失效，請妥善保管，若遺失述不補發。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SwiperImages from '@/components/SwiperImages.vue'

export default {
  data() {
    return {
      currentTab: '常見問題'
    }
  },
  components: {
    SwiperImages
  }
}
</script>
<style scoped>
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
