---
id: ilcbsetup
title: Setup a JATOS service
sidebar_label: ILCB Server Setup
---



## A JATOS server for online experiments

_**Doc written in April 2020**_

How was this JATOS server built ?

- I chose https://www.digitalocean.com to host a cloud based server. I selected the LAMP option that comes with a pre-installed version of PHP, MySQL and Apache, along with a few extras, under Ubuntu 18.0.4. This was setup in minutes, and I had an IP address to log to with ssh.

- a domain name was chosen from https://www.gandi.net and linked to the IP address of the web server.


## Tutorials

There are many routes that lead to an up and running JATOS server. One can choose a much more **[simple docker-style installation](https://www.jatos.org/JATOS-on-DigitalOcean.html)** than the one described here. I went the [old-school way with Apache](https://www.jatos.org/JATOS-with-Apache.html). Why ? Because we wanted to have JATOS on a portal for experiments, along with other services. This took me a few weeks to configure as I am no professional. If I had to set it up again, the whole process would take less than a day - well, starting early in the morning.

The DigitalOcean tutorials I followed were

- [How to setup a server with Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04)
- [How to setup virtual hosts](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04)
- [How to secure apache with let's encrypt on ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-18-04)

And used https://www.jatos.org/JATOS-on-a-server.html to finalize the installation.

The DNS configuration is all explained here

- https://www.digitalocean.com/docs/networking/dns/quickstart/
- https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars#registrar-gandi

Starting a service at reboot is explained here

- https://www.digitalocean.com/community/tutorials/how-to-configure-a-linux-service-to-start-automatically-after-a-crash-or-reboot-part-1-practical-examples)

Recently, I went a step further and installed on a dedicated server the MySQL database that JATOS uses. For this, I went for the DigitalOcean server option called **Managed Databases** (daily backup and redundancy). To use this integrated service, I needed to upgrade the MySQL version to v.8, set the correct port of communication, and transfer the JATOS database, knowing there would be no ssh access to the database server. I used Oracle WorkBench for this latter operation (the sole software that allowed the particular connection needed AND that could deal with the import/export of a large database).

The total cost of the actual configuration is about 50 EUR a month.




:::important
The sections below are not self-sufficient. If you are interested in hosting your own implementation of JATOS, read the tutorials first. They are much more detailed and the explanation are great. The content below is a command list for the ILCB service administrators, but you are free to use it!
:::


## DigitalOcean manipulations

### Droplet creation

On DigitalOcean, I created a droplet (a virtual server) this way:

- create a droplet

![create droplet](/img/server-create-droplet.png)

- choose in Marketplace a LAMP option amongst the proposed initial configurations.

![create droplet](/img/server-marketplace.png)

![create droplet](/img/server-lamp.png)

This went with the following piece of software

![create droplet](/img/server-preinstalled-software.png)

Before clicking on create, I selected some required options such as the plan (from 5$ a month), the location (worldwide choice including Europe), a monitoring / backup option and a password if needed.

then

![create droplet](/img/server-create.png)

The virtual server is created within a minute and is managed in the home page of your DigitalOcean account. You can destroy this server within seconds so no worries if something is not setup correctly. One can always create a new droplet easily.

In the initial configuration, the UFW firewall is set to “active” with restrictions on all the ports except SSH (port 22), HTTP (port 80) and HTTPS (port 443). You can disable this firewall service and use instead the DigitalOcean firewall solution (button “create” then “Cloud Firewalls”). Both choices are fine.

![create droplet](/img/server-firewall.png)


### Initial server configuration

Following the DigitalOcean tutorial on [How to setup a server with Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04), I configured the server with some command lines executed in the console, either on the DigitalOcean website or in the Linux/MacOS terminal.

Log in :

    ssh root@<IP address>


Answer “yes” to continue connecting then type the actual  password. You are asked to change the root password (enter it twice).

Create a super-user with admin privileges

    adduser mysuperuser
    usermod -aG sudo mysuperuser

You can delete the root account once you are sure that mysuperuser is able to perform sudo operations (Super User DO).

Verify the firewall settings with

    ufw status

The ports that we need to communicate with are opened (22, 80, 443), all in IP v4 and v6.



## Apache configuration

I followed the DigitalOcean tutorial on [How to setup virtual hosts](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04).

The web server is Apache2, located at `/etc/apache2/`.

### Initial steps

I created a main site “ilcb-online-test.net” and its alias “www.ilcb-online-test.net” (that points to the main site), along with some extra sub-site located in the sub-domain such as the one you are reading the docs on “docs.ilcb-online-test.net” or the one dedicated to JATOS.

    sudo mkdir -p /var/www/ilcb-online-test.net/public_html
    sudo mkdir -p /var/www/docs.ilcb-online-test.net/public_html
    sudo mkdir -p /var/www/jatos.ilcb-online-test.net/public_html

I then gave some rights to the actual user (change owner)

    sudo chown -R $USER:$USER /var/www/ilcb-online-test.net/public_html
    sudo chown -R $USER:$USER /var/www/docs.ilcb-online-test.net/public_html
    sudo chown -R $USER:$USER /var/www/jatos.ilcb-online-test.net/public_html

And changed the write permissions

    sudo chmod -R 755 /var/www


:::note
Instead of using nano, you can use an FTP client (FileZilla, CyberDuck) to log to the server, and directly create or modify the directory structure or the files, including their content and permissions.
:::

In the terminal, I opened the nano editor to create the `index.html` file

     nano /var/www/ilcb-online-test.net/public_html/index.html

and gave it some initial content

    <html>
      <head>
        <title>Welcome to ilcb.com!</title>
      </head>
      <body>
        <h1>Success!  The ilcb.com is working!</h1>
      </body>
    </html>

I copied the content of this file to the other locations

    cp /var/www/ilcb-online-test.net/public_html/index.html /var/www/jatos.ilcb-online-test.net/public_html/index.html

and enabled the web service for these addresses, first by copying a configuration file (for the main domain and the subdomains)

    sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/ilcb-online-test.net.conf

and modifying it

    sudo nano /etc/apache2/sites-available/ilcb-online-test.net.conf

I enabled the service

    sudo a2ensite ilcb-online-test.net.conf
    sudo apache2ctl configtest
    sudo a2dissite 000-default.conf


:::important
DigitalOcean was setup to manage the domain and subdomains (NS, A and CNAME  DNS records). See the tutorials at the begining of the page.
:::

### Encryption

I setup and https encryption with Let's Encrypt following the DigitalOcean tutorial on [How to secure apache with let's encrypt on ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-18-04)

Verified that `certbot` is installed and `Apache` is correctly running

    sudo apache2ctl configtest

Then enabled https for the domain and sub-domains

    sudo certbot --apache -d ilcb-online-test.net -d www.ilcb-online-test.net

To update a new subdomain :

    sudo certbot --duplicate --apache -d ilcb-online-test.net -d www.ilcb-online-test.net


:::note
You can test your configuration on
https://www.ssllabs.com/ssltest/analyze.html?d=jatos.ilcb-online-test.net
:::

The `certbot` operation adds a new `.conf` file dedicated to the encrypted communication. The HTTP (port 80) is completed with

    RewriteEngine on
    RewriteCond %{SERVER_NAME} =ilcb-online-test.net [OR]
    RewriteCond %{SERVER_NAME} =www.ilcb-online-test.net
    RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]

