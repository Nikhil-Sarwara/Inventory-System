<template>
  <div class="container mt-4">
    <h2>Inventory List</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in inventoryItems" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
import { useQuery } from "@vue/apollo-composable";

const GET_INVENTORY_ITEMS = gql`
  query {
    inventoryItems {
      id
      name
      quantity
      price
    }
  }
`;

export default {
  name: "InventoryList",
  setup() {
    const { result, loading, error } = useQuery(GET_INVENTORY_ITEMS);

    return { inventoryItems: result, loading, error };
  },
};
</script>
