export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Cloud & Platform',
    skills: [
      'GCP',
      'GKE',
      'AWS',
      'EKS',
      'Kubernetes',
      'Terraform',
      'Docker',
      'Helm',
      'Istio',
      'NGINX Ingress',
      'Kops',
      'Lambda',
      'API Gateway',
      'DynamoDB',
      'Amazon MSK',
      'OpenSearch',
      'KEDA',
      'Velero',
      'Goldilocks',
      'Gatekeeper',
      'Cert-Manager',
      'External Secrets',
      'GCP IAM',
      'Wiz',
    ],
  },
  {
    name: 'DevOps & CI/CD',
    skills: [
      'Jenkins',
      'Git',
      'GitHub',
      'Bitbucket',
      'GitHub Actions',
      'Shell Scripting',
      'Canary Deployments',
      'Python',
    ],
  },
  {
    name: 'Observability',
    skills: [
      'Grafana',
      'New Relic',
      'CloudWatch',
      'CloudWatch Logs Insights',
    ],
  },
  {
    name: 'Collaboration',
    skills: ['Jira', 'Confluence'],
  },
];

export const aboutText =
  'Platform Engineer with 5+ years in platform engineering and DevOps, currently building enterprise-scale GKE platforms at Lowe\u2019s. Experienced across AWS and GCP, Kubernetes at scale, CI/CD, and SRE practices - from canary deployments and service mesh to multi-region HA, cost optimization, and observability. Recognized for driving reliability initiatives and reducing production incidents. Certified across Google Cloud, AWS, Kubernetes, and Terraform.';

export const profile = {
  name: 'Rahil Nawab',
  title: 'Platform Engineer',
  email: 'nawabrahil@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rahil-nawab/',
  resume: 'Rahil_Nawab.pdf',
  siteUrl: 'https://rahilnawab.github.io/profile/',
};

export const seo = {
  title: 'Rahil Nawab - Platform Engineer | GKE, Kubernetes, AWS, GCP',
  description:
    'Platform Engineer with 5+ years building enterprise GKE platforms at Lowe\u2019s. Expert in Kubernetes, GCP, AWS, Terraform, Istio, and CI/CD. CKA, GCP ACE, AWS SAA, and Terraform certified.',
  keywords:
    'Platform Engineer, DevOps, GKE, Kubernetes, GCP, AWS, Terraform, Istio, SRE, Cloud Native, Rahil Nawab',
};
