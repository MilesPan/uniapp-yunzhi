"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "guidance",
  setup(__props) {
    const currentIndex = common_vendor.ref(0);
    const imgs = common_vendor.ref([
      "../../static/first.webp",
      "../../static/second.webp",
      "../../static/thrid.webp"
    ]);
    const handleNextClick = () => {
      if (currentIndex.value < imgs.value.length - 1) {
        currentIndex.value += 1;
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/index/index"
      });
    };
    const handleChange = ({ detail }) => {
      currentIndex.value = detail.current;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(imgs.value, (item, index, i0) => {
          return {
            a: item,
            b: common_vendor.o(handleNextClick, index),
            c: index
          };
        }),
        b: common_vendor.o(handleChange),
        c: currentIndex.value
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/yunzhidaquan/app/pages/guidance/guidance.vue"]]);
wx.createPage(MiniProgramPage);
