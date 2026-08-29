module.exports = {
  apps : [
    {
      name   : "cloud-sql-auth-proxy",
      script : "./cloud-sql-proxy ijse-eca-module:asia-south1:mysql ijse-eca-module:asia-south1:postgresql --private-ip",
      log_file: "./logs/cloud-sql-auth-proxy.log",
    },
    {
      name   : "comment-service",
      script : "java -jar ./comment-service/target/comment-service-1.0.0.jar",
      log_file: "./logs/comment-service.log",
      instances: 2

    },
    {
      name   : "post-service",
      script : "java -jar ./post-service/target/post-service-1.0.0.jar",
      log_file: "./logs/post-service.log",
      instances: 2
    },
    {
      name   : "user-service",
      script : "java -jar ./user-service/target/user-service-1.0.0.jar",
      log_file: "./logs/user-service.log",
      instances: 2
    },
  ]
}
