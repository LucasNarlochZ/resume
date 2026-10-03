# Experience

## Backend Developer - SmartLy Fabricação de Dispositivos Inteligentes Ltda.

**Period:** 10/2026 - Present

- I lead the consolidation of multiple AWS Lambda functions into a single FastAPI API organized into services and repositories, reducing deployment time from approximately 12 to 5 minutes and latency on several endpoints from 7–10 seconds to approximately 1.5 seconds (79–85%).
- I redesigned AWS network architecture, replacing multiple VPC endpoints with a NAT Gateway and adding an EC2 bastion for database access, reducing monthly network costs by approximately 64% (US$90 to US$32) and expanding Lambda connectivity.
- I am restructuring the MySQL schema of a production IoT platform, remodeling entities, relationships, and migration flows to better reflect the domain and preserve integrity and compatibility during the transition.

## Backend Developer Intern - SmartLy Fabricação de Dispositivos Inteligentes Ltda.

**Period:** 10/2024 - 09/2026

- I reduced total AWS costs by 20% by cutting CloudWatch spend by 75% (US$120 to US$30 per month), identifying and disabling unused IoT Core logs.
- I introduced asynchronous, event-driven processing with Amazon SQS, handling peaks above 40,000 notifications per day and removing blocking operations from the main flow.
- I structured infrastructure as code with Terraform from scratch, replacing manual AWS Console management with versioned changes and creating a staging environment.
- I built an automated FastAPI test suite with pytest and Testcontainers, including 120 integration tests and 300 unit tests, improving delivery reliability and reducing regression risk.
- I designed and implemented an IoT data migration endpoint integrating MySQL, DynamoDB, Amazon S3, and AWS IoT Core through MQTT, supporting thousands of historical records per operation.
- I automated deployments with GitHub Actions CI/CD pipelines and Bash scripts, reducing manual steps and production configuration risks.
- I participated in the first phase of consolidating multiple serverless functions into a FastAPI application, reducing operational complexity and centralizing business rules.
- I analyzed Lambda error metrics in CloudWatch and fixed unhandled edge cases, reducing average errors from 113 to 5 per five-minute interval.
