Drivex 🚗

Projeto de arquitetura multinuvem com CI/CD, monitoramento e ambientes independentes para Stage e Produção, utilizando Kubernetes, Prometheus, Grafana e deploy automatizado com GitHub Actions.

Instruções de Uso

Pré-requisitos:

- Conta Google Cloud (GCP)
- gcloud, kubectl, terraform e helm instalados
- Repositório clonado localmente
- Permissões e credenciais corretas no GitHub (Secrets)

Etapas do CI/CD

Cada ambiente (Stage e Produção) possui duas pipelines:

1. Infraestrutura:
   - Criação do cluster Kubernetes com Terraform
   - Instalação do Prometheus + Grafana via Helm

2. Aplicação:
   - Build da imagem Docker da API
   - Push para o GCR
   - Deploy no cluster via kubectl apply

As pipelines são acionadas via push na branch main ou manualmente via workflow_dispatch.

Deploy Manual

Caso queira aplicar os manifestos manualmente, execute:

kubectl apply -f src/k8s/deployment-stage.yml  
kubectl apply -f src/k8s/mysql-deployment.yml  
kubectl apply -f src/k8s/mysql-service.yml  
kubectl apply -f src/k8s/mysql-configmap.yml  
kubectl apply -f src/k8s/drivex-api-service.yml  

Descrição dos Ambientes

Ambiente Stage (Homologação):

- Cloud: GCP  
- Cluster Kubernetes: cluster-stage-drivex  
- Região: us-east1  
- Repositório de imagem: gcr.io/drivex-stage/drivex-api  
- Namespace (monitoramento): monitoramento-stage ou default  

Ambiente Produção:

- Cloud: GCP (simulação de multinuvem em outra conta/projeto)  
- Cluster Kubernetes: cluster-prod-drivex  
- Região: us-east1  
- Repositório de imagem: gcr.io/drivex-prod/drivex-api  
- Namespace (monitoramento): monitoramento-prod  

Observabilidade

Cada ambiente conta com:

- Prometheus: coleta de métricas de pods, nodes, cluster
- Grafana: dashboards com CPU, Memória, Status dos Pods

Acesso (Produção):

- Grafana: http://34.118.227.125  
- Prometheus: via port-forward  
  kubectl -n monitoramento-prod port-forward svc/prometheus-server 9090:80  

Usuário padrão do Grafana: admin  
Senha padrão do Grafana: admin (ou a definida via Helm)

Testes

Para validar:

- Execute chamadas na API (/vehicles, /users, etc.)
- Monitore métricas e dashboards no Grafana
- Verifique pods e serviços com os comandos:

kubectl get pods -A  
kubectl get svc -A  

Requisitos Atendidos

- 3.1 Diagrama da infraestrutura: ok  
- 3.2 Ambiente de produção no ar: ok  
- 3.3 Ambiente de homologação no ar: ok  
- 3.4 Observabilidade funcionando: ok  
- 3.5 Validação da observabilidade: ok  
- 3.6 CRUD de teste nos dois ambientes: ok  

Observações Adicionais

- Aplicação backend em Node.js com Sequelize e MySQL
- Banco de dados rodando no mesmo cluster via PersistentVolume
- Projeto separado em múltiplos repositórios (infra, front, back)
- Deploys automatizados com GitHub Actions e GCP Secrets
