ARG VARIANT=14
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

# Japanese setting & Clean up
RUN localedef -f UTF-8 -i ja_JP ja_JP \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

ENV TZ Asia/Tokyo
