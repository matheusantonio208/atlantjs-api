import { softwareObject } from './software-object.js';
import Software from './software-repository.js';
import zip from '#lib/adm-zip/adm-zip.js';

class SoftwareController {
  async index(req, res) {
    try {
      const softwareId = req.params._id;
      const softwareFound = await Software.getOneById(softwareId);

      zip();

      return res.status(201).json(softwareFound);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req, res) {
    try {
      const softwares = await Software.getAll();

      return res.status(201).json(softwares);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async create(req, res) {
    try {
      const software = softwareObject(req.body);
      const newSoftware = await Software.create(software);

      return res.status(201).json(newSoftware);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req, res) {
    try {
      const softwareId = req.params._id;
      const software = softwareObject(req.body);
      const updatedSoftware = await Software.updateById(softwareId, software);

      return res.status(201).json(updatedSoftware);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req, res) {
    try {
      const softwareId = req.params._id;

      await Software.deleteById(softwareId);

      return res.status(201).json({ success_msg: `Delete Success!` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new SoftwareController();
