<template>
	<div></div>
</template>
<script>
	import hosts from './hosts'
	import mains from './mains'
	export default{
		name:'tabsInfo',
		methods:{
			getTabs(resourceType){
				var viewTab;
				switch (resourceType){
					case 'icenter':
						viewTab = [{href:'11',name:'s',view:hosts},{href:'22',name:'is',view:mains},{href:'33',name:'Vb',view:hosts},{href:'44',name:'java',view:mains}];
						break;
					case 'dc':
						viewTab = [{href:'11',name:'svn',view:hosts},{href:'33',name:'Vb',view:mains},{href:'44',name:'java',view:hosts}];
						break;
					default:
						viewTab = [{href:'11',name:'svn',view:hosts},{href:'33',name:'Vb',view:mains}];

				};

				return viewTab;
			}
		}
	}
</script>