# Docker

## ¿Que es Docker?

- Aisla procesos gracias a la funcionalidad de linux.
- Utiliza las tecnologias: cgroups y namespaces.
- cgroup ayuda a poner limites a un proceso a nivel de recursos.
- namespaces delimita los elementos de linux en un espacio, por ejemplo los procesos en un container. 
- Docker ayuda a gestionar estas dos tecnologias.
- Por lo tanto Docker permite ejecutar procesos de forma aislada, pensando que estan en otro sistema distinto.
- Ejecuta y distribuye aplicaciones.
- Puedes empaquetar y ejecutar cualquier cosa dentro de los containers.

## ¿Que no es Docker?

- No se utilizan maquinas virtuales.

## ¿Que es una imagen?
- Las imagenes se descargan de https://hub.docker.com/.

## ¿Que es un container?
- Al ejecutar Docker run se genera un container nuevo.

## ¿Que es Dockerfile?
- Es un fichero que define que tiene una imagen de Docker.
- Define como se debe comportar una container
- Va añadiendo capas para la imagen
- Si una de las capas no carga desde la cache por algún cambio, las siguientes capas no se ejecutan desde la cache.
- Para evitar demasiadas capas se puede unir sentencias y mejorar el rendimiento.
- Para disminuir el tamaño de la imagen, se pueden ignorar carpetas como node_modules en .dockerignore

## ¿Que es un Volumen?
- Permiten persistir datos de nuestro container

## Instalar Docker para Ubuntu 20.04

```bash

# Instalar dependencias
sudo apt-get update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt update

# Instalar Docker
sudo apt install docker-ce

# Dar permisos de administrador al ejecutar Docker
sudo usermod -aG docker ${USER}
su - ${USER}

# Error permisos (opcional)
sudo chmod 666 /var/run/docker.sock
```

## Comandos
```bash

# Arrancar nuevo container
docker run hello-world

# Arrancar container de forma interactiva
docker run -it ubuntu

# Arrancar container y borrarlo despues de salir
docker run --rm learn-docker

# Arrancar container exponiendo al puerto 3000
docker run --rm -it -p 3001:3000 learn-docker

# Si falla el container vuelve a arrancar solo
docker run -it --restart=unless-stop ubuntu

# Limitar memoria container y cpus
docker run -it --memory=500m --cpus=2 ubuntu

# Persistir datos con volumen
docker run -it  --name NombreVolumen -v /data ubuntu

# Permitir hotreload del codigo
docker run --rm -it -p 3001:3000 -v $PWD:/usr/src/app learn-docker

# Arrancar container ya creado
docker start 033d6e74c53f

# Parar container
docker stop 033d6e74c53f

# Borrar container
docker rm 033d6e74c53f

# Listar containers activos
docker ps

# Listar todos los containers 
docker ps -a

# Listar images
docker images

# Ver logs del container
docker logs 033d6e74c53f

# Crear imagen a partir de Dockerfile (.)
docker build -t learn-docker .

# Borrar imagen docker
docker rmi learn-docker

# Borrar imagenes sin tag
docker rmi $(docker images | grep "^<none>" | awk "{print $3}")

```

## Dockerfile

```
# Que imagen se va a utilizar
FROM

# Copiar ficheros en el contenedor
ADD

# Ejecutar un comando dentro del container
RUN

# Comando que se ejecuta al hacer docker run
CMD

# Especificar variables de entorno dentro del container
ENV

```


## Bibliografia
- https://docs.docker.com/engine/install/debian/
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-es
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-es
- https://hub.docker.com/