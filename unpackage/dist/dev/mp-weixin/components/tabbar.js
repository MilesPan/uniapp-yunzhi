"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    selected: {
      // 当前选中的tab index
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      color: "#333333",
      selectedColor: "#d4237a",
      list: [
        {
          "pagePath": "pages/index/index",
          "text": "头像",
          "iconPath": "https://bj.bcebos.com/txy-dev/txy/main/down.png",
          "selectedIconPath": "https://bj.bcebos.com/txy-dev/txy/main/down.png"
        },
        {
          "pagePath": "pages/bizhi/index",
          "text": "壁纸",
          "iconPath": "https://bj.bcebos.com/txy-dev/txy/main/bizhi.png",
          "selectedIconPath": "https://bj.bcebos.com/txy-dev/txy/main/bizhi.png"
        },
        {
          "pagePath": "pages/bizhi/index",
          "text": "证件照",
          "iconPath": "https://bj.bcebos.com/txy-dev/txy/main/zhenjian.png",
          "selectedIconPath": "https://bj.bcebos.com/txy-dev/txy/main/zhengjian.png"
        },
        {
          "pagePath": "pages/bizhi/index",
          "text": "头像易",
          "iconPath": "https://bj.bcebos.com/txy-dev/txy/main/txy.png",
          "selectedIconPath": "https://bj.bcebos.com/txy-dev/txy/main/txy.png"
        }
      ]
    };
  },
  methods: {
    switchTab(item, index) {
      let url = item.pagePath;
      common_vendor.index.switchTab({
        url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: $props.selected === index ? item.selectedIconPath : item.iconPath,
        b: common_vendor.t(item.text),
        c: $props.selected === index ? $data.selectedColor : $data.color,
        d: index,
        e: common_vendor.o(($event) => $options.switchTab(item, index), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/yunzhidaquan/app/components/tabbar.vue"]]);
wx.createComponent(Component);
