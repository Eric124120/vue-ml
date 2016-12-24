<template>
    <transition name="ml-toast-pop">
        <div class="ml-toast" v-if="visible" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
            <i class="ml-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
            <span class="ml-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
        </div>
    </transition>
</template>

<script>
    import './toast.scss'

    export default {
        props: {
            message: String,
            visible: {
                type: Boolean,
                default: false
            },
            modal: {
                type: Boolean,
                default: true
            },
            duration: {
                type: Number,
                default: 3000
            },
            iconClass: {
                type: String,
                default: ''
            },
            autoClose: {
                type: Boolean,
                default: true
            }
        }
    }
</script>
