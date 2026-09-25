# Useful Commands

## Java

Compile a Java package, specifying output and package directories:
```bash
javac -d out_dir src/package_dir/*.java 
```

Example for the output directory `out` and the package `zoo`:
```bash
javac -d out src/zoo/*.java
```

Run a compiled Java package, specifying the compilation output directory, the package name, and the class name:
```bash
java -cp out_dir package.Class
```

Example for the compilation output directory `out`, the package `zoo`, and the class `Main`:
```bash
java -cp out zoo.Main
```
