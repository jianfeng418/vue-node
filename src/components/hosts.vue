<template>
	<div id="app" class="ui vertical stripe segment">


        <div class="ui container" style='width:100%;height:100%'>

            <div id="content" class="ui basic segment" style="height:100%">
                <filter-bar :tableNode = 'tableNode'></filter-bar>
                <vuetable ref='vuetable' style='height:calc(100% - 80px)'
                   api-url="https://vuetable.ratiw.net/api/users"
                    :fields="fields"
                    :append-params="moreParams"
                    table-height = '80%' 
                    pagination-path=""
                   
                    @vuetable:pagination-data="onPaginationData"
                    @vuetable:cell-clicked = 'cellClick'
                	
                ><template slot="actions" slot-scope="props">
				    <div class="table-button-container">
				        <button class="btn btn-default" @click="onClickBtn('编辑', props.rowData)"><i class="fa fa-edit"></i> Edit</button>&nbsp;&nbsp;
				        <button class="btn btn-danger" @click="onClickBtn('删除', props.rowData)"><i class="fa fa-remove"></i> Delete</button>&nbsp;&nbsp;
				    </div>
				</template></vuetable>
				 <vuetable-pagination-info ref="paginationInfo"
        			></vuetable-pagination-info>
                <vuetable-pagination ref="pagination"  		@vuetable-pagination:change-page="onChangePage"></vuetable-pagination>

            </div>
        </div>
    </div>
</template>

<script>
	import Vue from 'vue'
	import tabDatas from './datas/tableData.js'
	import vuetable from 'vuetable-2'
	import FilterBar from './commons/vuetables/filterBar'
	import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
	import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'

	export default{
		name:'hosts',
		data(){
			return {
				tableNode:this,
				moreParams:{},
				datas:tabDatas,
				 fields:[{
			          name: '__handle',
			          titleClass: 'center aligned',
			          dataClass: 'center aligned',
			          width:'30px'
			        },
			        {
			          name: '__sequence',
			          title: '#',
			          titleClass: 'center aligned',
			          dataClass: 'right aligned',
			          width:'30px'
			        },
			        {
			          name: '__checkbox',
			          titleClass: 'center aligned',
			          dataClass: 'center aligned',
			          width:'30px'
			        },
			        {
			          name: 'name',
			          sortField: 'name',
			        }, 
			        {
			          name: 'email',
			          sortField: 'email'
			        },
			        {
			          name: 'birthdate',
			          sortField: 'birthdate',
			          titleClass: 'center aligned',
			          dataClass: 'center aligned',
			        },
			        {
			          name: 'nickname',
			          sortField: 'nickname',
			          callback: 'allcap'
			        },
			        {
			          name: 'gender',
			          sortField: 'gender',
			          titleClass: 'center aligned',
			          dataClass: 'center aligned',
			          callback: this.genderLabel
			        },
			        {
			          name: 'salary',
			          sortField: 'salary',
			          titleClass: 'center aligned',
			          dataClass: 'right aligned',
			        },
			        {
			          name: '__slot:actions',
			          title: 'Slot Actions',
			          titleClass: 'center aligned',
			          dataClass: 'center aligned',
			          width:'220px'
			        }],
	            
			}
		},
		methods: {
				genderLabel(val){
					
					if(val === 'M'){
						return '男';

					}else{
						return '女';
					}
				},
				test(){
					alert(22)
				},
				cellClick(){
					if(this.$refs.vuetable.isSelectedRow(arguments[0].id)){
						this.$refs.vuetable.unselectId(arguments[0].id);
					}else{
						this.$refs.vuetable.selectId(arguments[0].id);
					}
					
					//Vue.nextTick( () => this.tableNode.$refs.vuetable.refresh());
					
					

					//this.$refs.vuetable.toggleField(4)
				},

				onClickBtn(text,data){
					this.$v_confirm({
				        title:'确认',
				        width:'300px',
				        height:'200px',
				        content:'确定要' + text + ' ' + data.name +'?'
				      },function(){
				          alert(text + ' ' +data.name);
				      },function(){
				          
				       })
					
				},
	            viewProfile: function(id) {
	                console.log('view profile with id:', id)
	            },
	            onPaginationData (paginationData) {
			      this.$refs.pagination.setPaginationData(paginationData);
			      this.$refs.paginationInfo.setPaginationData(paginationData) ;
			    },
			    onChangePage (page) {
			      this.$refs.vuetable.changePage(page)
			    }
	    },
	  
	    components:{vuetable,VuetablePagination,VuetablePaginationInfo,FilterBar}
	}
</script>

<style>
	.vuetable-body-wrapper{
		overflow-x:hidden;
		height:80%
	}
	.vuetable-body td{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>