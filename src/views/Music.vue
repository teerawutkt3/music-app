<template>
    <div>
        <b-row>
            <b-col cols="8">
                <MusicList />
            </b-col>
            <b-col cols="4">
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