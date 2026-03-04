const AwsManagedServices = () => {
  return (
    <>
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center mb-4">
              <span className="bg-sky-100 text-sky-600 px-4 py-1 text-sm font-medium tracking-wide uppercase rounded">
                Services
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] text-[#100033] font-semibold leading-tight">
              AWS Managed Services
            </h1>
            <p className="mt-4 text-base md:text-lg text-[#100033]/80 leading-relaxed">
              Luvetha Tech Solutions helps businesses plan, migrate, secure, and scale
              AWS environments with reliable cloud operations and governance.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="w-full lg:w-[45%]">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight">
                AWS Migration
              </h2>
            </div>
            <div className="w-full lg:w-[55%]">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Database migration, cloud-to-cloud migration, on-premise to AWS
                migration, application modernization and refactoring, and environment
                assessment with TCO analysis and architecture design.
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-300 opacity-40"></div>
        </div>
      </section>

      <section className="w-full bg-sky-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-5/12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-sky-600 leading-tight">
                Managed AWS Security and Compliance
              </h2>
            </div>
            <div className="w-full md:w-7/12">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                24x7 security monitoring, threat detection and remediation, data
                encryption and integrity controls, identity and access hardening, and
                compliance support across standards such as HIPAA, PCI, GDPR, SOX, and
                ISO 27001.
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-sky-200"></div>
        </div>
      </section>

      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="w-full lg:w-[45%]">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight">
                DevOps Implementation and Delivery
              </h2>
            </div>
            <div className="w-full lg:w-[55%] text-base sm:text-lg text-gray-700 leading-relaxed space-y-3">
              <p>
                <span className="font-semibold">Containerization and Management:</span>{" "}
                ECS, ECR, Kubernetes, AWS Fargate.
              </p>
              <p>
                <span className="font-semibold">CI/CD:</span> API Gateway, CodePipeline,
                CodeDeploy, CodeCommit, CodeBuild.
              </p>
              <p>
                <span className="font-semibold">Infrastructure Automation:</span> Lambda,
                Elastic Beanstalk, Auto Scaling, and test automation tools.
              </p>
              <p>
                <span className="font-semibold">Monitoring and Observability:</span>{" "}
                Kinesis, Cognito, AWS Config, X-Ray.
              </p>
              <p>
                <span className="font-semibold">Infrastructure as Code:</span> AWS CLI
                and EC2 API-driven provisioning workflows.
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-300 opacity-40"></div>
        </div>
      </section>
    </>
  );
};

export default AwsManagedServices;
