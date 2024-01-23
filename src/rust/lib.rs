// license:BSD-3-Clause
// copyright-holders:Hiromasa Tanaka
//#![no_main]
#[macro_use]
extern crate serde_derive;
extern crate serde;
extern crate serde_json;

pub mod driver;
pub mod sound;
#[cfg(target_arch = "wasm32")]
pub mod wasm;
