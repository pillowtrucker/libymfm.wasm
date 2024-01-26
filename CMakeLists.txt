cmake_minimum_required(VERSION 3.0)

set(CMAKE_SYSTEM_VERSION 1)
set(CMAKE_C_COMPILER           clang)
set(CMAKE_CXX_COMPILER         clang++)

project(ymfm C CXX)
#add_compile_definitions(_HAS_ITERATOR_DEBUGGING=0 _ALLOW_ITERATOR_DEBUG_LEVEL_MISMATCH)
include(./cmake/macros.cmake)

header_directories(
    ./components/ymfm/src
    ./src
)

add_source_files(
    ./components/ymfm/src/ymfm_adpcm.cpp
    ./components/ymfm/src/ymfm_misc.cpp
    ./components/ymfm/src/ymfm_opl.cpp
    ./components/ymfm/src/ymfm_opm.cpp
    ./components/ymfm/src/ymfm_opn.cpp
    ./components/ymfm/src/ymfm_opq.cpp
    ./components/ymfm/src/ymfm_opz.cpp
    ./components/ymfm/src/ymfm_pcm.cpp
    ./components/ymfm/src/ymfm_ssg.cpp
)

add_compile_flags(CXX
    -O3
    -std=c++14
    -fno-exceptions
    -Wno-array-bounds
    -fPIC
    -mbulk-memory
)

add_compile_flags(LD
)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ../dist)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ../dist)
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ../dist)

add_library(
    ymfm
    STATIC
    ${SOURCE_FILES}
    ./src/cpp/ymfmffi.cpp
)
