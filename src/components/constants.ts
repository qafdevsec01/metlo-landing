import NodeLogo from "./IntegrationLogos/node";
import PythonLogo from "./IntegrationLogos/python";
import GoLogo from "./IntegrationLogos/go";
import GinLogo from "./IntegrationLogos/gin";
import JavaLogo from "./IntegrationLogos/java";
import NginxLogo from "./IntegrationLogos/nginx";
import AwsLogo from "./IntegrationLogos/aws";
import GcpLogo from "./IntegrationLogos/gcp";
import DockerLogo from "./IntegrationLogos/docker";
import KubernetesLogo from "./IntegrationLogos/kubernetes";
import LinkerdLogo from "./IntegrationLogos/linkerd";
import ExpressLogo from "./IntegrationLogos/express";
import KoaLogo from "./IntegrationLogos/koa";
import FastifyLogo from "./IntegrationLogos/fastify";
import FlaskLogo from "./IntegrationLogos/flask";
import DjangoLogo from "./IntegrationLogos/django";

export enum Language {
  node = "Node",
  python = "Python",
  go = "Go",
  java = "Java",
  nginx = "Nginx",
  aws = "AWS",
  gcp = "GCP",
  docker = "Docker",
  kubernetes = "Kubernetes",
}

export enum Framework {
  // Node
  express = "Express",
  koa = "Koa",
  fastify = "Fastify",

  // Python
  flask = "Flask",
  django = "Django",

  // Go
  gin = "Gin",
  gorilla = "Gorilla",

  // Java
  maven = "Maven",
  gradle = "Gradle",

  // Nginx
  nginx = "Nginx",

  // AWS
  aws = "AWS Traffic Mirror",
  fargate = "Fargate",

  // GCP
  gcp = "GCP Traffic Mirror",

  // Docker
  docker = "Docker",

  // Kubernetes
  sidecar = "Sidecar",
  daemonset = "Daemonset",
  linkerd = "Linkerd",
}

export const LANGUAGE_FRAMEWORKS: Record<Language, Framework[]> = {
  [Language.node]: [Framework.express, Framework.koa, Framework.fastify],
  [Language.python]: [Framework.flask, Framework.django],
  [Language.go]: [Framework.gin, Framework.gorilla],
  [Language.java]: [Framework.maven, Framework.gradle],
  [Language.nginx]: [Framework.nginx],
  [Language.aws]: [Framework.aws, Framework.fargate],
  [Language.gcp]: [Framework.gcp],
  [Language.docker]: [Framework.docker],
  [Language.kubernetes]: [
    Framework.daemonset,
    Framework.sidecar,
    Framework.linkerd,
  ],
};

export const LANGUAGE_TO_ICON_MAP: Record<Language, any> = {
  [Language.node]: NodeLogo,
  [Language.python]: PythonLogo,
  [Language.go]: GoLogo,
  [Language.java]: JavaLogo,
  [Language.nginx]: NginxLogo,
  [Language.aws]: AwsLogo,
  [Language.gcp]: GcpLogo,
  [Language.docker]: DockerLogo,
  [Language.kubernetes]: KubernetesLogo,
};

export const FRAMEWORK_TO_ICON_MAP: Record<Framework, any> = {
  [Framework.express]: ExpressLogo,
  [Framework.koa]: KoaLogo,
  [Framework.fastify]: FastifyLogo,
  [Framework.flask]: FlaskLogo,
  [Framework.django]: DjangoLogo,
  [Framework.gin]: GinLogo,
  [Framework.gorilla]: GoLogo,
  [Framework.maven]: JavaLogo,
  [Framework.gradle]: JavaLogo,
  [Framework.nginx]: NginxLogo,
  [Framework.aws]: AwsLogo,
  [Framework.fargate]: AwsLogo,
  [Framework.gcp]: GcpLogo,
  [Framework.docker]: DockerLogo,
  [Framework.daemonset]: KubernetesLogo,
  [Framework.sidecar]: KubernetesLogo,
  [Framework.linkerd]: LinkerdLogo,
};

