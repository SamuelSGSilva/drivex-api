provider "google" {
  credentials = file("${path.module}/../../src/stage/drivex-stage-c0586e8f9c25.json")
  project     = var.project
  region      = var.region
}

resource "google_container_cluster" "primary" {
  name               = "cluster-stage-drivex"
  location           = var.region
  initial_node_count = 2

  node_config {
    machine_type = "e2-medium"
    disk_size_gb = 30
    disk_type    = "pd-standard"
  }
}
