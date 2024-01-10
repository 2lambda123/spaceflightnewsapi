FROM python:3.9-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
# Adding additional dependencies
RUN apt-get update \
    && apt-get install -y \
    && rm -rf /var/lib/apt/lists/*
ENV POETRY_CACHE_DIR='/var/cache/pypoetry'
ENV POETRY_HOME='/usr/local'
ENV APP_HOME=/code
ENV APP_USER=appuser

RUN groupadd --system $APP_USER && \
    useradd --system --gid $APP_USER --create-home --home $APP_HOME $APP_USER

WORKDIR ${APP_HOME}

RUN pip install poetry
RUN poetry config virtualenvs.in-project true

ADD --chown=${APP_USER}:${APP_USER} pyproject.toml poetry.lock ./
RUN poetry install --no-interaction --no-root --no-ansi


FROM base
LABEL org.opencontainers.image.source https://github.com/TheSpaceDevs/spaceflightnewsapi

ARG RELEASE_VERSION
ENV SNAPI_VERSION=$RELEASE_VERSION

COPY --chown=${APP_USER}:${APP_USER} --from=base ${APP_HOME} ${APP_HOME}
ADD --chown=${APP_USER}:${APP_USER} . ${APP_HOME}

ENV PATH="${APP_HOME}/.venv/bin:$PATH"
# Set necessary environment variables
ENV DATABASE_NAME=db_name
ENV DATABASE_USER=db_user
ENV DATABASE_PASSWORD=db_password
ENV DATABASE_HOST=db_host
ENV DATABASE_PORT=db_port"
USER ${APP_USER}
EXPOSE 8000
