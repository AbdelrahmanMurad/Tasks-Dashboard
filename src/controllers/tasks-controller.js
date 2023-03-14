import ProcessResponse from "../models/ProcessResponse";
import Task from "../models/task";

class TasksController {
  /**
   * Functions:
   *    - Create
   *    - Read
   *    - Delete
   */

  async create(task) {
    if (
      task.name.value != "" &&
      task.category.value != "" &&
      task.details.value != "" &&
      task.startDate.value != "" &&
      task.endDate.value != ""
    ) {
      let response = await task.save();
      if (response != null) {
        return new ProcessResponse(true, "Task created successfully", response);
      } else {
        return new ProcessResponse(false, "Failed to create new task");
      }
    } else {
      return new ProcessResponse(false, "Enter required data!");
    }
  }

  async read() {
    return await Task.read();
  }

  async delete(task) {
    return await task.delete();
  }

  async update(task) {
    return await task.update();
  }
}
export default TasksController;
