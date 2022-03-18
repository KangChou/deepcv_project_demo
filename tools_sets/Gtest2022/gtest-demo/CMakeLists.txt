cmake_minimum_required(VERSION 3.1 FATAL_ERROR)
# find_package找不到gtest的配置文件了，就去下面的路径去找
# set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_SOURCE_DIR}/cmake/")

project(gtest_demo C CXX)
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

file(GLOB_RECURSE SOURCES src/*.cpp)
file(GLOB_RECURSE MAIN_FILE main.cpp)

# 去掉main文件，防止编译test的时候包含两个main入口
list(REMOVE_ITEM SOURCES ${MAIN_FILE})

file(GLOB_RECURSE TEST_SOURCE tests/*.cpp)
include_directories(src)

add_executable(main ${MAIN_FILE} ${SOURCES})


find_package(GTest)
if(GTEST_FOUND)
    if(CMAKE_BUILD_TYPE STREQUAL "Coverage")
        set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS_DEBUG} -fprofile-arcs -ftest-coverage")
    endif(CMAKE_BUILD_TYPE STREQUAL "Coverage")

    # GTEST_INCLUDE_DIRS:/usr/local/include
    message("GTEST_INCLUDE_DIRS:${GTEST_INCLUDE_DIRS}")
    include_directories(${GTEST_INCLUDE_DIRS})
    add_executable(test EXCLUDE_FROM_ALL ${SOURCES} ${TEST_SOURCE})
    
    # GTEST_BOTH_LIBRARIES:/usr/local/lib64/libgtest.a;/usr/local/lib64/libgtest_main.a
    message("GTEST_BOTH_LIBRARIES:${GTEST_BOTH_LIBRARIES}")
    # CMAKE_THREAD_LIBS_INIT:-lpthread, gtest依赖于线程库
    message("CMAKE_THREAD_LIBS_INIT:${CMAKE_THREAD_LIBS_INIT}")

    target_link_libraries(test ${GTEST_BOTH_LIBRARIES} ${CMAKE_THREAD_LIBS_INIT})
endif(GTEST_FOUND)


set(CMAKE_VERBOSE_MAKEFILE OFF)
