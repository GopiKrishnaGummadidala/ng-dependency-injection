import { Component } from "@angular/core";
class UserService {
  printMsg() {
    console.log("HI this is from UserService");
  }
}

class Component {
  constructor(public userService: UserService) {}
}

// Angular DI
class Injector {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach((service) =>
      this._container.set(service, new service())
    );
  }

  get(service: any) {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw Error("No Provider found!!");
    }
    return serviceInstance;
  }
}

const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));

component.userService.printMsg();
