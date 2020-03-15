<template>
    <b-card :header="true" :shadow="'lg'">
        <template v-slot:header>
            Music Detail
        </template>
        <template v-slot:body>
            <label>แนวเพลง : {{music.form.type}}</label><br>
            <label>ชื่เพลง : {{music.form.name}}</label><br>
            <label>ความยาว - เวลา : {{music.form.time}}</label><br>
            <label>นักร้อง : {{music.form.singer}}</label><br>
            <label>สังกัด : {{music.form.belong}}</label><br>
        </template>
    </b-card>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "MusicDetail",
        computed: {
            ...mapGetters({
                music: 'music/getMusic',
            })
        }


    }
</script>

<style scoped>

</style>