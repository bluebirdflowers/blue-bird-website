<script>
  import Vue from 'vue'
  import Carousel from 'vue-carousel'
  import Slide  from 'vue-carousel'
  
  const buildSlideMarkup = (count) => {
	let slideMarkup = '';
  for (var i = 1; i <= count; i++) {
  	slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
  }
  return slideMarkup;
};

  new Vue({
    el: '#example',
    components: {
      'carousel': Carousel,
      'slide': Slide,
    },
    template: '<div><carousel :perPageCustom="[[480, 2], [768, 3]]">' + buildSlideMarkup(10) + '</carousel></div>'
  });
</script>