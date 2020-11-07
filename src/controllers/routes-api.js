import { Router } from 'express';

import Software from '#controllers/Software/software-controller.js';

class Routes {
  constructor() {
    this.route = new Router();

    this.software('/software');
  }

  software(baseRoute) {
    this.route.get(`${baseRoute}/getone/:_id`, Software.index);
    this.route.get(`${baseRoute}/getall`, Software.show);
    this.route.put(`${baseRoute}/update/:_id`, Software.update);
    this.route.post(`${baseRoute}/create`, Software.create);
    this.route.delete(`${baseRoute}/delete/:_id`, Software.delete);
  }
}

export default new Routes().route;
