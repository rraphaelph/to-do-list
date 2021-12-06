const Task = require("../models/Task");

const { Op, where } = require("sequelize");

module.exports = class TaskController {
  static async createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      duedate: req.body.duedate,
      done: false,
      hide: false,
    };

    if (!task.title) {
      res.status(422).json({ message: "titulo é obrigatorio" });
      return;
    }

    if (!task.description) {
      res.status(422).json({ message: "descricao é obrigatoria" });
      return;
    }

    if (!task.duedate) {
      res.status(422).json({ message: "duedate é obrigatorio" });
      return;
    }
    try {
      await Task.create(task);
      res.status(201).json({
        message: "Task cadastrada com sucesso",
        Task: task,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async removeTask(req, res) {
    const id = req.params.id;

    try {
      await Task.destroy({ where: { id: id } });

      res.json({
        message: "Tarefa excluida com sucesso",
        Id: id,
      });
    } catch (error) {
      res.status(500).json({ message: "N foi possivel excluir" });
    }
  }

  static async updateTask(req, res) {
    const id = req.params.id;

    const task = await Task.findOne({ where: { id: id }, raw: true });
    if (!task) {
      res.status(422).json({
        message: "task nao encontrada",
      });
      return;
    }
    res.json(task);
  }

  static async updateTaskPut(req, res) {
    const id = req.params;

    const { title, description, duedate } = req.body;

    const task = await Task.findOne({ where: { id: id }, raw: true });

    try {
      await Task.update(
        { title, description, duedate },
        { where: { id: req.params.id } }
      );
      res.json("tarefa atualizada");
    } catch (err) {
      res.status(500).json({ err });
    }
  }

  /* static async toggleTaskStatusHide(req, res) {
    const id = req.params;
  
   // const task = await Task.findOne({ where: { id: id }, raw: true });
  //  const { hide } = req.body
  
  const  hide= req.body.params === 1 ? true : false
  
 
    try {
      await Task.update(
        { hide },
        { where: { id: req.params.id } }
      );
      res.json(hide);
     
    } catch (err) {
      res.status(500).json({ err });
    }
  }*/

  static async toggleTaskStatusHide(req, res) {
    const id = req.body.id;
    //console.log(req);
    console.log(req.body);
    const hide = {
      hide: req.body.task.hide,
    };
 
    // await Task.findOne({ where: { id: id }, raw: true });
    try {
      await Task.update(hide, { where: { id: id } });
      res.json(hide);
    } catch (error) {
      console.log(error);
    }
  }

  static async toggleTaskStatus(req, res) {
    const id = req.body.id;
    ///console.log(req);
    console.log(req.body);
    const done = {
      done: req.body.task.done 
    };

    try {
      await Task.update(done, { where: { id: id } });
      res.json(done);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateTaskHide(req, res) {
    const id = req.params.id;

    const task = await Task.findOne({ where: { id: id }, raw: true });
    if (!task) {
      res.status(422).json({
        message: "task nao encontrada",
      });
      return;
    }
    res.json(task);
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });
    res.status(201).json(tasks);
  }

  static async searchTasks(req, res) {
    console.log(req.params);

    let buscardados = req.params.buscardados;

    let order = "DESC";

    if (req.query.order === "old") {
      order = "ASC";
    } else {
      order = "DESC";
    }

    Task.findAll({
      where: {
        title: { [Op.like]: `%${buscardados}%` },
      },
      order: [["createdAt", order]],
    }).then((data) => {
      let tasksQty = data.length;

      if (tasksQty === 0) {
        tasksQty = false;
      }

      const tasks = data.map((result) => result.get({ plain: true }));

      if (!tasks) {
        res.status(422).json({
          message: "task nao encontrada",
        });
        return;
      }
      res.status(200).json(tasks);
    });
  }
};
