---
name: Lucas Narloch Zabla
title: Software Engineer
output: software_engineer
phone: +55 (41) 98719-8655
email: lucasnarloch123@gmail.com
location: Curitiba - PR, Brazil
link: GitHub | https://github.com/LucasNarlochZ
link: LinkedIn | https://linkedin.com/in/lucasnarloch
link: Portfolio | https://lucasnarlochz.github.io/Portfolio
---

## Summary

Software Engineer with production experience building backend applications, RESTful APIs, internal tools, and automation solutions in AWS environments. Strong focus on clean and maintainable code, automated testing, logging, troubleshooting, infrastructure automation, and continuous improvement.

## Technical Skills

- **Backend:** Node.js, TypeScript, Python, NestJS, FastAPI
- **Databases:** PostgreSQL, MySQL, DynamoDB
- **Cloud & DevOps:** AWS Lambda, S3, SQS, EC2, RDS, IoT Core, CloudWatch, Terraform, GitHub Actions, Docker
- **Frontend:** React, Next.js, TailwindCSS

## Experience

### Backend Developer - SmartLy Fabricação de Dispositivos Inteligentes Ltda. | 10/2026 - Present

- Lead the consolidation of multiple AWS Lambda functions into a single FastAPI API organized into services and repositories, reducing deployment time from approximately 12 to 5 minutes and latency on several endpoints from 7–10 seconds to approximately 1.5 seconds (79–85%).
- Redesigned AWS network architecture, replacing multiple VPC endpoints with a NAT Gateway and adding an EC2 bastion for database access, reducing monthly network costs by approximately 64% (US$90 to US$32) and expanding Lambda connectivity.
- I am restructuring the MySQL schema of a production IoT platform, remodeling entities, relationships, and migration flows to better reflect the domain and preserve integrity and compatibility during transition.

### Backend Developer Intern - SmartLy Fabricação de Dispositivos Inteligentes Ltda. | 10/2024 - 09/2026

- Introduced asynchronous, event-driven processing with Amazon SQS, handling peaks above 40,000 notifications per day and removing blocking operations from the main flow.
- Developed an endpoint for data migration between IoT devices, integrating MySQL, DynamoDB, S3, and AWS IoT Core through MQTT and supporting the migration of thousands of historical records per operation.
- Analyzed Lambda error metrics in CloudWatch and fixed unhandled edge cases, reducing average errors from 113 to 5 per five-minute interval.
- Built an automated test suite for FastAPI APIs with pytest and Testcontainers, including 120 integration tests and 300 unit tests, improving delivery reliability and reducing production regression risk.

## Projects

### Sunlog.dev

Production web platform designed for developers to document projects, technical decisions, and development progress. Built with a RESTful backend, PostgreSQL, automated infrastructure, authentication, background processing, and production observability.

The platform includes 33 HTTP endpoints, more than 100 automated tests, JWT-based authentication, asynchronous processing, CI/CD pipelines with GitHub Actions, and monitoring with Prometheus and Grafana.

_Technologies: NestJS, TypeScript, PostgreSQL, JWT, Docker, Nginx, AWS, GitHub Actions, Prometheus, Grafana, Next.js_

[Code](https://github.com/LucasNarlochZ/Sunlog.dev) | [Live demo](https://sunlog.dev)

### PocScript

Programming language and compiler implemented in C, covering the complete compilation pipeline, including lexical analysis, AST parsing, semantic analysis, custom intermediate representation generation, LLVM IR emission, and native executable generation.

Includes a custom runtime based on Linux system calls, a static type system, scope resolution, arrays, pointers, error handling, and 196 unit and integration tests.

_Technologies: C, LLVM IR, NASM, Make, Linux system calls, Compiler Design_

[Code](https://github.com/LucasNarlochZ/PocScript)

## Education

## Languages

- **Portuguese:** Native
- **English:** Professional Working Proficiency

### Bachelor of Computer Science - PUCPR | 02/2025 - 12/2028

Full scholarship recipient. Coursework focused on algorithms, data structures, object-oriented programming, operating systems, computer networks, databases, and software engineering.
