---
name: Lucas Narloch Zabla
title: Backend Developer
output: backend_developer
phone: +55 (41) 98719-8655
email: lucasnarloch123@gmail.com
location: Curitiba - PR, Brazil
link: GitHub | https://github.com/LucasNarZ
link: LinkedIn | https://linkedin.com/in/lucasnarloch
link: Portfolio | https://lucasnarz.github.io/Portfolio
---

## Summary

Junior Backend Developer with experience in AWS production environments, working on REST API development, distributed systems, and event-driven integrations. I work with Python, Node.js, and TypeScript, with a focus on code quality, automated testing, infrastructure automation, CI/CD pipelines, and observability.

## Technical Skills

- **Backend:** Node.js, TypeScript, Python, NestJS, FastAPI
- **Databases:** PostgreSQL, MySQL, DynamoDB
- **Cloud & DevOps:** AWS Lambda, S3, SQS, EC2, RDS, IoT Core, CloudWatch, Terraform, GitHub Actions, Docker
- **Frontend:** React, Next.js, TailwindCSS

## Experience

### Backend Developer Intern - SmartLy Fabricação de Dispositivos Inteligentes Ltda. | 09/2024 - Present

- Developed an endpoint for data migration between IoT devices, integrating MySQL, DynamoDB, S3, and AWS IoT Core through MQTT and supporting the migration of thousands of historical records per operation.
- Implemented an automated test suite for FastAPI APIs with pytest, including 30 integration tests with Testcontainers and 80 unit tests, increasing delivery reliability and reducing the risk of production regressions.
- Optimized Python AWS Lambda functions, reducing the average number of errors every 5 minutes from 113 to 5 (95.6%) and significantly increasing production system reliability.
- Developed a cron-scheduled worker for automatic sunset time updates, persisting changes in the database and sending updates to devices through MQTT.
- Participated in the consolidation of multiple serverless functions into a FastAPI monolithic API, reducing operational complexity, centralizing business rules, and improving system maintainability.
- Introduced asynchronous processing with Amazon SQS to implement event-driven communication between services, processing spikes above 40,000 notifications per day and eliminating blocking operations from the main request flow.
- Structured infrastructure as code with Terraform from scratch, replacing manual management in the AWS Console with versioned changes and creating a staging environment.
- Automated deployments with CI/CD pipelines in GitHub Actions and Bash scripts, reducing manual steps and configuration risks in production.
- Reduced infrastructure costs by 20% through CloudWatch metrics analysis and removal of idle resources.

## Projects

### Sunlog.dev

Production devlog platform with an architecture based on REST APIs, PostgreSQL, and automated AWS infrastructure. Includes a backend with 33 HTTP endpoints, more than 100 automated tests, CI/CD with GitHub Actions, Docker containerization, Nginx reverse proxy, and observability with Prometheus and Grafana.

_Technologies: NestJS, PostgreSQL, Docker, Nginx, AWS, GitHub Actions, Prometheus, Grafana, Next.js_

[Code](https://github.com/LucasNarZ/Sunlog.dev) | [Live demo](https://sunlog.dev)

### PocScript

Programming language and compiler implemented in C, covering the full compilation pipeline: lexical analysis, AST parsing, semantic analysis, custom IR generation, LLVM IR emission, and native executable generation. Includes a Linux syscall-based runtime, type system, scope resolution, arrays, pointers, and a suite with 196 unit and integration tests.

_Technologies: C, LLVM IR, NASM, Make, Linux syscalls, Compiler Design_

[Code](https://github.com/LucasNarZ/PocScript)

### PCBuilderBR

Application for selecting computer components with a FastAPI and PostgreSQL backend, exposing REST APIs for price calculation and compatibility analysis between CPU, motherboard, RAM, GPU, power supply, cooler, and case. Implements a rule engine for validating socket, chipset, DDR, TDP, connectors, and dimensions, as well as a daily worker for automatic price updates across multiple e-commerce stores.

_Technologies: FastAPI, PostgreSQL, Docker, React, Vite, TailwindCSS, Axios_

[Code](https://github.com/LucasNarZ/PCBuilderBR) | [Live demo](https://pcbuilderbr.com)


## Education

### Bachelor of Computer Science - PUCPR | 02/2025 - 12/2028

Full scholarship (100%). Coursework focused on algorithms, data structures, operating systems, computer networks, databases, and software engineering.

### Technical High School in Electronics - CEEP | 02/2022 - 12/2024

## Certifications

- **Fundamentals of Database Engineering** - Hussein Nasser, Udemy | Sep/2025

## Languages

- **Portuguese:** Native
- **English:** Professional proficiency
