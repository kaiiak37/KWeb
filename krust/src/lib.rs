

use wasm_bindgen::prelude::*;
 
// 导出一个简单的问候函数
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    return format!("Hello, {}! from Rust 🦀", name)
}
 
// 导出一个计算函数
#[wasm_bindgen]
pub fn add(a: u64, b: u64) -> u64 {
    return a + b
    
}
