<script setup>
</script>

<template>
    <header class="header">
        <div class="header-inner">
            <h1 class="title">Customers Page</h1>
            <nav aria-label="Main navigation">
                <ul class="nav-list">
                    <li>
                        <router-link class="link" to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="/customers">Customers</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

</template>

<style scoped>
.header {
    --header-bg: #0b1324;
    --header-panel: #121d34;
    --header-text: #ebeff8;
    --header-muted: #b5bfd2;
    --header-accent: #34d399;

    background: linear-gradient(135deg, #0b1324 0%, #0f1a2f 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(3, 7, 18, 0.35);
    color: var(--header-text);
    padding: 1rem 1.25rem;
}

.header-inner {
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 0 auto;
    max-width: 960px;
}

.title {
    font-size: clamp(1.1rem, 1rem + 1vw, 1.5rem);
    font-weight: 700;
    letter-spacing: 0.02em;
    margin: 0;
}

.nav-list {
    align-items: center;
    display: flex;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
}

.link {
    border: 1px solid transparent;
    border-radius: 999px;
    color: var(--header-muted);
    display: inline-block;
    font-size: 0.95rem;
    font-weight: 600;
    padding: 0.5rem 0.85rem;
    text-decoration: none;
    transition: color 180ms ease, background-color 180ms ease, border-color 180ms ease,
        transform 180ms ease;
}

.link:hover {
    background-color: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.14);
    color: var(--header-text);
    transform: translateY(-1px);
}

.link:focus-visible {
    background-color: var(--header-panel);
    border-color: rgba(52, 211, 153, 0.5);
    color: var(--header-text);
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.18);
}

.link.router-link-active,
.link.router-link-exact-active {
    background-color: rgba(52, 211, 153, 0.14);
    border-color: rgba(52, 211, 153, 0.35);
    color: var(--header-text);
}

@media (max-width: 640px) {
    .header {
        padding: 0.9rem;
    }

    .header-inner {
        flex-direction: column;
    }

    .nav-list {
        justify-content: center;
        width: 100%;
    }
}
</style>