<template>
    <section class="currency-area">
      <div class="container-fliud">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div v-animate data-animation="fadeInUp animated" class="rete-list bt_title" data-wow-duration="1.0s">
              <div class="content">
                <div class="con">
                  <h2>
                    <img src="./../assets/frontend/images/icons/1.png" alt="" /><span>Bitcoin</span>
                  </h2>
                  <button v-if="displayedData.bitcoin" class="btn3">{{ displayedData.bitcoin.usd }} $</button>
                  <button v-else class="btn3">loading..</button>
                </div>
              </div>
            </div>
            <div v-animate data-animation="fadeInUp animated" class="rete-list bt_title" data-wow-duration="1.3s">
              <div class="content">
                <div class="con">
                  <h2>
                    <img src="./../assets/frontend/images/icons/2.png" alt="" /><span>Ethereum</span>
                  </h2>
                  <button v-if="displayedData.ethereum" class="btn3">{{ displayedData.ethereum.usd }} $</button>
                  <button v-else class="btn3">loading..</button>
                </div>
              </div>
            </div>
            <div v-animate data-animation="fadeInUp animated" class="rete-list bt_title" data-wow-duration="1.6s">
              <div class="content">
                <div class="con">
                  <h2>
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png" alt="" /><span>DogeCoin</span>
                  </h2>
                  <button v-if="displayedData.dogecoin" class="btn3">{{ displayedData.dogecoin.usd }} $</button>
                  <button v-else class="btn3">loading..</button>
                </div>
              </div>
            </div>
            <div v-animate data-animation="fadeInUp animated" class="rete-list bt_title" data-wow-duration="1.9s">
              <div class="content">
                <div class="con">
                  <h2>
                    <img src="https://cdn-icons-png.flaticon.com/512/12114/12114250.png" alt="" /><span>Tron</span>
                  </h2>
                  <button v-if="displayedData.tron" class="btn3">{{ displayedData.tron.usd }} $</button>
                  <button v-else class="btn3">loading..</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
<script>
import { useCryptoStore } from './../stores/crypto';

export default {
  data() {
    return {
      isLoading: true,
      cryptoData: {},
      displayedData: {},
    };
  },

  async created() {
    const cryptoStore = useCryptoStore();
    
    // Fetch crypto data
    await cryptoStore.getCrypto();
    this.cryptoData = cryptoStore.crypto;
    this.displayedData = this.initializeDisplayedData();

    // Start updating prices
    this.startUpdatingPrices();
  },

  methods: {
    initializeDisplayedData() {
      const displayed = {};
      for (const coin in this.cryptoData) {
        displayed[coin] = { usd: parseFloat(this.cryptoData[coin].usd) };
      }
      return displayed;
    },
    getRandomValue(isLowValue) {
      if (isLowValue) {
        return (Math.random() * (0.001 - 0.0001) + 0.0001).toFixed(4);
      } else {
        return (Math.random() * 10 - 5).toFixed(2);
      }
    },
    startUpdatingPrices() {
      setInterval(() => {
        for (const coin in this.cryptoData) {
          const currentPrice = parseFloat(this.cryptoData[coin].usd);
          const isLowValue = currentPrice < 100;
          const randomValue = parseFloat(this.getRandomValue(isLowValue));
          this.displayedData[coin].usd = (currentPrice + randomValue).toFixed(isLowValue ? 4 : 2);
        }
      }, 1000); // Update every second
    },
  },
};
</script>