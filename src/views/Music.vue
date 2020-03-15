<template>
    <div>
        <b-row>
            <b-col cols="12" sm="12" md="6" lg="8" class="mb-2">
                <MusicList />
            </b-col>
            <b-col cols="12" sm="12" md="6" lg="4" class="mb-2">
                <MusicDetail/>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    import MusicList from './music/MusicList'
    import MusicDetail from './music/MusicDetail'
    export default {
        name: "Music",
        components:{
            MusicList,
            MusicDetail
        }
    }
</script>

<style scoped>

</style>