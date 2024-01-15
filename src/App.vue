<template>
  <div class="container">
    <div class="title">
      <p>AI Generate</p>
    </div>
    <div class="images">
      <Images>
        <img v-for="(image,index) in images" :key="index" :src="image.image" alt="">
        </Images>
    </div>
    <div class="send">
      <input type="text" ref="text" placeholder="Ask as you want">
      <button :disabled="disabled" ref="sendbtn">Send</button>
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
      // images:[{image:"src/assets/p.png"},{image:"src/assets/p.png"},{image:"src/assets/p.png"},{image:"src/assets/p.png"},{image:"src/assets/p.png"}]
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
.images img{
max-width: 350px;
margin: 5px;
border-radius: 20px;
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