# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.22

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/local/bin/cmake

# The command to remove a file.
RM = /usr/local/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /data/spleeter_cmake/Gtest2022/gtest-demo

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /data/spleeter_cmake/Gtest2022/gtest-demo/build

# Include any dependencies generated for this target.
include CMakeFiles/test.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/test.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/test.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/test.dir/flags.make

CMakeFiles/test.dir/src/Ip.cpp.o: CMakeFiles/test.dir/flags.make
CMakeFiles/test.dir/src/Ip.cpp.o: ../src/Ip.cpp
CMakeFiles/test.dir/src/Ip.cpp.o: CMakeFiles/test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/data/spleeter_cmake/Gtest2022/gtest-demo/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/test.dir/src/Ip.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/test.dir/src/Ip.cpp.o -MF CMakeFiles/test.dir/src/Ip.cpp.o.d -o CMakeFiles/test.dir/src/Ip.cpp.o -c /data/spleeter_cmake/Gtest2022/gtest-demo/src/Ip.cpp

CMakeFiles/test.dir/src/Ip.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test.dir/src/Ip.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /data/spleeter_cmake/Gtest2022/gtest-demo/src/Ip.cpp > CMakeFiles/test.dir/src/Ip.cpp.i

CMakeFiles/test.dir/src/Ip.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test.dir/src/Ip.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /data/spleeter_cmake/Gtest2022/gtest-demo/src/Ip.cpp -o CMakeFiles/test.dir/src/Ip.cpp.s

CMakeFiles/test.dir/tests/Ip_tests.cpp.o: CMakeFiles/test.dir/flags.make
CMakeFiles/test.dir/tests/Ip_tests.cpp.o: ../tests/Ip_tests.cpp
CMakeFiles/test.dir/tests/Ip_tests.cpp.o: CMakeFiles/test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/data/spleeter_cmake/Gtest2022/gtest-demo/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object CMakeFiles/test.dir/tests/Ip_tests.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/test.dir/tests/Ip_tests.cpp.o -MF CMakeFiles/test.dir/tests/Ip_tests.cpp.o.d -o CMakeFiles/test.dir/tests/Ip_tests.cpp.o -c /data/spleeter_cmake/Gtest2022/gtest-demo/tests/Ip_tests.cpp

CMakeFiles/test.dir/tests/Ip_tests.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test.dir/tests/Ip_tests.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /data/spleeter_cmake/Gtest2022/gtest-demo/tests/Ip_tests.cpp > CMakeFiles/test.dir/tests/Ip_tests.cpp.i

CMakeFiles/test.dir/tests/Ip_tests.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test.dir/tests/Ip_tests.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /data/spleeter_cmake/Gtest2022/gtest-demo/tests/Ip_tests.cpp -o CMakeFiles/test.dir/tests/Ip_tests.cpp.s

CMakeFiles/test.dir/tests/allTests.cpp.o: CMakeFiles/test.dir/flags.make
CMakeFiles/test.dir/tests/allTests.cpp.o: ../tests/allTests.cpp
CMakeFiles/test.dir/tests/allTests.cpp.o: CMakeFiles/test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/data/spleeter_cmake/Gtest2022/gtest-demo/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object CMakeFiles/test.dir/tests/allTests.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/test.dir/tests/allTests.cpp.o -MF CMakeFiles/test.dir/tests/allTests.cpp.o.d -o CMakeFiles/test.dir/tests/allTests.cpp.o -c /data/spleeter_cmake/Gtest2022/gtest-demo/tests/allTests.cpp

CMakeFiles/test.dir/tests/allTests.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/test.dir/tests/allTests.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /data/spleeter_cmake/Gtest2022/gtest-demo/tests/allTests.cpp > CMakeFiles/test.dir/tests/allTests.cpp.i

CMakeFiles/test.dir/tests/allTests.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/test.dir/tests/allTests.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /data/spleeter_cmake/Gtest2022/gtest-demo/tests/allTests.cpp -o CMakeFiles/test.dir/tests/allTests.cpp.s

# Object files for target test
test_OBJECTS = \
"CMakeFiles/test.dir/src/Ip.cpp.o" \
"CMakeFiles/test.dir/tests/Ip_tests.cpp.o" \
"CMakeFiles/test.dir/tests/allTests.cpp.o"

# External object files for target test
test_EXTERNAL_OBJECTS =

test: CMakeFiles/test.dir/src/Ip.cpp.o
test: CMakeFiles/test.dir/tests/Ip_tests.cpp.o
test: CMakeFiles/test.dir/tests/allTests.cpp.o
test: CMakeFiles/test.dir/build.make
test: /usr/local/lib/libgtest.a
test: /usr/local/lib/libgtest_main.a
test: /usr/local/lib/libgtest.a
test: CMakeFiles/test.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/data/spleeter_cmake/Gtest2022/gtest-demo/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Linking CXX executable test"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/test.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/test.dir/build: test
.PHONY : CMakeFiles/test.dir/build

CMakeFiles/test.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/test.dir/cmake_clean.cmake
.PHONY : CMakeFiles/test.dir/clean

CMakeFiles/test.dir/depend:
	cd /data/spleeter_cmake/Gtest2022/gtest-demo/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /data/spleeter_cmake/Gtest2022/gtest-demo /data/spleeter_cmake/Gtest2022/gtest-demo /data/spleeter_cmake/Gtest2022/gtest-demo/build /data/spleeter_cmake/Gtest2022/gtest-demo/build /data/spleeter_cmake/Gtest2022/gtest-demo/build/CMakeFiles/test.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/test.dir/depend

