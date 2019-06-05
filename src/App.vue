<template>
  <div>
    <button v-stream:click="handleClick$">Click me</button>
    <h2>{{randomNFacts$}}</h2>
  </div>
</template>

<script>
import { Observable } from "rxjs/Rx";
export default {
  domStreams: ["handleClick$"],
  subscriptions() {
    const randomNFacts$ = this.handleClick$.switchMap(() =>
      Observable.from(
        this.$http.get("https://api.adviceslip.com/advice")
      ).pluck("data", "slip", "advice")
    );
    return { randomNFacts$ };
  }
};
</script>