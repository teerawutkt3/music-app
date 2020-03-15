<template>
    <b-card>
        <template v-slot:header>
            Music Form
        </template>
        <template v-slot:body>
            <b-form-group>
                <label>ชื่อเพลง</label>
                <b-form-input v-model="music.form.name" size="sm"></b-form-input>
            </b-form-group>
            <b-form-group>
                <label>ความยาว - เวลา</label>
                <b-form-input v-model="music.form.time" size="sm"></b-form-input>
            </b-form-group>
            <b-form-group>
                <label>นักร้อง</label>
                <b-form-input v-model="music.form.singer" size="sm"></b-form-input>
            </b-form-group>
            <b-form-group>
                <label>สังกัด</label>
                <b-form-input v-model="music.form.belong" size="sm"></b-form-input>
            </b-form-group>
            <b-form-group>
                <label>แนวเพลง</label>
                <b-form-input v-model="music.form.type" size="sm"></b-form-input>
            </b-form-group>
            <br>
            <b-save :click="save"/> &nbsp;
            <b-back :click="goBack"/>
        </template>
    </b-card>
</template>

<script>
    import AxiosSerice from '../../common/service/axios-service'
    import router from '../../router/index'
    import {mapActions, mapGetters} from "vuex";

    const axios = new AxiosSerice()
    export default {
        name: "MusicForm",
        methods: {
            ...mapActions({
                setMusic: "music/setMusic"
            }),
            goBack() {
                router.push({path: '/music'})
            },
            save() {
                axios.doPost('/api/music/', this.music.form).then(() => {
                    this.setMusic(this.initForm())
                    router.push({path: '/music'})
                })
            },
            initForm() {
                return {
                    id : 0,
                    type: '',
                    time: '',
                    name: '',
                    singer: '',
                    belong: '',
                    description: '',
                }
            }
        },
        computed: {
            ...mapGetters({
                music: 'music/getMusic',
            })
        }
    }
</script>

<style scoped>

</style>