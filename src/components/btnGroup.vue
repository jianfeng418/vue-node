<script>
	import Vue from 'vue'
	import icenterBtns from './icenter/icenterBtns'
	import networkBtns from './network/networkBtns'
	import vmBtns from './vm/vmBtns'
	import sdnBtns from './sdn/sdnBtns'
	import dcBtns from './datacenter/dcBtns'
	import storageBtns from './storage/storageBtns'
	import hostBtns from './hosts/hostBtns'

	export default{
		name:'btnGroup',
		render:function (createElement){
			
			var currentBtns;
			switch (this.$store.state.type){
				case 'icenter':
					currentBtns = icenterBtns;
					break;
				case 'dc':
					currentBtns = dcBtns;
					break;
				case 'vm':
					currentBtns = vmBtns;
					break;
				case 'store':
					currentBtns = storageBtns;
					break;
				case 'host':
					currentBtns = hostBtns;
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
