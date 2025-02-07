# Sequelize Setup Guide

## Installation

To install Sequelize and the necessary database drivers, run the following commands:

```sh
npm install sequelize pg pg-hstore  # Install Sequelize with PostgreSQL support
npm install sequelize mysql2        # Install Sequelize with MySQL support
npm install --save-dev sequelize-cli  # Install Sequelize CLI for migrations and seeders
```

## Initialize Sequelize

After installation, initialize Sequelize in your project by running:

```sh
npx sequelize-cli init
```

This will create the following folder structure:

```
./config        # Database configuration
./models        # Models (ORM mappings)
./migrations    # Migrations for database changes
./seeders       # Seed files for populating the database
```

