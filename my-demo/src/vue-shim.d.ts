declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var jquery: any;
declare var swiper: any;