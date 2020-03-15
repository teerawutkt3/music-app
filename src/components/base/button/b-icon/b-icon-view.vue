<template>
    <a @click="click" class="text-info"><i class="fa fa-eye"></i></a>
</template>

<script>
    export default {
        props: {
            click: {
                type: Function,
                default: ()=>{}
            }
        },
    }
</script>

<style>

</style>