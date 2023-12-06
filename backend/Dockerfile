FROM openjdk:11

ARG jar_file=build/libs/*.jar

COPY ${jar_file} app.jar


ENTRYPOINT [ "java", "-jar", "/app.jar" ]