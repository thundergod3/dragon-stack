#!/bin/bash
export PGPASSWORD="congthundergod"

echo "Configuring dragonstackdb"

dropdb -U postgres dragonstackdb
createdb -U postgres dragonstackdb

psql -U postgres dragonstackdb < ./bin/sql/account.sql
psql -U postgres dragonstackdb < ./bin/sql/generation.sql
psql -U postgres dragonstackdb < ./bin/sql/dragon.sql
psql -U postgres dragonstackdb < ./bin/sql/accountDragon.sql
psql -U postgres dragonstackdb < ./bin/sql/trait.sql
psql -U postgres dragonstackdb < ./bin/sql/dragonTrait.sql

node ./bin/insertTraits.js

echo "dragonstackdb configured"
