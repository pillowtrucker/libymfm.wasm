use std::env;

fn main() {
    // export LD_LIBRARY_PATH=$(pwd)/dist
    let dir = env::var("CARGO_MANIFEST_DIR").unwrap();
    println!("cargo:rustc-link-search=native={}/dist", dir);
    println!("cargo:rustc-link-search=native={}/dist/Debug", dir); // windows..
}
