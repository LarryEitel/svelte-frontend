#! /bin/bash
# Adds the @ts-nocheck to the generated code to ignore the typescript compiler
# https://github.com/OpenAPITools/openapi-generator/issues/1880

find ./src/lib/*/adapters/*/apiclient sed -regex ".*.ts" |
while IFS= read -r file
do
  # echo $file
  if ! grep -q "// @ts-nocheck" $file; then
    sed -i "1i// @ts-nocheck" $file
  fi
done