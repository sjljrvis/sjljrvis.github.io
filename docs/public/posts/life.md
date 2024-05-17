## Host your own git server and serve via nginx

### Steps

> #### Domain name
> > * Purchase a domain name of your choice [namecheap](https://namecheap.com) or [goDaddy](https://godaddy.com).
> > * Add a subdomain to your dns records ```git.myserver.com```

> #### Virtual machine
> > * Set a basic linux virtual machine on any cloud provider such as **digitalocean**
> > * Assign a static IP address to your VM , it may look something like 3.109.88.65
> > * Add ssh key to your VM and login
> > * install git by running ```sudo apt install git```


> #### DNS mapping & port configs
> > * Make sure to add *A-records* in dns provider where ip address should be the IP from step 2
> > * Make sure port 80 of your VM is exposed


> #### nginx setup
> > * Install nginx in your ubuntu/linus VM
```bash
    sudo apt update
    sudo apt install nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx
```
> > * Verify whether nginx is working or not by visiting **http://git.myserver.com**

> > * Update nginx.conf to make sure /var/www/git, is served by git, add a server block as given in code below
```bash
   server {
    listen 80;
    server_name git.myserver.com;

     location ~ (/.*) {
      client_max_body_size 0; 
      auth_basic "Git Login";
      auth_basic_user_file "/var/www/git/$remote_user/htpasswd";

      include /etc/nginx/fastcgi_params;
      fastcgi_param SCRIPT_FILENAME /usr/lib/git-core/git-http-backend; 
      fastcgi_param GIT_HTTP_EXPORT_ALL "";
      fastcgi_param GIT_PROJECT_ROOT /var/www/git/$remote_user; # /var/www/git is the location of all of your git repositories.
      fastcgi_param REMOTE_USER $remote_user;
      fastcgi_param PATH_INFO $1; # 
      fastcgi_pass  unix:/var/run/fcgiwrap.socket;
  }
}
```