import write from "./component";
write();

if (module.hot) {
  module.hot.accept(); // This will make current module replaceable
}
