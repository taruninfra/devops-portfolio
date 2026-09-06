import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Shield } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Csharp } from "@/components/ui/svgs/csharp";

// BULLETPROOF ICONS: Pure SVG paths that adblockers cannot break
const AzureIcon = (props: any) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M5.4 3.1 0 14.9h3l4-6.4 3.5-5.4H5.4zM12 3.1l-3 4.6 3.8 6H24L12 3.1z" />
  </svg>
);

const AwsIcon = (props: any) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.004 15.688c-.642.348-1.745.59-2.924.59-3.056 0-5.326-1.706-5.326-4.996 0-3.327 2.45-5.187 5.514-5.187 1.258 0 2.215.228 2.766.456l-.443 1.57c-.456-.215-1.288-.416-2.32-.416-2.025 0-3.608 1.127-3.608 3.407 0 2.24 1.408 3.327 3.42 3.327 1.033 0 1.958-.228 2.468-.523l.453 1.772zm8.017-6.09l-1.42 5.862h-1.878l-1.127-3.662c-.174-.604-.322-1.26-.456-1.89h-.027c-.12.63-.268 1.287-.456 1.89l-1.153 3.663h-1.878l-1.475-5.863h1.838l.684 3.447c.134.724.255 1.488.335 2.133h.04c.107-.657.268-1.42.443-2.145l1.153-3.435h1.77l1.113 3.435c.174.724.335 1.488.43 2.145h.026c.08-.644.214-1.408.348-2.133l.71-3.447h1.784zm5.552 2.012c0-1.073-.778-1.57-2.052-1.958-1.006-.31-1.355-.537-1.355-1.006 0-.523.51-.872 1.34-.872.845 0 1.583.255 2.012.51l.483-1.49c-.563-.322-1.502-.563-2.602-.563-1.93 0-3.112.98-3.112 2.508 0 1.113.845 1.623 2.106 2.012 1.073.322 1.302.59 1.302 1.06 0 .536-.577.925-1.462.925-.993 0-1.838-.322-2.374-.684l-.537 1.555c.617.43 1.703.738 2.95.738 2.08 0 3.287-1.006 3.287-2.67l.014-.067zm-5.068 7.377a16.273 16.273 0 01-5.187 1.475c-1.395.148-2.428-.134-2.428-.134.12 0 .59-.51.59-.51a14.77 14.77 0 005.12-1.824 15.688 15.688 0 005.618-4.701s-.416.71-1.207 1.57c-1.234 1.302-2.508 2.374-2.508 2.374l.002.001zm-3.663-1.636s-.79-.831-2.226-2.575a28.094 28.094 0 01-1.744-2.401s-.31-1.274-1.207-2.79c.67.603 2.119 1.582 3.125 1.958 1.153.43 2.723.63 2.723.63s-1.878-.456-3.326-1.596c-1.328-1.06-2.254-2.508-2.254-2.508s-.161 1.744.59 3.514c.738 1.703 2.401 3.903 2.401 3.903l1.918 1.865z" />
  </svg>
);

const TerraformIcon = (props: any) => <img src="https://cdn.simpleicons.org/terraform/000000/ffffff" {...props} alt="Terraform" />;
const LinuxIcon = (props: any) => <img src="https://cdn.simpleicons.org/linux/000000/ffffff" {...props} alt="Linux" />;
const NginxIcon = (props: any) => <img src="https://cdn.simpleicons.org/nginx/000000/ffffff" {...props} alt="Nginx" />;

