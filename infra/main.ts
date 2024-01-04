import { Construct } from 'constructs';
import { App, TerraformStack, TerraformOutput } from 'cdktf';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Define a Terraform output
    new TerraformOutput(this, 'successOutput', {
      value: "success",
    });
  }
}

const app = new App();
new MyStack(app, 'hello-world');
app.synth();
