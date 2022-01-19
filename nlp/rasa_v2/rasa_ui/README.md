[![Docker Automated build](https://img.shields.io/docker/automated/jrottenberg/ffmpeg.svg)](https://hub.docker.com/r/paschmann/rasa-ui/)

参考github来源：[https://github.com/paschmann/rasa-ui](https://github.com/paschmann/rasa-ui) 

# Rasa UI 

Rasa UI is a web application built on top of, and for [Rasa](https://github.com/RasaHQ/rasa). Rasa UI provides a web application to quickly and easily be able to create and manage bots, NLU components (Regex, Examples, Entities, Intents, etc.) and Core components (Stories, Actions, Responses, etc.) through a web interface. It also provides some convenience features for Rasa, like training and loading your models, monitoring usage or viewing logs.

## Features

- UI for creating and managing training data - Examples, Intents, Entities, Synonyms, Regex, Stories, Actions, Responses
- Manage multiple bots from a single UI/instance of Rasa UI
- Create, manage and load different versions of your models for testing and optimizing
- Log requests for usage tracking, history and improvements to your models
- Easily execute intent parsing using different models
- Data is stored in a SQLite DB for backing up/sharing
- Can be used with or without a Rasa backend to manage your training data

<img src="/web/src/assets/img/screenshot1.png" width="500">
<img src="/web/src/assets/img/screenshot2.png" width="500">

## Getting Started

Rasa UI can run on your Rasa instance, or on a separate machine. Technically Rasa is not required, you could just use the UI for managing training data.

### Prerequisites

[Node.js/npm](https://nodejs.org/en/) - Serves Rasa UI - Required

[Rasa](https://github.com/RasaHQ/rasa) - Developed against Version 1.2+ - Optional

### Installing

1. Clone/download the Rasa UI repository or a [release](https://www.github.com/paschmann/rasa-ui)
2. Install npm packages.
3. Set Rasa Server variable in package.json

```
记得先安装npm:
apt install npm  
npm install phantomjs-prebuilt -save 
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

git clone https://github.com/paschmann/rasa-ui.git
cd rasa-ui
npm install  如果报错一般是版本过低。

如果上面部分报错，使用命令进行修复：npm audit fix --force
最后：
sudo apt install -f
apt update

```
使用npm 查看可能存在的风险：
```
npm fund
RasaUI@3.0.1
+-- https://opencollective.com/bootstrap
| `-- bootstrap@5.1.3
+-- https://opencollective.com/mochajs
| `-- mocha@9.1.4
+-- https://github.com/sponsors/RubenVerborgh
| `-- follow-redirects@1.14.7
+-- https://github.com/sponsors/sindresorhus
| `-- escape-string-regexp@4.0.0, find-up@5.0.0, log-symbols@4.1.0, strip-json-comments@3.1.1, locate-path@6.0.0, p-locate@5.0.0, p-limit@3.1.0, yocto-queue@0.1.0, is-unicode-supported@0.1.0, camelcase@6.3.0, decamelize@4.0.0
+-- https://github.com/sponsors/isaacs
| `-- glob@7.1.7
+-- https://github.com/chalk/supports-color?sponsor=1
| `-- supports-color@8.1.1
+-- https://github.com/sponsors/jonschlinkert
| `-- picomatch@2.3.1
+-- https://github.com/chalk/chalk?sponsor=1
| `-- chalk@4.1.2
+-- https://github.com/chalk/ansi-styles?sponsor=1
| `-- ansi-styles@4.3.0
`-- https://github.com/chalk/wrap-ansi?sponsor=1
  `-- wrap-ansi@7.0.0


```


## Running

Run npm start from the server folder (rasa-ui)

```
npm start
```
Your web application should be available on http://localhost:5001

## Running from Docker

If you **already** have a Rasa instance setup and running, you can run Rasa UI from docker hub using [paschmann/rasa-ui](https://hub.docker.com/r/paschmann/rasa-ui/). You will need to edit the environment variables, specifically the **rasa_endpoint**.

If you **dont** have a Rasa instance setup, you can run both Rasa and Rasa UI using the [docker-compose file](https://github.com/paschmann/rasa-ui/blob/master/docker-compose.yml), copy the file to a local directory and run the command below:

```
docker-compose up
```

The docker-compose up command will use the docker-compose.yml file to create both the Rasa container and Rasa UI container, and create a networked connection between both.

## Upgrading

Because Rasa UI uses a Database to store training data, and other content, in the event the database schema changes, you will need to modify your database when upgrading to newer versions of Rasa UI. Please review the server/db migration folder for upgrade scripts from and to newer versions if you have existing data and want to maintain it. If you are upgrading from Rasa UI prior to v.3.0.0 there is no data migration path as previously postgres was used, and now sqlite is being used.

## Logging

Since Rasa UI can be used to log events/intent parsing/training etc. we would suggest changing your endpoints for your API calls to "pass through" Rasa UI. All API requests are simply logged, forwarded to Rasa and then returned.

e.g. Instead of POST'ing to your Rasa instance which is normally something like http://localhost:5005/model/parse?q=hello you can POST to Rasa UI (e.g. http://localhost:5001/api/v2/rasa/model/parse?q=hello)

## Contributing

Please read [contributing.md](contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Contributers

Rasa UI is possible thanks to all the awesome contributers, thank you!

* **Pradeep Mamillapalli**
* **elvay1**
* **huberrom**
* **ClaasBrueggemann**
* **btran10**
* **btotharye**
* **beevelop**

## License

This project is licensed under the MIT License - see the [license](license) file for details
