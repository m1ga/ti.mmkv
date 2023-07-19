// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window
const win = Ti.UI.createWindow();
win.open();

import ti_mmkv from 'ti.mmkv';
ti_mmkv.create();

console.log(ti_mmkv.getBool("boolValue", false));
console.log(ti_mmkv.getInt("intValue", 0));
console.log(ti_mmkv.getString("stringValue", "default"));

ti_mmkv.setBool("boolValue", true);
ti_mmkv.setInt("intValue", 1337);
ti_mmkv.setString("stringValue", "mmkv for Titanium SDK");

console.log(ti_mmkv.getBool("boolValue", false));
console.log(ti_mmkv.getInt("intValue", 0));
console.log(ti_mmkv.getString("stringValue", "default"));
