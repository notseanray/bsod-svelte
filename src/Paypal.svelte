<script lang="ts">
  // broken for now
  // import { loadScript } from "@paypal/paypal-js";
  import { onMount } from "svelte";
  export let amount: number;
  export let description: string;
  export let postHook: Function | undefined;
  let message = "";
  if (!amount) {
    throw "Missing amount from paypal component!";
  }
  if (!description) {
    throw "Missing description from paypal component!";
  }
  // rust > go

  onMount(async () => {
      const CLIENT_ID = "";
      await loadScript({ "client-id": CLIENT_ID }).then((paypal) => {
        paypal
          .Buttons({
            style: {
              color: "blue",
              shape: "pill",
            },
            createOrder: function (data, actions) {
              message = "";
              // Set up the transaction
              return actions.order.create({
                purchase_units: [
                  {
                    description: description,
                    amount: {
                      currency_code: "USD",
                      value: amount,
                    },
                  },
                ],
              });
            },
            onApprove: function (data, actions) {
              return actions.order.capture().then(function (details) {
                if (postHook) {
                    // hopefully async agnostic, haven't tested
                    postHook().then(() => {})
                }
              });
            },
            onError: function (err) {
                message = "Transaction failed! Please try again."
            },
          })
          .render("#paypal-button-container");
      });
  });
</script>

{message}
<div id="paypal-button-container" />

<style>
  #paypal-button-container {
    margin: 30px 0;
  }
</style>
