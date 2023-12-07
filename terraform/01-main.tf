terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "4.45.0"
    }
  }
}
provider "aws" {
  region  = "us-east-1"
}


output "app_url" {
  value = aws_alb.application_load_balancer.dns_name
}
