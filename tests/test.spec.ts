import { it } from "mocha";
import { LoginFlow } from "../user-flows/loginFlow";
import "./afterEach";

describe('ADF Demo App', function () {
     it('login', async function () {
          await new LoginFlow().login({ username: 'guest@example.com', password: 'Password' });
     });
});