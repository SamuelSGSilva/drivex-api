provider "google" {
  credentials = file("${path.module}/../../src/prod/drivex-prod-f7c257670e52.json")
  project     = var.project
  region      = var.region
}

resource "google_container_cluster" "primary" {
  name               = "cluster-prod-drivex"
  location           = var.region
  initial_node_count = 2

  node_config {
    machine_type = "e2-medium"
    disk_size_gb = 30
    disk_type    = "pd-standard"
  }
}
