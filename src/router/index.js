import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Customers from "../views/Customers.vue";
import CustomerDetail from "../views/CustomerDetail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/customers",
            name: "customers",
            component: Customers
        },
        {
            path: "/customers/:id", // L'id és dinàmic
            name: "customer-detail",
            component: CustomerDetail,
            props: true // Això permet que l'id arribi com a prop al component 
        }
    ]
})

export default router;
