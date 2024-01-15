<template>
  <!-- <slot>  -->
  
    <div class="imageDefault">
      <!-- <div > -->
      <img v-if="!photos.image==''" id="images" :src="photos.image" alt="">
    <!-- </div> -->
      <div v-else>
      <img src="../assets/People.gif" alt="">
      <p>Ask as you want</p>
    </div>
    </div>
  <!-- </slot> -->

  
</template>

<script>
export default {
  props:['photos']
}
</script>

<style scoped>
#images{
max-width: 90%;
margin: 5px;
border-radius: 20px;
}
.imageDefault{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;

}
.imageDefault img{
  width: 100%;
  height: 90%;
}
p{
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: -100px;
}

@media screen and (max-width: 790px) {

  p{
    margin-top: -30px;
  font-size: 1.5rem;

  }
  
}
</style>