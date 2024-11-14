#!/bin/bash

set - e

yarn migrate
echo "running migration successful"

# yarn seed
# echo "running seeding successful"

yarn start
echo "starting server"
