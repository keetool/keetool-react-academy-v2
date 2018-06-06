import vi_VN from "antd/lib/locale-provider/vi_VN";
import en_US from "antd/lib/locale-provider/en_US";
import fr_FR from "antd/lib/locale-provider/fr_FR";

const lang = {
  "vi-vn": vi_VN,
  "en-us": en_US,
  "fr-fr": fr_FR
};

export default key => {
  return lang[key];
};
