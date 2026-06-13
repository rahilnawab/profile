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
      'Kubernetes',
      'Terraform',
      'Docker',
      'Helm',
      'Istio',
    ],
  },
  {
    name: 'DevOps & CI/CD',
    skills: ['Jenkins', 'Git', 'GitHub', 'Bitbucket', 'GitHub Actions'],
  },
  {
    name: 'Observability',
    skills: ['Grafana', 'New Relic', 'CloudWatch'],
  },
  {
    name: 'Platform Tooling',
    skills: [
      'Gatekeeper',
      'Cert-Manager',
      'KEDA',
      'Velero',
      'External Secrets',
      'Python',
    ],
  },
  {
    name: 'Collaboration',
    skills: ['Jira', 'Confluence'],
  },
];

export const aboutText =
  'Software Engineer with 4+ years in platform engineering and DevOps, currently building enterprise-scale GKE platforms at Lowe\u2019s. Experienced across AWS and GCP, Kubernetes at scale, CI/CD, and SRE practices \u2014 from canary deployments and service mesh to multi-region HA, cost optimization, and observability. Recognized for driving reliability initiatives and reducing production incidents. Certified across Google Cloud, AWS, Kubernetes, and Terraform.';

export const profile = {
  name: 'Rahil Nawab',
  title: 'Software Engineer',
  email: 'nawabrahil@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rahil-nawab/',
  resume: 'Rahil_Nawab.pdf',
};
