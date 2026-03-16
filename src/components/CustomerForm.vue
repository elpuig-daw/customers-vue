<script setup>
import { ref } from 'vue';
import { useCustomerStore } from '../stores/customer';

const customerStore = useCustomerStore();

// Objecte inicial buit
const newCustomer = ref({
    firstName: '',
    lastName: '',
    email: '',
    incidencies: []
});

const handleSubmit = async () => {
    // Validació simple: no enviem si està buit
    if (!newCustomer.value.firstName || !newCustomer.value.email) return;
    
    await customerStore.addCustomer(newCustomer.value);
    // Netegem el formulari després d'enviar
    newCustomer.value = { firstName: '', lastName: '', email: '', incidencies: [] };
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="add-form" aria-label="Afegir client">
        <div class="form-head">
            <h2 class="form-title">Nou client</h2>
            <p class="form-subtitle">Afegeix un contacte nou a la teva base de dades.</p>
        </div>

        <div class="fields-grid">
            <label class="field" for="first-name">
                <span class="field-label">Nom</span>
                <input id="first-name" v-model="newCustomer.firstName" placeholder="Anna" required />
            </label>

            <label class="field" for="last-name">
                <span class="field-label">Cognom</span>
                <input id="last-name" v-model="newCustomer.lastName" placeholder="Serra" required />
            </label>

            <label class="field field-full" for="email">
                <span class="field-label">Email</span>
                <input id="email" v-model="newCustomer.email" type="email" placeholder="anna@empresa.com" required />
            </label>
        </div>

        <div class="actions">
            <button type="submit" class="submit-btn">Afegir client</button>
        </div>
    </form>
</template>

<style scoped>
.add-form {
    --form-bg: #ffffff;
    --form-text: #0f172a;
    --form-muted: #607089;
    --form-border: #d8e0ee;
    --form-soft: #eef3fb;
    --form-accent: #34d399;

    background: linear-gradient(160deg, #ffffff 0%, #fbfdff 100%);
    border: 1px solid var(--form-border);
    border-radius: 14px;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);
    color: var(--form-text);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1.15rem;
}

.form-head {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.form-title {
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0;
}

.form-subtitle {
    color: var(--form-muted);
    font-size: 0.9rem;
    margin: 0;
}

.fields-grid {
    display: grid;
    gap: 0.85rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    min-width: 0;
}

.field-full {
    grid-column: 1 / -1;
}

.field-label {
    color: #6b7892;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}

.field input {
    background-color: #ffffff;
    border: 1px solid var(--form-border);
    border-radius: 10px;
    box-sizing: border-box;
    color: var(--form-text);
    font-size: 0.95rem;
    min-width: 0;
    padding: 0.65rem 0.75rem;
    transition: border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
    width: 100%;
}

.field input::placeholder {
    color: #95a3ba;
}

.field input:hover {
    border-color: #bfcce0;
}

.field input:focus-visible {
    background-color: #fcfffe;
    border-color: rgba(52, 211, 153, 0.7);
    box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.18);
    outline: none;
}

.actions {
    display: flex;
    justify-content: flex-end;
}

.submit-btn {
    background: linear-gradient(145deg, #14b885 0%, #0f9f76 100%);
    border: 1px solid #0f9f76;
    border-radius: 10px;
    color: #ecfdf5;
    cursor: pointer;
    font-size: 0.92rem;
    font-weight: 700;
    padding: 0.65rem 0.95rem;
    transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
}

.submit-btn:hover {
    box-shadow: 0 10px 20px rgba(15, 159, 118, 0.25);
    filter: saturate(1.05);
    transform: translateY(-1px);
}

.submit-btn:focus-visible {
    box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.25);
    outline: none;
}

@media (max-width: 640px) {
    .add-form {
        padding: 1rem;
    }

    .fields-grid {
        grid-template-columns: 1fr;
    }

    .actions {
        justify-content: stretch;
    }

    .submit-btn {
        width: 100%;
    }
}
</style>