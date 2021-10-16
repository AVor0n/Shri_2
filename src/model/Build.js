class Build {
  constructor(id, status, message, author, branch, commit, date, time) {
    this.id = id;
    this.status = status;
    this.message = message;
    this.author = author;
    this.branch = branch;
    this.commit = commit;
    this.date = date;
    this.time = time;
  }
}
export default Build;
