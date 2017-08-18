import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "font": "14px \"Lucida Grande\", Helvetica, Arial, sans-serif"
    },
    "a": {
        "color": "#00B7FF"
    },
    "detail": {
        "font": 12,
        "color": "#777"
    }
});