export const DATA = {
  name: "Tarun Gupta",
  initials: "TG",
  url: "https://github.com/taruninfra", 
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "DevOps & Cloud Engineer working in Azure, AWS, and Kubernetes. I build zero-trust landing zones, CI/CD pipelines, and observability stacks for regulated environments.",
  summary:
    "I'm the sole DevOps and cloud engineer at [NirJai Technologies](/#work), where I own architecture, security, and delivery across [9 client engagements](/#projects) in healthcare, pharma, fintech, and IoT. Most of the work is Azure and AWS: zero-public-IP landing zones written in Bicep, AKS microservices shipped with Helm on OIDC-federated pipelines, and Zero-Trust hardening that has closed 100% of VAPT findings on the first re-test. Along the way I've cut p99 API latency by 86%, commit-to-production lead time by 80%, MTTR by 65%, and logging costs by 80%.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Azure (AKS, ASE v3)", icon: AzureIcon },
    { name: "AWS (EC2, RDS, VPC)", icon: AwsIcon },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Docker Compose", icon: Docker },
    { name: "Terraform & Bicep", icon: TerraformIcon },
    { name: "Linux & Windows Server", icon: LinuxIcon },
    { name: "Nginx", icon: NginxIcon },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Python", icon: Python },
    { name: "C#", icon: Csharp },
    { name: "CI/CD & GitOps", icon: Icons.github },
    { name: "Zero-Trust Security", icon: Shield },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tarun.tech.it@gmail.com",
    tel: "+919650809172",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/taruninfra",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/taruncode22",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:tarun.tech.it@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "NirJai Technologies Pvt. Ltd.",
      href: "https://www.nirjai.com/",
      badges: [],
      location: "Delhi, India",
      title: "DevOps Engineer",
      logoUrl: "/nirjai.png",
      start: "March 2025",
      end: "Present",
      description:
        "Sole DevOps and cloud engineer, owning architecture, security, and delivery for 9 engagements (3 active) across regulated Azure and AWS environments in healthcare, pharma, fintech, and IoT. Design zero-public-IP Azure landing zones in Bicep and CloudFormation, ship Kubernetes (AKS) microservices via Helm on OIDC-federated CI/CD pipelines, and enforce DevSecOps and Zero-Trust hardening. Headline results across the portfolio: p99 latency down 86%, lead time down 80%, MTTR down 65%, logging cost down 80%, observability spend down 45%, and 100% VAPT closure on first re-test.",
    },
  ],
  education: [
    {
      school: "Guru Tegh Bahadur Institute of Technology, GGSIPU",
      href: "https://www.gtbit.ac.in/",
      degree: "B.Tech, Electrical & Electronics Engineering",
      logoUrl: "/gtbit.png", 
      start: "", 
      end: "",
    },
  ],
  projects: [
    {
      title: "AI Surveillance Infrastructure (Symphonia & Graphicus)",
      href: "https://www.symphoniagraphicus.com/",
      dates: "May 2026 - Present",
      active: true,
      description:
        "Solutions architect and DevOps lead for an edge-compute AI surveillance platform sustaining 99.9% uptime across 21 live telemetry feeds over 90+ days, after GPU benchmarking and provisioning NVIDIA RTX 4000 servers and PtP/PtMP wireless networks. Runs YOLOv8/TensorRT inference engines with PostgreSQL and MediaMTX (RTSP/RTMP) containerized in Docker Compose, with Zero-Trust enforced through a split-tunnelled WireGuard VPN, strict egress, and Pi-hole DNS sinkholes.",
      technologies: [
        "Docker Compose",
        "YOLOv8",
        "TensorRT",
        "PostgreSQL",
        "MediaMTX",
        "WireGuard",
        "Pi-hole",
        "NVIDIA RTX 4000",
        "Linux",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.symphoniagraphicus.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/symphonia.jpg", 
      video: "",
    },
    {
      title: "Enterprise Hybrid Cloud Landing Zone & Migration (GATX India)",
      href: "https://www.gatx.com/",
      dates: "April 2025 - Present",
      active: true,
      description:
        "Codified a zero-public-IP Azure landing zone in Bicep (4 zoned subnets, deny-all NSGs, Private Endpoints), eliminating 100% of standing credentials and reducing the attack surface to 0 reachable public assets, validated by Microsoft Defender. Operates an OIDC-federated GitOps pipeline promoting SHA-tagged containers across 30+ deployments a month. Migrated 2.8 TB of on-prem SharePoint data to M365 with 0 data loss using a throttling-aware, multi-threaded Python engine (MSAL, REST APIs) that recovers gracefully from 429/503 tenant responses, alongside MuleSoft API and Intune MDM integration.",
      technologies: [
        "Azure",
        "Bicep",
        "Private Endpoints",
        "NSGs",
        "GitOps",
        "OIDC Federation",
        "Python",
        "MSAL",
        "Microsoft 365",
        "MuleSoft",
        "Intune",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.gatx.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/gatx.svg", 
      video: "",
    },
    {
      title: "Internal IT Zero-Trust & Release Automation (NirJai)",
      href: "https://www.nirjai.com/",
      dates: "March 2025 - Present",
      active: true,
      description:
        "Resolved 26 security-audit findings across 37 endpoints and servers by architecting a default-deny WireGuard VPN, deploying Wazuh SIEM, and automating UFW and Bash rules with Ansible for SSH GeoIP anomaly blocking. Cut release cycles 73% (45 to 12 minutes) across 6+ production apps by standardizing Jenkins and GitHub Actions pipelines with SonarQube quality gates, tuning Linux kernels via sysctl, and engineering Restic encrypted backups.",
      technologies: [
        "WireGuard",
        "Wazuh SIEM",
        "Ansible",
        "UFW",
        "Jenkins",
        "GitHub Actions",
        "SonarQube",
        "Restic",
        "Bash",
        "Linux",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.nirjai.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nirjai-project.png", 
      video: "",
    },
    {
      title: "High-Throughput ELT Data Platform (NewsQuant)",
      href: "https://www.newsquant.com/",
      dates: "June 2026 - August 2026",
      active: false,
      description:
        "Led an ELT-over-ETL data platform scaling to 24.7M time-series records, designing a resilient 3-tier PostgreSQL warehouse with star-schema modelling across 10+ sources, building delta-load transformers, and managing a Next.js/Plotly monorepo. Reached 99.9% execution success on data-acquisition pipelines by orchestrating headless-browser automation (Selenium/Chromium) through multi-profile Docker Compose and running 19+ idempotent SQL migrations.",
      technologies: [
        "PostgreSQL",
        "Python",
        "Docker Compose",
        "Selenium",
        "Chromium",
        "SQL",
        "Next.js",
        "Plotly",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.newsquant.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/newsquant.svg", 
      video: "",
    },
    {
      title: "AKS Microservices Platform (TradrLab)",
      href: "https://tradrlab.com/",
      dates: "April 2026 - June 2026",
      active: false,
      description:
        "Reduced commit-to-production lead time 80% for an AI algorithmic-trading platform by orchestrating a React/C#/Python microservices stack on Azure Kubernetes Service with Helm templates and Azure Pipelines. Engineered horizontal scalability with HPA autoscaling and namespace-scoped RBAC, configured Kubernetes CronJobs for Apache Arrow Flight workloads, and deployed cache-busted Docker builds via Azure Container Registry.",
      technologies: [
        "Azure Kubernetes Service",
        "Helm",
        "Azure Pipelines",
        "Azure Container Registry",
        "HPA Autoscaling",
        "Kubernetes RBAC",
        "React",
        "C#",
        "Python",
        "Apache Arrow Flight",
      ],
      links: [
        {
          type: "Website",
          href: "https://tradrlab.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tradrlab.png", 
      video: "",
    },
    {
      title: "Logging Re-Architecture & Disaster Recovery (Quanted, UK)",
      href: "https://www.quanted.com/",
      dates: "February 2026 - April 2026",
      active: false,
      description:
        "Cut logging-infrastructure costs 80% and removed cluster overhead for 5 GB/day of logs by retiring Elasticsearch and building a lightweight full-text search and trace-correlation engine on SQLite FTS5 and FastAPI. Achieved a validated 24-hour RPO and 2-hour RTO for Supabase/PostgreSQL through a nightly automated dump-and-restore pipeline that strictly verifies schema, role, and sequence integrity.",
      technologies: [
        "SQLite FTS5",
        "FastAPI",
        "Python",
        "Supabase",
        "PostgreSQL",
        "Bash",
        "Elasticsearch",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.quanted.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/quanted.png",
      video: "",
    },
    {
      title: "Azure ASE v3 Re-Architecture & Security (Aztute Corp, USA)",
      href: "https://www.aztute.com/",
      dates: "October 2025 - February 2026",
      active: false,
      description:
        "Reduced p99 API latency 86% (850 to 120 ms) for a healthcare ecosystem by migrating .NET and SQL microservices into a single-tenant Azure App Service Environment (ASE v3) behind Front Door, WAF, and APIM, guided by KQL telemetry. Closed 100% of VAPT findings on the first re-test by mitigating LUCKY13 CBC timing attacks with TLS 1.3, enforcing HSTS, centralizing secrets in Key Vault, and provisioning Mirth Connect with Azure Data Factory SSIS.",
      technologies: [
        "Azure ASE v3",
        "Azure Front Door",
        "WAF",
        "APIM",
        "Key Vault",
        "Application Insights (KQL)",
        ".NET",
        "SQL Server",
        "TLS 1.3",
        "Mirth Connect",
        "Azure Data Factory",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.aztute.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/aztute.png",
      video: "",
    },
    {
      title: "Self-Healing AWS Multi-Tier Infrastructure (Ultragenic)",
      href: "https://ultragenicglobal.com/",
      dates: "July 2025 - October 2025",
      active: false,
      description:
        "Drove MTTR down 65% by engineering a proactive, self-healing observability pipeline that uses CloudWatch telemetry to trigger SNS alerts and event-driven Lambda functions for automated EC2 remediation. Achieved a sub-5-minute RPO in live recovery drills by architecting a highly available multi-tier AWS environment with parameterized CloudFormation, least-privilege IAM, and isolated RDS with point-in-time recovery.",
      technologies: [
        "AWS",
        "CloudFormation",
        "Lambda",
        "CloudWatch",
        "SNS",
        "EC2",
        "RDS (PITR)",
        "IAM",
        "VPC",
      ],
      links: [
        {
          type: "Website",
          href: "https://ultragenicglobal.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ultragenic.png",
      video: "",
    },
    {
      title: "Observability Pipeline & Release Automation (Mankind Pharma)",
      href: "https://www.mankindpharma.com/",
      dates: "March 2025 - July 2025",
      active: false,
      description:
        "Trimmed cloud observability spend 45% and drove MTTD down to 2 minutes by replacing Azure Application Insights with a self-hosted ELK, Prometheus, and Grafana stack, including custom C# Serilog middleware for the Elastic APM cutover. Accelerated BI releases from 2 hours to under 10 minutes with modular Jenkins declarative pipelines, Apache Superset provisioning, and a custom Python CLI that promotes dashboards with zero standing credentials.",
      technologies: [
        "ELK Stack",
        "Prometheus",
        "Grafana",
        "Elastic APM",
        "Serilog",
        "C#",
        "Jenkins",
        "Apache Superset",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.mankindpharma.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mankind.svg", 
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Pseudo-Static Electromagnetic Reactive Power Compensator",
      dates: "January 2020",
      location: "Publication: IEEMA Journal",
      description:
        "Published research on a pseudo-static electromagnetic approach to reactive power compensation.",
      image: "",
      links: [
        {
          title: "View Publication",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1h7QTZKjV4nX8ECp97VBwEUV1V88lWMnZ/view?usp=sharing",
        },
      ],
    },
    {
      title: "2nd Prize — GGSIPU Inter-College Major Project Competition",
      dates: "", 
      location: "GGSIPU, Delhi",
      description:
        "Runner-up across GGSIPU colleges for the final-year engineering major project.",
      image: "",
      links: [
        {
          title: "View Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1qfeiGmx_bzhL4haHxAPBHwLcEP4EU6vU/view?usp=sharing",
        },
      ],
    },
    {
      title: "1st Place, North Zone — Robo-Mania National Robotics Championship",
      dates: "", 
      location: "Delhi Technological University (DTU)",
      description:
        "Won the North Zone round of the national robotics championship hosted at DTU.",
      image: "",
      links: [
        {
          title: "View Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1ykNyL_eTAaai1deawxO5l6RxTfObN9iz/view?usp=sharing",
        },
      ],
    },
    {
      title: "Engineering Intern",
      dates: "", 
      location: "Central Electricity Authority of India (CEA)",
      description:
        "Completed a foundational engineering internship at the CEA, a premier institute of national importance, gaining exposure to national power infrastructure standards.",
      image: "",
      links: [
        {
          title: "View Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/10jop_UDGRgiXJ-Cq2umDu1tVuthhckdC/view?usp=sharing",
        },
      ],
    },
    {
      title: "Engineering Intern",
      dates: "", 
      location: "Northern Regional Load Dispatch Center (NRLDC)",
      description:
        "Engaged in technical training and observation at NRLDC, gaining early exposure to large-scale power grid management and telemetry.",
      image: "",
      links: [
        {
          title: "View Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1XSppMUp9tywE2CeczQRVlYx4EX4iEjvL/view?usp=sharing",
        },
      ],
    },
  ],
} as const;