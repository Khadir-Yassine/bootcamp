# PostgreSQL & pgAdmin Installation

Course source: [Geeks Institute](https://www.geeks.institute/).
### **You are going to download the *latest version* of PostgreSQL, and PgAdmin.**

---

## **PostgreSQL **(mac/win/linux)

---

### **MacOs**

**Step 1 — Installing Postgresql with Homebrew**

1. If you don’t have Homebrew, install it. Follow the steps [here](https://brew.sh/) and follow [this video](https://www.youtube.com/watch?v=_TozEiBa8Ck)

2. Before running any install command in Homebrew, it’s good to ensure you are up to date. Open your terminal and run this command:
`brew update`

3. Now it’s time to install Postgres, and you can run this command.
`brew install postgresql`

4. Once it’s done, you should see this output line amongst some other stuff. That means you are set!
`This formula has created a default database cluster with: initdb --locale=C -E UTF-8 /opt/homebrew/var/postgres`

---

**Step 2 — Managing the Postgres database**

1. To start the database, you can run the following command in your terminal:
`brew services start postgresql`

2. And to stop the Postgres database from running:
`brew services stop postgresql`

---

### **Windows**

Follow this [tutorial](https://phoenixnap.com/kb/install-postgresql-windows) and install the last updated version of PostgreSQL

---

### **Linux**

**Step 1 — Installing PostgreSQL**

1. To install PostgreSQL, in your terminal, first refresh your server’s local package index:
`sudo apt update`

2. Then, install the Postgres package along with a `-contrib` package that adds some additional utilities and functionality:
`sudo apt install postgresql postgresql-contrib`

3. Press `Y` when prompted to confirm installation. If you are prompted to restart any services, press `ENTER` to accept the defaults and continue.

---

**Step 2 — Using PostgreSQL Roles and Databases**

By default, Postgres uses a concept called “roles” to handle authentication and authorization. These are, in some ways, similar to regular Unix-style users and groups.

Upon installation, Postgres is set up to use ident authentication, meaning that it associates Postgres roles with a matching Unix/Linux system account. If a role exists within Postgres, a Unix/Linux username with the same name is able to sign in as that role.

1. The installation procedure created a user account called `postgres` that is associated with the default Postgres role. There are a few ways to utilize this account to access Postgres. One way is to switch over to the postgres account on your server by running the following command:
`sudo -i -u postgres`

2. Then you can access the Postgres prompt by running
`psql`
This will log you into the PostgreSQL prompt, and from here you are free to interact with the database management system right away.

3. To exit out of the PostgreSQL prompt (This will bring you back to the postgres Linux command prompt), run the following:
`\q`

4. To return to your regular system user, run the exit command:
`exit`

---

**Step 3 — Set up your password**

1. Set your password for the postgres user, using these commands
`sudo -u postgres psql`
then
`\password postgres`

---

## **PgAdmin**

---

### **Step 1 — Download PgAdmin**

Check if pgAdmin was installed during the process (ie. Look in the apps in your computer).
If PgAdmin is not installed, [download it here](https://www.pgadmin.org/download/)

*Note*: **APT** is for Linux

---

### **Step 2 — Open Pgadmin**

Open up **PgAdmin**. PgAdmin lets you do regular database-related tasks through a friendly graphical interface.

When you open up pgAdmin, you will see at the top-left corner the Server
–> Click on it

If you see a server named “PostgreSQL -version-” enlisted in the interface.
Connect to the server by entering the password that you gave during the installation. And you are good to go.
