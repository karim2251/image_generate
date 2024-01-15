<template>
  <!-- <slot>  -->
    <div v-if="!photos.image==''"  id="images" >
      <img :src="photos.image" alt="">
    </div>
    <div v-else class="imageDefault">
      <img src="../assets/People.gif" alt="">
      <p>Ask as you want</p>
    </div>
  <!-- </slot> -->

  
</template>

<script>
export default {
  props:['photos']
}
</script>

<style scoped>
#images img{
max-width: 350px;
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
  height: 100%;
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