The new HTTPS (port 433) is

    <IfModule mod_ssl.c>
      <VirtualHost *:443>

            ServerAdmin admin@ilcb-online-test.net
            ServerName ilcb-online-test.net
            ServerAlias www.ilcb-online-test.net

            DocumentRoot /var/www/ilcb-online-test.net/public_html

            ErrorLog ${APACHE_LOG_DIR}/error.log
            CustomLog ${APACHE_LOG_DIR}/access.log combined

            Include /etc/letsencrypt/options-ssl-apache.conf
            SSLCertificateFile /etc/letsencrypt/live/ilcb-online-test.net/fullchain.pem
            SSLCertificateKeyFile /etc/letsencrypt/live/ilcb-online-test.net/privkey.pem

      </VirtualHost>
    </IfModule>


## Install Java

JATOS runs with Java, which is not installed by defaults.

    java -version

should output "unknown command"

To install Java:

    sudo apt-get update
    sudo apt-get install openjdk-8-jre

that installed JAVA 8 JRE.

## Setup MySQL for JATOS

From https://www.jatos.org/JATOS-on-a-server.html

    sudo mysql -u root -p

    CREATE USER 'jatosuser'@'localhost' IDENTIFIED BY ‘password’;
    GRANT SELECT, INSERT, UPDATE ON jatos.* TO 'jatosuser'@'localhost';


### Setup PhpMyAdmin or Adminer

Following the DigitalOcean tutorial [Install phpMyAdmin](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-18-04).

    sudo apt update
    sudo apt install phpmyadmin php-mbstring php-gettext

    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';


## Install JATOS

### Download

I downloaded and installed JATOS with (see the tutorial https://www.jatos.org/JATOS-on-a-server.html)

    wget https://github.com/JATOS/JATOS/releases/download/v3.2.1/jatos-3.2.1.zip

or grab some more recent version: https://github.com/JATOS/JATOS/releases/download/v3.3.6/jatos-3.3.6.zip

    sudo apt-get install unzip
    unzip jatos
    sudo chmod +x jatos-3.3.6/loader.sh

Changed the proxy settings

    ProxyRequests Off
    ProxyPreserveHost On
    ProxyPass / http://xp.ilcb-online-test.net:9000/
    ProxyPassReverse / http://xp.ilcb-online-test.net:9000/


At this point, you should have some additional firewall rules dedidated to MySQL (port 3306) and JATOS (port 9000). If you went for the firewall managed by DigitalOcean, remember to shut the inner UFW Service

    sudo ufw disable

Checked that you have set the correct configuration for JATOS and MySQL

    # If you use JATOS with an MySQL database use
    After=network-online.target mysql.service

### Enable JATOS service after reboot

Services are in `/etc/systemd/system/multi-user.target.wants/service.service`

To enable/disable a service

    sudo systemctl enable /etc/systemd/system/multi-user.target.wants/service.service

    sudo systemctl status jatos.service
    sudo systemctl stop jatos.service
    sudo systemctl enable jatos.service
    sudo systemctl daemon-reload

At this point, you should have a JATOS server running on a DigitalOcean droplet. Phew !

![create droplet](/img/server-jatos.png)

## Useful command lines

To change right access to a particular folder/particular user:

    sudo chown -R myuser:myuser /var/www/mysubdomain.ilcb-online-test.net/

To upadate a new subdomain, here is the actual list

    sudo certbot --duplicate --apache -d ilcb-online-test.net -d www.ilcb-online-test.net -d test.ilcb-online-test.net -d playground.ilcb-online-test.net -d jatos.ilcb-online-test.net -d reprea.ilcb-online-test.net -d xp.ilcb-online-test.net -d ibm.ilcb-online-test.net -d kids.ilcb-online-test.net -d docs.ilcb-online-test.net

To create a database and a newuser

    CREATE USER 'newuser'@'localhost' IDENTIFIED BY ‘xxx’;
    GRANT SELECT, INSERT, UPDATE, DELETE ON  `newuser`.* TO 'newuser'@'%';

To change the Hostname

    sudo hostname ilcb-online-test.net
    sudo sendmailconfig
    service apache2 restart
