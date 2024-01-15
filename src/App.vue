<template>
  <div class="container">
    <div class="title">
      <p>Image-Generate.</p>
    </div>
    <div class="images">
      <Images :photos="images"></Images>
    </div>
    <div class="send">
      <input type="text" ref="text" v-model="text" placeholder="Ask as you want">
      <button :disabled="disabled" @click="generate" ref="sendbtn">
        <span v-if="!show">Send</span>
        <span v-else><img src="./assets/loadingSend.gif" width="70" height="70" style="margin-top: -15px; margin-left: -10px;" alt=""></span>
      </button>
    </div>
  </div>
</template> 

<script>
import Images from './components/Images.vue';
export default {
  components:{
    Images
  },
  data(){
    return{
      disabled:true,
      text:'',
      show:false,
      images:""
      // images:[{image:"src/assets/p.png"},{image:"src/assets/p.png"},{image:"src/assets/p.png"},{image:"src/assets/p.png"},{image:"src/assets/p.png"}]
    }
  },
  methods:{
    generate(){
      const origintext = this.text;
      this.show = true;
      this.text = '';
      this.$refs.text.focus();
      try{
        const apikey="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";
        const fetchoptions={
          method:"POST",
          headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey}`
          },
          body:JSON.stringify({
            "prompt": origintext,
          })
        };

         fetch("https://api.openai.com/v1/images/generations", fetchoptions)
         .then(response=>response.json())
         .then(data=>{
            console.log(data);
            console.log(data.data[0].url);
            this.images={image:data.data[0].url}
            this.show = false;
          })
          .catch(err=>console.log(err))
        
        
      }
      catch(err){
        console.log(err);
      }
    }
  },
  mounted(){
    this.$refs.text.addEventListener('keyup',()=>{
      if(this.$refs.text.value.length >0){
        this.disabled = false
      }else{
        this.disabled = true
      }
    })
  }

  
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  position: relative;
}
.container .title {
flex: 1 1 auto;
margin-top: -50px;
height: 50px;

}
.container p {
  font-size: 2rem;
  font-weight: bold;
  color: #3f51b5;
}
.images {
position: sticky;  
top: 70px;
overflow: auto;
z-index: 0;

}

.send {
  display: flex;
  align-self:center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  z-index: 1;
  background-color: #242424;
  width: 100%;
  height: 90px;
}
.send input {
  width: 50%;
  height: 40px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
  outline: none;
  padding: 0 1rem;
  font-size: 1.2rem;
}
.send button {
  width: 8%;
  height: 40px;
  border: none;
  outline: none;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #3f51b5;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
}
.send button:disabled{
  opacity: 0.6;
  cursor: not-allowed;
}

@media screen and (min-width:860px) {

.send input {
  width: 60% !important;
}
.send button {
  width: 8% !important;
}

}

@media screen and (min-width:360px) {

.send input {
  width: 80%;
}
.send button {
  width: 20%;
}

}
</style>