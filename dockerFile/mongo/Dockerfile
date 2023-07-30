FROM centos:7
COPY ./config /config
COPY ./etc/mongodb-org-5.0.repo /etc/yum.repos.d/mongodb-org-5.0.repo
RUN yum install -y mongodb-org-5.0.9 mongodb-org-database-5.0.9 mongodb-org-server-5.0.9 mongodb-org-shell-5.0.9 mongodb-org-mongos-5.0.9 mongodb-org-tools-5.0.9
RUN echo exclude=mongodb-org,mongodb-org-database,mongodb-org-server,mongodb-org-shell,mongodb-org-mongos,mongodb-org-tools >> /etc/yum.conf
ENTRYPOINT ["mongod", "--config", "/config/mongod.conf"]