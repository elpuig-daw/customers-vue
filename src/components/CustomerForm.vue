<script setup>
import { ref } from 'vue';
import { useCustomerStore } from '../stores/customer';

const customerStore = useCustomerStore();

// Objecte inicial buit
const newCustomer = ref({
    firstName: '',
    lastName: '',
    email: ''
});

const handleSubmit = async () => {
    // Validació simple: no enviem si està buit
    if (!newCustomer.value.firstName || !newCustomer.value.email) return;
    
    await customerStore.addCustomer(newCustomer.value);
    // Netegem el formulari després d'enviar
    newCustomer.value = { firstName: '', lastName: '', email: '' };
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="add-form">
        <input v-model="newCustomer.firstName" placeholder="Nom" required>
        <input v-model="newCustomer.lastName" placeholder="Cognom" required>
        <input v-model="newCustomer.email" type="email" placeholder="Email" required>
        <button type="submit">Afegir Client</button>
    </form>
</template>

<style scoped>
/* Un parell de regles per fer-ho net */
.add-form {
    display: flex;
    gap: 10px;
    margin-bottom: 2rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
}
input { padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
button { background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }
</style>