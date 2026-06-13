export interface Certification {
  name: string;
  issuer: string;
  issued: string;
  expires: string;
  pdf: string;
  badge?: 'gcp' | 'aws' | 'cncf' | 'hashicorp';
}

export const certifications: Certification[] = [
  {
    name: 'Google Cloud Certified - Associate Cloud Engineer',
    issuer: 'Google Cloud',
    issued: 'Jun 2025',
    expires: 'Jun 2027',
    pdf: 'GCP_ACE.pdf',
    badge: 'gcp',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate (003)',
    issuer: 'HashiCorp',
    issued: 'Jul 2024',
    expires: 'Jul 2026',
    pdf: 'HashiCorp_Certified_Terraform.pdf',
    badge: 'hashicorp',
  },
  {
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    issued: 'Jul 2023',
    expires: 'Jul 2026',
    pdf: 'CKA.pdf',
    badge: 'cncf',
  },
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'AWS',
    issued: 'Dec 2023',
    expires: 'Dec 2026',
    pdf: 'AWS_Certified_Solutions_Architect.pdf',
    badge: 'aws',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'AWS',
    issued: 'Sept 2022',
    expires: 'Dec 2026',
    pdf: 'AWS_CCP.pdf',
    badge: 'aws',
  },
];
