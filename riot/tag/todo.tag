<todo>
    <button a=1 b=2 c=3 onclick={clickHandle}>点击</button>
    <h3 each={item, i in titles}>11{ item }</h3>
    <script>
        var a = 1;
        this.title = '222';
        this.titles = ['b', 'a'];
        this.on('mount', function() {
            console.log('mount');
        });
        this.on('update', function cccc() {
            console.log(this);
        });
        this.clickHandle = function() {
            this.titles = ['b', 'a', 'c'];
        };
    </script>
</todo>