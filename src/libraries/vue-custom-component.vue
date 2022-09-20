<script lang="tsx">
import { defineComponent } from 'vue';

export const Bar = defineComponent({ 
  props: ['msg'],
  render() { 
    return <div>{this.msg}</div> 
  }
})
</script>