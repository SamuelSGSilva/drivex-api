variable "project" {
  description = "drivex-prod"
  type        = string
}

variable "region" {
  description = "Região GCP onde os recursos serão criados"
  type        = string
  default     = "us-east1"
}
