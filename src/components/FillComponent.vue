<script setup>
import { ref } from 'vue';


const emit = defineEmits(["login"]);
const userName = ref("Jordi");

const login = () => {
    emit("login", userName.value);
}
</script>

<template>
    <div class="fill">
        <h2>Component fill</h2>
        <p>Nom d'usuari: {{ userName }}</p>
        <button @click="login">Login</button>

    </div>

</template>
    
<style scoped>
.fill {
    border: 4px solid gray;
}
</style>
