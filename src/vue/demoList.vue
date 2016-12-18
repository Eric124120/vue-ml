<template>
    <div>
        <router-link v-bind:to="item.toUrl" class="fm-list-item" v-for="item in items">
            <div class="fm-list-content" v-text="item.titleTxt"></div>
            <div class="fm-list-arrow">
                <span class="fm-icon-arrow-right"></span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import '../css/base.scss'
    import '../css/form.scss'

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
                  }
               ]
            }
        }
    }
</script>
