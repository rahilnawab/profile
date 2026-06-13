export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Software Engineer',
    company: "Lowe's India",
    location: 'Bengaluru',
    startDate: 'Sep 2024',
    endDate: 'Present',
    highlights: [
      'Oversaw 100+ GKE Standard clusters (20+ production) to deliver a multi-tenant Kubernetes platform at enterprise scale.',
      'Implemented an active-active, multi-region HA environment on GKE using paired clusters in us-east4 and us-central1; leveraged Google Cloud Load Balancing for cross-region traffic distribution and applied weighted DNS-based routing to enhance resilience and reduce latency.',
      'Executed Kubernetes upgrades from 1.28 to 1.32 using blue-green and in-place node-pool strategies, ensuring zero-downtime rollouts with rapid rollback capability.',
      'Standardized deployment of GKE add-ons (Gatekeeper, Cert-Manager, Istio, NGINX Ingress, External Secrets, KEDA, Goldilocks, Velero, Wiz) to enforce policy, strengthen security posture, optimize autoscaling, and streamline backup/DR.',
      'Hardened access controls using GCP IAM best practices (least privilege, audit logging, service-account governance) and enforced org-level policies across projects.',
      'Reduced compute costs by shifting non-critical workloads to Spot/Preemptible pools while reserving on-demand capacity for SLO-critical Pods, governed by taints/tolerations and node affinity rules.',
      'Built Grafana dashboards for core infrastructure metrics and configured proactive alerts, improving incident detection and response time.',
      'Accelerated platform development using ChatGPT Enterprise for kubectl/Helm/Terraform automation, log analysis, and PR summarization through secure, long-context sessions.',
      'Utilized Windsurf (Cascade) to auto-generate Python utilities for safe GKE operations (scaling, relabeling, cleanup), cutting remediation time during incidents.',
    ],
  },
  {
    title: 'Associate Consultant',
    company: 'Capgemini',
    location: 'Mumbai',
    startDate: 'Mar 2021',
    endDate: 'Sep 2024',
    highlights: [
      'Served as Deployment Reliability Engineer for McDonald\u2019s Corporation, driving high-availability, automated deployment pipelines across Kubernetes and AWS.',
      'Managed canary deployments of Java microservices across self-hosted Kubernetes (via Kops) and Amazon EKS clusters integrated with Istio service mesh for secure traffic management.',
      'Executed deployments using Jenkins, with Terraform for infrastructure provisioning and Helm for microservice releases.',
      'Deployed and managed AWS components including Lambda, API Gateway, OpenSearch, Amazon MSK, and DynamoDB, ensuring scalability and reliability across distributed systems.',
      'Used CloudWatch Logs Insights to perform log analytics, accelerating incident resolution.',
      'Automated repetitive operational tasks via shell scripting to enhance efficiency and reduce manual intervention.',
      'Designed end-to-end CI/CD pipelines in Jenkins, enabling consistent, reliable software delivery.',
      'Monitored microservices and AWS workloads using New Relic, improving visibility and proactive issue detection.',
      'Reduced production incidents by over 90%, achieving higher uptime and system reliability.',
      'Led knowledge-transfer sessions to train new engineers and standardize deployment practices across teams.',
    ],
  },
];
