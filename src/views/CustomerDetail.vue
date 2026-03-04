<script setup>
import { useRoute } from 'vue-router';
import { useCustomerStore } from '../stores/customer';
import { onMounted, ref } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';


const customerStore = useCustomerStore();
const route = useRoute();
const customer = ref(null);

onMounted(async () => {
    const id = route.params.id; // Agafem l'id de la URL
    console.log("id del customer: ", id);
    // Podem buscar-lo directament al Store si ja els tenim tots carregats
    // customer.value = customerStore.customers.find(c => c.id == id);
    
    // fer un fetch al backend per si l'usuari refresca la pàgina
     customer.value = await customerStore.getCustomerById(id);
});
</script>

<template>
    <HeaderComponent />
    <div v-if="customer" class="detail-container">
        <button @click="$router.back()">⬅️ Torna</button>
        <h1>Detall de {{ customer.firstName }}</h1>
        <div class="info-card">
            <p><strong>ID:</strong> {{ customer.id }}</p>
            <p><strong>Email:</strong> {{ customer.email }}</p>
            <hr>
            <h3>Incidències:</h3>
            <ul>
                <li v-for="inc in customer.incidencies" :key="inc.id">
                    {{ inc.titol }} - <span class="status">{{ inc.estat }}</span>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
.detail-container { 
    padding: 2rem; 
}
.info-card { 
    background: white; 
    padding: 2rem; 
    border-radius: 8px; 
    box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
}
</style>