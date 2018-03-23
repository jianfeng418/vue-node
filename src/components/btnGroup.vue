<script>
	import Vue from 'vue'
	import networkBtns from './network/networkBtns'
	import vmBtns from './vm/vmBtns'
	import sdnBtns from './sdn/sdnBtns'
	import dcBtns from './datacenter/dcBtns'

	export default{
		name:'btnGroup',
		render:function (createElement){
			console.log(this.$store.state.type)
			var currentBtns;
			switch (this.$store.state.type){
				case 'icenter':
					currentBtns = networkBtns;
					break;
				case 'dc':
					currentBtns = dcBtns;
					break;
				case 'vm':
					currentBtns = vmBtns;
					break;
				case 'sdn':
					currentBtns = sdnBtns;
					break;
				default:
					currentBtns = networkBtns;
			}

			return createElement(currentBtns)
		},
	}
</script>
