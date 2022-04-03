# Routes Folder

Routes 폴더는 어플리케이션 내에서 루트를 정의합니다. Fastify는 마이크로서비스 아키텍처로의 간단한 경로를 제공합니다.향후 이러한 아키텍처 중 일부를 개별적으로 도입할 수도 있습니다.

- Routes define routes within your application. Fastify provides an easy path to a microservice architecture, in the future you might want to independently deploy some of those.

이 폴더에서는 웹 애플리케이션의 엔드포인트를 정의하는 모든 경로를 정의해야 합니다. 각 서비스는 `Fastify Plugin`으로 캡슐화되어 있으며(자신의 독립된 플러그인을 가질 수 있습니다), 통상은 파일에 저장됩니다. 예를 들어, 모든 `/users` 루트를 논리적으로 `users.js` 파일로 그룹화하는 것을 눈여겨봐주세요. 기초적인 `/` 루트가 추가된 `root.js` 파일을 추가했습니다.

- In this folder you should define all the routes that define the endpoints of your web application. Each service is a [`Fastify plugin`](https://www.fastify.io/docs/latest/Plugins/), it is encapsulated (it can have its own independent plugins) and it is typically stored in a file; be careful to group your routes logically, e.g. all `/users` routes in a `users.js` file. We have added a `root.js` file for you with a '/' root added.

하나의 파일이 너무 크면 폴더를 만들고 `index.js` 파일을 추가합니다. 이 파일은 `Fastify Plugin` 에 등록되어야 하며 Fastify로 인해 만들어진 애플리케이션에 의해 자동으로 로드됩니다. 이제 해당 폴더에 원하는 만큼의 파일을 추가할 수 있습니다. 이렇게 하면 단일 모노리스 내에 복잡한 경로를 생성하여 최종적으로 추출할 수 있습니다.

- If a single file become too large, create a folder and add a `index.js` file there: this file must be a Fastify plugin, and it will be loaded automatically by the application. You can now add as many files as you want inside that folder. In this way you can create complex routes within a single monolith, and eventually extract them.

루트간에 기능을 공유할 필요가 있는 경우는, 그 기능을 `plugins`폴더에 배치해, [`decorators`](https://www.fastify.io/docs/latest/Decorators/)를 개입시켜 공유합니다.

- If you need to share functionality between routes, place that functionality into the `plugins` folder, and share it via [decorators](https://www.fastify.io/docs/latest/Decorators/).

비동기 프로그래밍(`async/await`)으로 routes를 작성하는데 있어 어려움이 있다면 [`Promise resolution`](https://www.fastify.io/docs/latest/Routes/#promise-resolution)을 참조하세요.

- If you're a bit confused about using `async/await` to write routes, you would better take a look at [Promise resolution](https://www.fastify.io/docs/latest/Routes/#promise-resolution) for more details.
