/* eslint-disable */

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// ✅ Глобальное объявление Vue Router в TypeScript
import "vue-router";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $router: import("vue-router").Router;
  }
}
