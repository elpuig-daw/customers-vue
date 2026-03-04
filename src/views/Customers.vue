<script setup>
import CustomerCard from '../components/CustomerCard.vue';
import CustomerForm from '../components/CustomerForm.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import { useCustomerStore } from '../stores/customer';
import { onMounted } from 'vue';

const customerStore = useCustomerStore();

onMounted(async () => {
    await customerStore.getCustomers();
    console.log("Dades rebudes:", customerStore.customers);
});

</script>

<template>
    <HeaderComponent />
    <section id="customers-page">
        <CustomerForm />
        <h2 v-if="customerStore.loading">Carregant...</h2>
        <h2 v-else-if="customerStore.error">Alguna cosa ha fallat</h2>
        <ul v-else class="customer-list">
            <li v-for="customer in customerStore.customers" :key="customer.id">
                <CustomerCard :customer="customer" />
            </li>
        </ul>
    </section>
    

</template>

<style>
.customer-list {
    list-style: none;     /* Treu els punts del <li> */
    padding: 0;
    display: grid;        /* Activa la graella */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Màgia: es fa sol segons l'amplada */
    gap: 1.5rem;          /* Espai entre cards */
}

/* Nou estil per donar aire al formulari */
.form-section {
    margin-bottom: 3rem;
    padding: 1.5rem;
    background-color: #f9f9f9;
    border-radius: 12px;
    border: 1px solid #eee;
}

#customers-page {
    padding: 2rem;
}

</style>