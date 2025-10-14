# PSN Spring Boot Monolith (Oracle, Java 17)

Struttura modulare (controller, service, repository, model) con multi-profilo `application.yml`:
- `application.yml`: impostazioni comuni
- `application-dev.yml`: profilo sviluppo (porta 8081)
- `application-test.yml`: profilo test
- `application-prod.yml`: profilo produzione (usa variabili d'ambiente DB_URL, DB_USERNAME, DB_PASSWORD)

## Build & Run
```bash
mvn -v
mvn clean package
# Esempio DEV
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

**Endpoint di test**
- `GET /api/health` -> "OK"
- CRUD ` /api/patients`
