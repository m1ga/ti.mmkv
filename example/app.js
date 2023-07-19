const win = Ti.UI.createWindow();
win.open();

import tiMMKV from 'ti.mmkv';
tiMMKV.create();

console.log("-----Read-----");
console.log(tiMMKV.getBool("boolValue", false));
console.log(tiMMKV.getInt("intValue", 0));
console.log(tiMMKV.getString("stringValue", "default"));

console.log("-----Write-----");
tiMMKV.setBool("boolValue", true);
tiMMKV.setInt("intValue", 1337);
tiMMKV.setString("stringValue", "mmkv for Titanium SDK");

console.log("-----Read-----");
console.log(tiMMKV.getBool("boolValue", false));
console.log(tiMMKV.getInt("intValue", 0));
console.log(tiMMKV.getString("stringValue", "default"));
