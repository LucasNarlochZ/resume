---
name: Lucas Narloch Zabla
title: Desenvolvedor Full Stack
output: desenvolvedor_full_stack
phone: +55 (41) 98719-8655
email: lucasnarloch123@gmail.com
location: Curitiba - PR, Brasil
link: GitHub | https://github.com/LucasNarlochZ
link: LinkedIn | https://linkedin.com/in/lucasnarloch
link: Portfolio | https://lucasnarlochz.github.io/Portfolio
---
## Resumo
Desenvolvedor Full Stack com experiência ponta a ponta: APIs REST em produção, aplicações web com React/Next.js e infraestrutura própria na AWS. Combino solidez em backend (Node.js, Python, TypeScript) com produtos completos - do banco de dados à interface - incluindo dois projetos pessoais em produção com CI/CD, observabilidade e domínio próprio.

## Competências Técnicas
- **Frontend:** React, Next.js, TypeScript, TailwindCSS, Vite, Axios
- **Backend:** Node.js, TypeScript, Python, NestJS, FastAPI, REST APIs, arquitetura orientada a eventos
- **Bancos de Dados:** PostgreSQL, MySQL, DynamoDB
- **Cloud & DevOps:** AWS (Lambda, S3, SQS, EC2, RDS, IoT Core, CloudWatch), Terraform, Docker, Nginx, GitHub Actions (CI/CD)
- **Testes & Qualidade:** pytest, Testcontainers, testes unitários e de integração
- **Observabilidade:** Prometheus, Grafana

## Experiência
### Desenvolvedor Backend - SmartLy Fabricação de Dispositivos Inteligentes Ltda. | 10/2026 - Atual
- Conduzo a consolidação de múltiplas funções AWS Lambda em uma única API FastAPI organizada em services e repositories, reduzindo o tempo de deploy de aproximadamente 12 para 5 minutos e a latência de diversos endpoints de 7–10s para aproximadamente 1,5s (79–85%).
- Redesenhei a arquitetura de rede na AWS, trocando múltiplos VPC Endpoints por NAT Gateway e adicionando um bastion EC2 para acesso ao banco, reduzindo o custo mensal de rede em aproximadamente 64% (US$ 90 para US$ 32) e ampliando a conectividade das Lambdas.
- Atuo na reestruturação do schema MySQL de uma plataforma IoT em produção, remodelando entidades, relacionamentos e fluxos de migração para refletir melhor o domínio e preservar integridade e compatibilidade na transição.

### Estagiário Desenvolvedor Backend - SmartLy Fabricação de Dispositivos Inteligentes Ltda. | 10/2024 - 09/2026

- Projetei e implementei endpoint de migração de dados entre dispositivos IoT, integrando MySQL, DynamoDB, S3 e AWS IoT Core via MQTT e suportando milhares de registros históricos por operação.
- Construí suíte de testes automatizados para APIs em FastAPI com pytest, incluindo 120 testes de integração com Testcontainers e 300 testes unitários, reduzindo o risco de regressões em produção.
- Desenvolvi worker agendado (cron) para atualização automática do horário do pôr do sol, persistindo dados e propagando mudanças aos dispositivos via MQTT.
- Introduzi processamento assíncrono orientado a eventos com Amazon SQS, tratando picos acima de 40 mil notificações por dia e removendo operações bloqueantes do fluxo principal.

## Projetos
### Sunlog.dev
Plataforma full stack de devlogs, do design de banco à interface. Frontend em Next.js, backend em NestJS com 33 endpoints REST e mais de 100 testes automatizados, infraestrutura na AWS com Docker, Nginx (reverse proxy), CI/CD via GitHub Actions e observabilidade com Prometheus e Grafana.
_Tecnologias: Next.js, NestJS, PostgreSQL, Docker, Nginx, AWS, GitHub Actions, Prometheus, Grafana_
[Código](https://github.com/LucasNarlochZ/Sunlog.dev) | [Live demo](https://sunlog.dev)

### PCBuilderBR
Aplicação full stack para montagem de PCs, com frontend em React e backend em FastAPI/PostgreSQL. Motor de regras valida compatibilidade entre CPU, placa-mãe, RAM, GPU, fonte, cooler e gabinete (socket, chipset, DDR, TDP, conectores, dimensões), com API REST para cálculo de preços e um worker diário de atualização automática de preços em múltiplos e-commerces.
_Tecnologias: React, Vite, TailwindCSS, Axios, FastAPI, PostgreSQL, Docker_
[Código](https://github.com/LucasNarlochZ/PCBuilderBR) | [Live demo](https://pcbuilderbr.com)

## Formação
### Bacharelado em Ciência da Computação - PUCPR | 02/2025 - 12/2028
Bolsista integral (100%). Foco em algoritmos, estruturas de dados, sistemas operacionais, redes de computadores, bancos de dados e engenharia de software.

### Ensino Médio Técnico em Eletrônica - CEEP | 02/2022 - 12/2024

## Idiomas

- **Português:** Nativo
- **Inglês:** Proficiência profissional