export const FRAMEWORK_TO_HIGHLIGHT_LANGUAGE_MAP: Record<Framework, string> = {
  [Framework.express]: "typescript",
  [Framework.koa]: "typescript",
  [Framework.fastify]: "typescript",
  [Framework.flask]: "python",
  [Framework.django]: "python",
  [Framework.gin]: "go",
  [Framework.gorilla]: "go",
  [Framework.maven]: "java",
  [Framework.gradle]: "java",
  [Framework.nginx]: "plaintext",
  [Framework.aws]: "bash",
  [Framework.fargate]: "json",
  [Framework.gcp]: "bash",
  [Framework.docker]: "yaml",
  [Framework.sidecar]: "yaml",
  [Framework.daemonset]: "yaml",
  [Framework.linkerd]: "yaml",
};

export const FRAMEWORK_TO_TEXT_MAP: Record<Framework, string> = {
  [Framework.express]: `import { initExpress as metlo } from "metlo";
...
const app = express();
...
app.use(
  metlo(
    {
      key: <YOUR_METLO_API_KEY>,
      host: "http://<YOUR_METLO_HOST>:8081",
    }
  )
);`,
  [Framework.koa]: `import { initKoa as metlo } from "metlo";
...
const app = new Koa();
...
app.use(
  metlo(
    {
      key: <YOUR_METLO_API_KEY>,
      host: "http://<YOUR_METLO_HOST>:8081",
    }
  )
);`,
  [Framework.fastify]: `import { initFastify as metlo } from "metlo";
...
const fastify = Fastify();
...
fastify.register(
  metlo(
    {
      key: <YOUR_METLO_API_KEY>,
      host: "http://<YOUR_METLO_HOST>:8081",
    }
  )
);`,
  [Framework.flask]: `from flask import Flask

from metlo.flask import MetloFlask

app = Flask(__name__)
MetloFlask(app, "http://<YOUR_METLO_HOST>:8081", "<YOUR_METLO_API_KEY>")`,
  [Framework.django]: `MIDDLEWARE = [
  ...,
  "metlo.django.MetloDjango",
]

METLO_CONFIG = {
  "API_KEY": "<YOUR_METLO_API_KEY>",
  "METLO_HOST": "http://<YOUR_METLO_HOST>:8081"
}`,
  [Framework.gin]: `import (
    "net/http"
    ...

    "github.com/metlo-labs/metlo/ingestors/golang/metlo"
    <EXPORT_NAME> "github.com/metlo-labs/metlo/ingestors/golang/gin"
)

func main() {
    metlo := metlo.InitMetlo("https://app.metlo.com", "<YOUR_METLO_API_KEY>")
    instrumentation := <EXPORT_NAME>.Init(metlo)

    r.Use(instrumentation.Middleware)
    ...
}`,
  [Framework.gorilla]: `import (
    "net/http"
    ...

    "github.com/metlo-labs/metlo/ingestors/golang/metlo"
    <EXPORT_NAME> "github.com/metlo-labs/metlo/ingestors/golang/gorilla"
)

func main() {
    metlo := metlo.InitMetlo("https://app.metlo.com", "<YOUR_METLO_API_KEY>")
    instrumentation := <EXPORT_NAME>.Init(metlo)

    r.Use(instrumentation.Middleware)
    ...
}`,
  [Framework.maven]: `package com.example.demo;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// Metlo imported here import com.metlo.spring.Metlo;

@Configuration public class FilterConfig {

    @Bean
    public FilterRegistrationBean<Metlo> loggingFilter() {
        FilterRegistrationBean<Metlo> registrationBean = new FilterRegistrationBean<>();

        // Metlo registered as a filter here
        registrationBean.setFilter(new Metlo("http://<YOUR_METLO_HOST>:8081", "<YOUR_METLO_API_KEY>"));
        registrationBean.setOrder(2);
        return registrationBean;
    }

}`,
  [Framework.gradle]: `package com.example.demo;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// Metlo imported here import com.metlo.spring.Metlo;

@Configuration public class FilterConfig {

    @Bean
    public FilterRegistrationBean<Metlo> loggingFilter() {
        FilterRegistrationBean<Metlo> registrationBean = new FilterRegistrationBean<>();

        // Metlo registered as a filter here
        registrationBean.setFilter(new Metlo("http://<YOUR_METLO_HOST>:8081", "<YOUR_METLO_API_KEY>"));
        registrationBean.setOrder(2);
        return registrationBean;
    }

}`,
  [Framework.nginx]: `# In the main configuration block
...
load_module                     modules/ngx_metlo_module.so;
thread_pool                     metlo threads=2 max_queue=65536;
...`,
  [Framework.aws]: `$ metlo traffic-mirror aws new
✔ Select your AWS region · us-west-2
✔ What type of source do you want to mirror? · instance
✔ Enter the id of your source · i-xxxxxxxxxxxxxxxxx
Finding Source...
Success!
✔ Enter the id of your Metlo Mirroring Instance:  · i-xxxxxxxxxxxxxxxxx
Creating Mirror Session...
Success!
`,
  [Framework.fargate]: `{
    ...
    "containerDefinitions": [
        ...
        {
            "name": "metlo",
            "image": "metlo/agent",
            "environment": [
                {
                    "name": "METLO_HOST",
                    "value": "https://app.metlo.com"
                },
                {
                    "name": "METLO_KEY",
                    "value": "<YOUR_METLO_API_KEY>"
                }
            ]
        }
    ]
}`,
  [Framework.gcp]: `$ metlo traffic-mirror gcp new
✔ GCP Project Name · metlo-security
✔ GCP Network to mirror · default
✔ Select your GCP zone · us-central1-a
✔ Path to GCP key file · <PATH TO GCP KEY FILE>
✔ Validated account details
Validated account details succesfully
✔ Select your mirror source type · SUBNET
✔ Enter the mirror source subnet name · default
✔ Verified mirror source details
✔ Created destination subnet
✔ Created Firewall rule
✔ Obtained router details
✔ Mirror Instance Type · e2-standard-2
✔ Metlo URL · http://<YOUR_METLO_HOST>:8081
✔ Metlo API Key · <YOUR_METLO_API_KEY>
✔ Created MIG for metlo
✔ Created health check
✔ Creating Backend service for packet mirroring
✔ Created load balancer
✔ Started packet mirroring`,
  [Framework.docker]: `version: "3.9"

services:
  <your-service>:
    ...
  metlo:
    image: metlo/agent
    network_mode: "service:<your-service>"
    depends_on:
      - <your-service>
    cap_add:
      - NET_ADMIN
    environment:
      - METLO_HOST=http://<YOUR_METLO_HOST>:8081
      - METLO_KEY=<YOUR_METLO_API_KEY>`,
  [Framework.daemonset]: `apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: metlo-app
spec:
  selector:
    matchLabels:
      name: metlo-app
  template:
    metadata:
      labels:
        name: metlo-app
    spec:
      hostNetwork: true
      tolerations:
        - key: node-role.kubernetes.io/master
          effect: NoSchedule
      containers:
        - name: metlo-agent
          image: metlo/agent
          securityContext:
            privileged: true
          env:
            - name: METLO_HOST
              value: https://app.metlo.com:8081
            - name: METLO_KEY
              value: <YOUR_METLO_API_KEY>`,
  [Framework.sidecar]: `kind: Pod
apiVersion: v1
metadata:
  name: test-app 
  labels:
    app: test-app 
spec:
  containers:
  - name: test-app 
    image: hashicorp/http-echo:0.2.3
    args:
    - "-text=Hello World! This is a Metlo Kubernetes with kind App"
  - name: metlo-sidecar
    image: metlo/agent
    securityContext:
      privileged: true
    env:
      - name: METLO_HOST
        value: https://app.metlo.com:8081
      - name: METLO_KEY
        value: <YOUR_METLO_API_KEY>`,
  [Framework.linkerd]: `- name: metlo
  image: metlo/agent
  securityContext:
    privileged: true
  env:
    - name: METLO_HOST
      value: https://app.metlo.com:8081
    - name: METLO_KEY
      value: <YOUR_METLO_API_KEY>
    - name: INTERFACE
      value: lo
    - name: ENABLE_LINKERD
      value: "true"`,
};

export const LANGUAGE_DOCS_LINK: Record<Framework, string> = {
  [Framework.express]: "nodejs",
  [Framework.koa]: "nodejs",
  [Framework.fastify]: "nodejs",
  [Framework.flask]: "python",
  [Framework.django]: "python",
  [Framework.gin]: "go",
  [Framework.gorilla]: "go",
  [Framework.maven]: "java",
  [Framework.gradle]: "java",
  [Framework.nginx]: "nginx",
  [Framework.aws]: "aws",
  [Framework.fargate]: "aws-fargate",
  [Framework.gcp]: "gcp",
  [Framework.docker]: "docker-compose",
  [Framework.daemonset]: "kubernetes",
  [Framework.sidecar]: "kubernetes",
  [Framework.linkerd]: "linkerd",
};
