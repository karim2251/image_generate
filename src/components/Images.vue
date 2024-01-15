<template>
  <slot> 
    <div class="imageDefault">
      <img src="../assets/People.gif" alt="">
      <p>Ask as you want</p>
    </div>
  </slot>

  
</template>

<script>
export default {

}
</script>

<style scoped>
.imageDefault{
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction:column;

}
img{
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