<template>
    <div class="container mt-4">
        <h2>Add Inventory Item</h2>
        <form @submit.prevent="addItem">
            <div class="form-group">
                <label for="name">Item Name</label>
                <input type="text" id="name" v-model="name" class="form-control" required />
            </div>
            <div class="form-group">
                <label for="quantity">Quantity</label>
                <input type="number" id="quantity" v-model="quantity" class="form-control" required />
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" id="price" v-model="price" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary mt-2">Add Item</button>
        </form>
    </div>
</template>

<script>
import { gql } from 'apollo-boost';
import { useMutation } from '@vue/apollo-composable';

const ADD_INVENTORY_ITEM = gql`
  mutation AddInventoryItem($name: String!, $quantity: Int!, $price: Float!) {
    addInventoryItem(name: $name, quantity: $quantity, price: $price) {
      id
      name
      quantity
      price
    }
  }
`;

export default {
    name: 'InventoryForm',
    data() {
        return {
            name: '',
            quantity: 0,
            price: 0.0,
        };
    },
    methods: {
        async addItem() {
            const { name, quantity, price } = this;

            try {
                await this.addInventoryItem({ name, quantity, price });
                this.$router.push('/');
            } catch (error) {
                console.error('Error adding inventory item', error);
            }
        },
    },
    setup() {
        const { mutate: addInventoryItem } = useMutation(ADD_INVENTORY_ITEM);

        return { addInventoryItem };
    },
};
</script>
