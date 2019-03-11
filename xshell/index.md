# cd /usr/local/app/

pm2 list

pm2 stop all

pm2 reload

# cd /etc/nginx/conf.d

vi server.conf

sudo nginx -t

sudo nginx -s reload

