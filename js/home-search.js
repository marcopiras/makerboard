$('.form-search').on('submit',function(){return false;});
$('.form-search .btn').on('click', function(e){
    var query = $.trim($(this).prevAll('.search-query').val()).toLowerCase();
    $('figure.snip0078').each(function(){
         var $this = $(this);
         if($this.text().toLowerCase().indexOf(query) === -1)
             $this.closest('figure.snip0078').fadeOut();
        else $this.closest('figure.snip0078').fadeIn();
    });
});

