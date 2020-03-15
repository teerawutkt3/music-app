<template>
    <b-card :header="true" :shadow="'lg'">
        <template v-slot:header>
            Music List
            <b-create :click="goCreate" class="float-right"></b-create>
        </template>
        <template v-slot:body>

            <table id="musicTable" class="table table-sm table-striped table-hover table-bordered nowrap" width="100%" style="font-size: 12px">
                <thead>
                <tr>
                    <th>#</th>
                    <th>แนวเพลง</th>
                    <th>ชือเพลง</th>
                    <th>ความยาว - เวลา</th>
                    <th>นักร้อง</th>
                    <th>สังกัด</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in items" :key="item.id">
                    <td>{{index + 1}}</td>
                    <td>{{item.type}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.time}}</td>
                    <td>{{item.singer}}</td>
                    <td>{{item.belong}}</td>
                    <td>
                        <b-icon-view :click="()=>{findById(item.id)}"/>&nbsp;
                        <b-icon-edit :click="()=>{onUpdate(item.id)}"/>&nbsp;
                        <b-icon-delete :click="()=>{onDelete(item.id)}"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </template>
    </b-card>
</template>

<script>
    import {mapActions} from 'vuex'
    import swal from 'sweetalert'
    import router from '../../router/index'
    import AxiosSerice from '../../common/service/axios-service'
    const axios = new AxiosSerice()
    const $ = require('jquery')
    export default {
        name: "MusicList",
        data(){
            return {
                items: [],
            }
        },
        methods:{
            ...mapActions({
                setMusic: "music/setMusic"
            }),
            onDelete(id){
                swal({
                    title: `ลขข้อมูล`,
                    text: ``,
                    icon: "warning",
                    buttons: true,
                    dangerMode: true
                }).then(willDelete => {
                    if (willDelete) {
                        axios.doDelete(`/api/music/${id}`).then(res=>{
                            console.log("delete : ", res)
                            this.findAllMusic()
                        })
                    }
                });

            },
            onUpdate(id){
                axios.doGet(`/api/music/${id}`).then(res=>{
                    this.setMusic(res.data)
                    router.push({path:'/music/form'})
                })
            },
            goCreate(){
                this.setMusic(this.initForm())
                router.push({path:'/music/form'})
            },
            findAllMusic(){
                axios.doGet('/api/music/').then(res=>{
                    console.log(res.data)
                    this.items = res.data
                    $("#musicTable").dataTable().fnDestroy()

                }).finally(()=>{
                    $("#musicTable").dataTable({ scrollX: true,  "searching": false, paging: false })
                })
            },
            findById(id){
                axios.doGet(`/api/music/${id}`).then(res=>{
                    this.setMusic(res.data)
                })
            },
            initForm(){
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
        created() {
            this.findAllMusic()
        }
    }
</script>

<style scoped>

</style>