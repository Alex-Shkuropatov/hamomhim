<template>
  <button class="modal-close" type="button"  >
    <svg  class="close"   viewBox="0 0 38 38"  xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6123 0.793945C8.4616 0.793945 0.204102 9.04411 0.204102 19.1858C0.204102 29.3274 8.4616 37.5776 18.6123 37.5776C28.7629 37.5776 37.0204 29.3274 37.0204 19.1858C37.0204 9.04411 28.7629 0.793945 18.6123 0.793945ZM25.3912 23.7913C25.9909 24.3907 25.9909 25.3592 25.3912 25.9586C25.092 26.2575 24.6994 26.4077 24.3064 26.4077C23.9137 26.4077 23.521 26.2575 23.2219 25.9586L18.6123 21.3528L14.0026 25.9586C13.7035 26.2575 13.3108 26.4077 12.9181 26.4077C12.5252 26.4077 12.1325 26.2575 11.8334 25.9586C11.2337 25.3592 11.2337 24.3907 11.8334 23.7913L16.4433 19.1858L11.8334 14.5802C11.2337 13.9808 11.2337 13.0123 11.8334 12.4129C12.4333 11.8137 13.4027 11.8137 14.0026 12.4129L18.6123 17.0187L23.2219 12.4129C23.8219 11.8137 24.7912 11.8137 25.3912 12.4129C25.9909 13.0123 25.9909 13.9808 25.3912 14.5802L20.7813 19.1858L25.3912 23.7913Z" fill="url(#paint0_linear)"/>
      <defs>
        <linearGradient id="paint0_linear" x1="0.204101" y1="19.1858" x2="37.0204" y2="19.1858" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2871D7"/>
          <stop offset="1" stop-color="#3269B6"/>
        </linearGradient>
      </defs>
    </svg>
  </button>
</template>

<script>
  export default {

    methods:{
      close() {
        console.log('asda');

      },
    }
  }
</script>

<style lang="scss" scoped>
  .modal-close {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 39px;
    height: 31px;
    padding: 0;
    &:hover{
      path {
        fill: #2970D5;
      }
    }
    opacity: 1;
    transition: all 0.1s ease-out;
  }

</style>