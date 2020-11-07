import Software from '#schemas/Software.js';

class SoftwareRepository {
  async getOneById(id) {
    const software = await Software.findById(id);

    if (software) return software;

    throw new Error(`Error to get ${id}`);
  }

  async getAll() {
    const softwares = await Software.find();

    if (softwares) return softwares;

    throw new Error('Error to get all Softwares');
  }

  async create(data) {
    const software = await Software.create(data);

    if (software) return software;

    throw new Error(`Error to create Softwares ${data.id}`);
  }

  async deleteById(id) {
    if (!(await Software.findByIdAndDelete(id))) {
      throw new Error(`Error to delete Softwares ${id}`);
    }
  }

  async updateById(id, data) {
    const software = await Software.findByIdAndUpdate(id, data);

    if (software) return software;

    throw new Error(`Error to update Software ${id}`);
  }
}

export default new SoftwareRepository();
