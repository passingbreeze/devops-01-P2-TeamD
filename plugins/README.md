# Plugins Folder, 플러그인

플러그인은 애플리케이션 구동에 필요한 라이브러리 등이 저장되고 작동되는 곳입니다.

- Plugins define behavior that is common to all the routes in your application. Authentication, caching, templates, and all the other crosscutting concerns should be handled by plugins placed in this folder.

이 폴더에 위치한 파일들은 [`fastify-plugin`](https://github.com/fastify/fastify-plugin) 모듈을 통해
등록되고 사용됩니다.

- Files in this folder are typically defined through the [`fastify-plugin`](https://github.com/fastify/fastify-plugin) module,making them non-encapsulated. They can define decorators and set hooks that will then be used in the rest of your application.

### 아래의 문서에서 플러그인 사용법을 찾아보세요

Check out:

* [The hitchhiker's guide to plugins](https://www.fastify.io/docs/latest/Plugins-Guide/)
* [Fastify decorators](https://www.fastify.io/docs/latest/Decorators/).
* [Fastify lifecycle](https://www.fastify.io/docs/latest/Lifecycle/).
