1. Build your image: `docker build -t nextjs-docker .`.
2. Run your container: `docker run -p 3000:3000 nextjs-docker`.

You can view your images created with `docker images`.

To run simply we enter to the container terminel 
```bash 
  #List your running containers 
  docker ps
  #Access to terminal 
  docker exec -it [container_id] sh
```
After that you can run your app : 
```bash
  npm start:dev
```

Stop the container: 
```bash
  docker stop [container_id]
```