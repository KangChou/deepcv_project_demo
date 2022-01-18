cmake_minimum_required (VERSION 3.0)
project (cmake_build)

aux_source_directory(${CMAKE_CURRENT_LIST_DIR}/src/hello SOURCE_HELLO)
aux_source_directory(${CMAKE_CURRENT_LIST_DIR}/src/world SOURCE_WORLD)

add_definitions("-g -Wall -std=c++11")

add_executable(main
               ${CMAKE_CURRENT_LIST_DIR}/src/main.cpp
               ${SOURCE_HELLO}
               ${SOURCE_WORLD})
