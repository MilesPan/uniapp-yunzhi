"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  Tabbar();
}
const Tabbar = () => "../../components/tabbar.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/yunzhidaquan/app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
