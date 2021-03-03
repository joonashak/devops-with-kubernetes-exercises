npm run build
docker build -t dwk-project-client .
docker tag dwk-project-client joonashak/dwk-project-client
docker push joonashak/dwk-project-client
