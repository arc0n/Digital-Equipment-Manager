#!/bin/bash
docker exec -i sql_container mysql -u root -proot equipment_manager < ../../database/DDL.sql
