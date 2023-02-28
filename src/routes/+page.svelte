<script>
    import { onMount } from "svelte";
   
   

</script> 

<div class="home">
    <textarea class="keyboard" placeholder="Kumus+t k?"/>
</div>

<style lang="scss"> 
    .home {
        position: fixed;
        top: 0px; 
        left: 0px;
        width: 100%;
        height: 100%;
    }

    .keyboard {
        width: 960px; 
        height: 70%;
        display: block;
        padding: 20px;
        margin: 100px auto;
        resize: none;
        border: none;
        outline: none;  
        font-size: 50px;
        font-family: 'baybayin-sisil';
        background-color: rgb(234, 234, 234);
        border-radius: 5px;
    }

    @media only screen and (max-width: 960px) {
        .keyboard {
            padding: 0px;
            margin: 50px;
            width: 80%;
        }
    }

</style>