resource "aws_route53_record" "route_53_record" {
  name    = "api.deyzito.cloud"
  type    = "A"
  zone_id = var.zone_id
  alias {
    name                   = aws_alb.application_load_balancer.dns_name
    zone_id                = aws_alb.application_load_balancer.zone_id
    evaluate_target_health = true
  }
}
