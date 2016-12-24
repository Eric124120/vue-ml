<template>
    <transition name="msgbox-bounce">
        <div class="ml-dialog" v-show="value">
            <div class="ml-dialog-header">
                <i class="ml-dialog-icon" v-if="icon">
                    <img :src="icon" width="36" height="36">
                </i>
                <h3 class="ml-dialog-title" v-text="title"></h3>
            </div>
            <div class="ml-dialog-body" v-html="content"></div>

            <div class="ml-dialog-footer">
                <button type="button"
                        @click="handleAction('cancelCallback')"
                        :class="[cancelButtonClasses]"
                        v-if="showCancelButton"
                        v-text="cancelButtonText">

                </button>
                <button type="button"
                        @click="handleAction('confirmCallback')"
                        :class="[confirmButtonClasses]"
                        v-if="showConfirmButton"
                        v-text="confirmButtonText">

                </button>
            </div>
        </div>
    </transition>
</template>
<style>
    
</style>
<script>
    import './messagebox.scss'
    
    export default{
        name: "ml-messagebox",

        props: {
            icon: String,
            value: Boolean,
            content: String,
            cancelButtonClass: String,
            confirmButtonClass: String,
            cancelButtonText: {
                type: String,
                default: '取消'
            },
            confirmButtonText: {
                type: String,
                default: '确定'
            },
            title: {
                type: String,
                default: '提示'
            },
            showConfirmButton: {
                type: Boolean,
                default: true
            },
            showCancelButton: {
                type: Boolean,
                default: true
            },
            modal: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            handleAction(action) {
                this.callback(action);
            }
        },
        computed: {
            cancelButtonClasses() {
                let classes = 'ml-dialog-button ' + this.cancelButtonClass;

                return classes;
            },
            confirmButtonClasses() {
                let classes = 'ml-dialog-button ' + this.confirmButtonClass;

                return classes;
            }
        }
    }
</script>
