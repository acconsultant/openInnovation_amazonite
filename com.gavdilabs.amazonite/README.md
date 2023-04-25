# Open Innovation Day - Project Amazonite

Project Amazonite for Open Innovation Day 2023

## Responsible

Developer: _Allan Christensen_

## Local Database Config

```json
{
    "VCAP_SERVICES": {
                "postgresql-db": [
            {
                "label": "postgresql-db",
                "provider": null,
                "plan": "free",
                "name": "basic-postgresdb",
                "tags": [
                    "relational",
                    "database",
                    "plain"
                ],
                "instance_guid": "",
                "instance_name": "",
                "binding_guid": "",
                "binding_name": null,
                "credentials": {
                    "username": "postgres",
                    "password": "postgres",
                    "hostname": "localhost",
                    "dbname": "openinno_db",
                    "port": "5432",
                    "uri": "",
                    "sslcert": "",
                    "sslrootcert": ""
                },
                "syslog_drain_url": null,
                "volume_mounts": []
            }
        ]
    }
}
```

## Startup Thursday (Single Terminal With Tabs)
```
$ colima start
$ cd /Users/allan/Documents/OpenInnovationDay/com.gavdilabs.amazonite/service
$ docker-compose up
NEW TAB (CDS SERVICE)
$ npm run dev
NEW TAB (UI APP)
$ cd /Users/allan/Documents/OpenInnovationDay/com.gavdilabs.amazonite/app
$ npm start
```

## Commands for Postgres Terminal Access
```
docker ps 
docker exec -ti [container_id] bash
psql -d openinno_db -U postgres
```