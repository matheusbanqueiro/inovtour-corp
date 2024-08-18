# Dockerfile

# Use a imagem base que você já está utilizando
FROM catthehacker/ubuntu:act-latest

# Instale as ferramentas necessárias
RUN apt-get update && apt-get install -y \
    net-tools \
    lsof \
    curl \
    traceroute \
    sudo \
    vim \
    git \
    && rm -rf /var/lib/apt/lists/*
