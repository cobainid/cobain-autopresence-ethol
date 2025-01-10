#!/bin/bash

# Rename all .js files to .ts in the current directory and subdirectories, excluding node_modules
find . -type f -name "*.js" ! -path "./node_modules/*" | while read -r file; do
  new_file="${file%.js}.ts"
  mv "$file" "$new_file"
  echo "Renamed: $file -> $new_file"
done
