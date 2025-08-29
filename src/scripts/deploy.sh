#!/bin/bash
npm run build
cd blog-docusaurus
npm run build
./merge.sh
cd ../
tar -czf dist.tar.gz dist
scp -i ~/.ssh/sp.pem dist.tar.gz ubuntu@www.abdtyx.cn:/tmp/dist.tar.gz
ssh -i ~/.ssh/sp.pem ubuntu@www.abdtyx.cn << EOF
    sudo rm -rf /usr/share/nginx/html
    sudo mkdir /usr/share/nginx/html
    sudo tar -xzf /tmp/dist.tar.gz -C /usr/share/nginx/html --strip-components=1
    rm /tmp/dist.tar.gz
EOF
rm dist.tar.gz
