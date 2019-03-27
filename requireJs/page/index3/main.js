require.config({
   baseUrl: './js'
});
require(['1'], function ($1) {
    console.log($1);
    $1.addToCart();
});