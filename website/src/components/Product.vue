<template>
    <div class="listing_item_box listing_list_box">
        <div class="dondecomprar_img">
            <img :src="product.images[0]" alt="">
            <a href="listing_details.html" class="overlay_img"></a>
            <div class="overlay_content">
                <ul>
                    <li><a href="#" class="overlay_btn">Mejor Oferta</a></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="listing_item_info">
            <div class="post_info">
                <h3><a href="listing_details.html">{{ product.name }}</a></h3>
                <h4 class="price">{{ product.price[0].price }}</h4>
                <p class="location">{{ product.price[0].location }}</p>
                <ul class="st_rateing">
                    <li><i class="fas fa-star"></i><span>4.5</span></li>
                </ul>
                <!-- a href="#">178</a><span> Reviews</span-->
                <!-- <p class="st_content">Lorem Ipsum is simply dummy text of the printing and settingtyp industry. Standard dummy text ever since the 1500</p> -->
            </div>
            <div class="post_meta">
                <ul>
                    <li><a href="#" class="open_btn">open now</a></li>
                    <li class="icon"><a href="#"><i class="far fa-heart"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
