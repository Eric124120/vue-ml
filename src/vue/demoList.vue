<template>
    <div>
        <router-link v-bind:to="item.toUrl" class="ml-list-item" v-for="item in items">
            <div class="ml-list-content" v-text="item.titleTxt"></div>
            <div class="ml-list-arrow">
                <span class="ml-icon-arrow-right"></span>
            </div>
        </router-link>
    </div>
</template>

<script>

    export default{
        data(){
            return{
               items: [
                  {
                    toUrl: '/toast',
                    titleTxt: 'toast'
                  },
                  {
                    toUrl: '/button',
                    titleTxt: 'button'
                  },
                  {
                    toUrl: '/checkbox',
                    titleTxt: 'checkbox'
                  },
                  {
                    toUrl: '/switch',
                    titleTxt: 'switch'
                  },
                  {
                    toUrl: '/messagebox',
                    titleTxt: 'messagebox'
                  }
               ]
            }
        }
    }
</script>
