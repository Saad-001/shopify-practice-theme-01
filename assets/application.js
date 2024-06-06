// changes product image based on the selected color variant
$(document).ready(function(){
    $(document).on("change", "#variant-id", function(){
        let 
            variant_id = this.value, 
            variant_image = $('.single-product-image[data-variant="'+variant_id+'"]');
        
        variant_image.show().siblings(':visible').hide();
    })
});