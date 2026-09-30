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

## Maven

Run all tests:
```bash
mvn test
```

Clean and run all tests (deletes target directory first):
```bash
mvn clean test
```

Run a specific test class:
```bash
mvn test -Dtest=ExampleTestClass
```

Run a specific test method of a class:
```bash
mvn test -Dtest=ExampleTestClass#exampleTestMethod
```

