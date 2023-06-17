import NodeLogo from "./IntegrationLogos/node";
import PythonLogo from "./IntegrationLogos/python";
import AwsLogo from "./IntegrationLogos/aws";
import DockerLogo from "./IntegrationLogos/docker";
import KubernetesLogo from "./IntegrationLogos/kubernetes";
import ExpressLogo from "./IntegrationLogos/express"
import KoaLogo from "./IntegrationLogos/koa"

export enum Language {
  node = "Node",
  python = "Python",
  aws = "AWS",
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

  // AWS
  aws = "AWS",

  // Kubernetes
  kubernetes = "Kubernetes",
}

export const LANGUAGE_FRAMEWORKS: Record<Language, Framework[]> = {
  [Language.node]: [Framework.express, Framework.koa, Framework.fastify],
  [Language.python]: [Framework.flask, Framework.django],
  [Language.aws]: [Framework.aws],
  [Language.kubernetes]: [Framework.kubernetes],
};

export const LANGUAGE_TO_ICON_MAP: Record<Language, any> = {
  [Language.node]: NodeLogo,
  [Language.python]: PythonLogo,
  [Language.aws]: AwsLogo,
  [Language.kubernetes]: KubernetesLogo,
};

export const FRAMEWORK_TO_ICON_MAP: Record<Framework, any> = {
  [Framework.express]: ExpressLogo,
  [Framework.koa]: KoaLogo,
  [Framework.fastify]: NodeLogo,
  [Framework.flask]: PythonLogo,
  [Framework.django]: PythonLogo,
  [Framework.aws]: AwsLogo,
  [Framework.kubernetes]: KubernetesLogo,
};

export const FRAMEWORK_TO_HIGHLIGHT_LANGUAGE_MAP: Record<Framework, string> = {
  [Framework.express]: "typescript",
  [Framework.koa]: "typescript",
  [Framework.fastify]: "typescript",
  [Framework.flask]: "python",
  [Framework.django]: "python",
  [Framework.aws]: "bash",
  [Framework.kubernetes]: "yaml",
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
MetloFlask(app, "http://<YOUR_METLO_HOST>:8081", "<YOUR_METLO_API_KEY>")
`,
  [Framework.django]: `MIDDLEWARE = [
  ...,
  "metlo.django.MetloDjango",
]

METLO_CONFIG = {
  "API_KEY": "<YOUR_METLO_API_KEY>",
  "METLO_HOST": "http://<YOUR_METLO_HOST>:8081"
}`,
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
  [Framework.kubernetes]: `apiVersion: apps/v1
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
};
