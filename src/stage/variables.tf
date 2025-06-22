variable "project" {
  description = "drivex-stage"
}

variable "region" {
  description = "Região GCP onde os recursos serão criados"
  type        = string
  default     = "us-east1"
}
