<!--import './title.tag';-->
import './each.tag';
<todo>
    <each-tag></each-tag>
    <div>{title}: {name}</div>
    <!-- layout -->
<!--    <title-tag></title-tag>-->
    <!--<div>-->
        <!--I am Y-->
        <!--<yield>11111<yield/>-->
    <!--</div>-->
    // logic comes here
    let self = this;
    self.on('before-mount', () => {
        myBeforeMount();
    });
    self.on('mount', () => {
        myMount();
    });
    self.on('update', () => {
        myUpdate();
    });
    self.on('updated', () => {
        myUpdated();
    });
    function myBeforeMount() {
        window.necooPush(arguments);
    }
    function myUpdated() {
        window.necooPush(arguments);
    }
    function myUpdate() {
        window.necooPush(arguments);
    }
    function myMount() {
        window.necooPush(arguments);
    }
    function beforeBeforeMount() {
        window.necooPush(arguments);
    }
    beforeBeforeMount();

    self.title = 'Hello world';
</todo>